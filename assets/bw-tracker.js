(function () {
  "use strict";

  if (window.__BWT_TRACKER_READY__) return;
  window.__BWT_TRACKER_READY__ = true;

  var script =
    document.currentScript ||
    (function () {
      var scripts = document.getElementsByTagName("script");
      return scripts[scripts.length - 1];
    })();

  var trackerVersion = "0.3.1";
  var scriptUrl = script && script.src ? script.src : window.location.href;
  var endpoint =
    (script && script.dataset.endpoint) ||
    new URL("/wp-json/bwt/v1/track", scriptUrl).toString();
  var configEndpoint = endpoint.replace(/\/track(?:\?.*)?$/, "/config");
  var deviceStatusEndpoint = endpoint.replace(/\/track(?:\?.*)?$/, "/device-status");
  var pageKey =
    (script && script.dataset.pageKey) ||
    (document.body && (document.body.dataset.bwtPage || document.body.dataset.bwtxPage)) ||
    window.location.pathname.replace(/^\/+|\/+$/g, "").replace(/\//g, "_") ||
    "landing";
  var params = new URLSearchParams(window.location.search || "");
  var sensitiveUrlKeys = new Set([
    "token", "access", "access_token", "accesstoken", "api_key", "apikey",
    "password", "pass", "email", "phone", "wa", "whatsapp", "secret",
    "verify", "verify_token", "verifytoken", "attempt", "attempt_id", "attemptid",
    "session_token", "sessiontoken", "order_id", "orderid", "snap_token", "snaptoken",
    "authorization", "auth", "key"
  ]);

  function normalizeProductKey(value) {
    var key = clean(value, 160).toLowerCase().replace(/[^a-z0-9_-]/g, "_");
    var aliases = {
      "dari_nol": "paket_dari_nol",
      "kerja_jepang": "panduan_kerja_jepang",
      "mandiri_ai": "paket_belajar_mandiri_ai",
      "flashcard": "paket_flashcard_lengkap",
      "jft": "jft_basic",
      "jlpt": "jlpt",
      "tes": "tes_level_once",
      "tebak": "kuis_jebakan_jepang"
    };
    return aliases[key] || key;
  }

  function detectProductKey() {
    var explicit =
      (script && script.dataset.productKey) ||
      (document.body && (document.body.dataset.productKey || document.body.dataset.bwtProduct)) ||
      "";
    if (explicit) return normalizeProductKey(explicit);

    var queryProduct =
      params.get("product") ||
      params.get("product_key") ||
      params.get("productKey") ||
      "";
    if (queryProduct) return normalizeProductKey(queryProduct);

    var selected = document.querySelector("[data-bwtx-product][aria-current='true'], [data-bwtx-product].active, [data-product-key].active");
    return normalizeProductKey(
      selected &&
        (selected.getAttribute("data-bwtx-product") ||
          selected.getAttribute("data-product-key")),
    );
  }

  var productKey = detectProductKey();
  var host = String(window.location.hostname || "").toLowerCase();
  var inferredCookieDomain = host === "belajarwibu.com" || /\.belajarwibu\.com$/.test(host)
    ? ".belajarwibu.com"
    : "";
  var cookieDomain = script && script.dataset.cookieDomain ? script.dataset.cookieDomain : inferredCookieDomain;
  var metaMode = script && script.dataset.metaMode ? script.dataset.metaMode : "off";
  var metaPixelId = script && script.dataset.metaPixelId ? script.dataset.metaPixelId : "";
  var metaPageView = !!(script && script.dataset.metaPageView === "1");
  var sessionTimeoutMs = 30 * 60 * 1000;
  var scrollSent = {};
  var queueKey = "bwt_event_queue_v2";
  var deadLetterKey = "bwt_event_dead_letter_v1";

  function clean(value, limit) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, limit || 180);
  }

  function makeId(prefix) {
    if (window.crypto && window.crypto.randomUUID) {
      return prefix + "_" + window.crypto.randomUUID().replace(/-/g, "");
    }
    return prefix + "_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 12);
  }

  function getCookie(name) {
    var match = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/[.$?*|{}()[\]\\/+^]/g, "\\$&") + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : "";
  }

  function setCookie(name, value, maxAge) {
    var domain = cookieDomain ? "; domain=" + cookieDomain : "";
    var secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; path=/; max-age=" +
      String(maxAge || 31536000) +
      "; SameSite=Lax" +
      domain +
      secure;
  }

  function storageGet(key) {
    try {
      return window.localStorage.getItem(key) || "";
    } catch (error) {
      return "";
    }
  }

  function storageSet(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {}
  }

  function jsonGet(key) {
    var raw = storageGet(key) || getCookie(key);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch (error) {
      return null;
    }
  }

  function jsonSet(key, value, maxAge) {
    var raw = JSON.stringify(value);
    storageSet(key, raw);
    setCookie(key, raw, maxAge || 90 * 24 * 60 * 60);
  }

  function visitorId() {
    var key = "bwt_visitor_id";
    var value = getCookie(key) || storageGet(key);
    if (!/^[A-Za-z0-9_-]{8,160}$/.test(value)) value = makeId("v");
    storageSet(key, value);
    setCookie(key, value, 365 * 24 * 60 * 60);
    return value;
  }

  function sessionId() {
    var key = "bwt_session_id";
    var lastKey = "bwt_session_last";
    var now = Date.now();
    var value = getCookie(key) || storageGet(key);
    var last = parseInt(getCookie(lastKey) || storageGet(lastKey) || "0", 10);
    if (!/^[A-Za-z0-9_-]{8,160}$/.test(value) || !last || now - last > sessionTimeoutMs) {
      value = makeId("s");
    }
    storageSet(key, value);
    storageSet(lastKey, String(now));
    setCookie(key, value, 60 * 60);
    setCookie(lastKey, String(now), 60 * 60);
    return value;
  }

  function safeUrlValue(value) {
    if (!value) return "";
    try {
      var url = new URL(value, window.location.href);
      Array.from(url.searchParams.keys()).forEach(function (key) {
        if (sensitiveUrlKeys.has(String(key || "").toLowerCase())) {
          url.searchParams.delete(key);
        }
      });
      // Hash tidak pernah dikirim ke tracker. Hash dapat berisi sessionToken/access token.
      url.hash = "";
      return url.toString();
    } catch (error) {
      return "";
    }
  }

  function safePageUrl() {
    return safeUrlValue(window.location.href) || (window.location.origin + window.location.pathname);
  }

  function safeReferrer() {
    return safeUrlValue(document.referrer || "");
  }

  function currentAttribution() {
    return {
      utmSource: clean(params.get("utm_source"), 160),
      utmMedium: clean(params.get("utm_medium"), 160),
      utmCampaign: clean(params.get("utm_campaign"), 160),
      utmContent: clean(params.get("utm_content"), 160),
      utmTerm: clean(params.get("utm_term"), 160),
      fbclid: clean(params.get("fbclid"), 255),
      gclid: clean(params.get("gclid"), 255),
      ttclid: clean(params.get("ttclid"), 255),
      landingUrl: safePageUrl(),
      firstReferrer: safeReferrer(),
      capturedAt: new Date().toISOString(),
    };
  }

  function hasCampaign(data) {
    return !!(data.utmSource || data.utmMedium || data.utmCampaign || data.fbclid || data.gclid || data.ttclid || safeReferrer());
  }

  function attribution() {
    var current = currentAttribution();
    var first = jsonGet("bwt_attr_first");
    var last = jsonGet("bwt_attr_last");
    if (!first && hasCampaign(current)) {
      first = current;
      jsonSet("bwt_attr_first", first);
    }
    if (!first) {
      first = current;
      jsonSet("bwt_attr_first", first);
    }
    if (hasCampaign(current)) {
      last = current;
      jsonSet("bwt_attr_last", last);
    }
    if (!last) last = first;
    return { first: first || {}, last: last || {} };
  }

  var currentVisitorId = visitorId();
  var currentSessionId = sessionId();
  var currentInternalToken = getCookie("bwt_internal_token") || storageGet("bwt_internal_token") || "";
  var currentInternalValid = false;
  var attr = attribution();

  function basePayload() {
    return {
      pageKey: clean(pageKey, 160).toLowerCase().replace(/[^a-z0-9_-]/g, "_"),
      productKey: clean(productKey, 160).toLowerCase().replace(/[^a-z0-9_-]/g, "_"),
      visitorId: currentVisitorId,
      sessionId: currentSessionId,
      pageUrl: safePageUrl(),
      path: window.location.pathname,
      referrer: safeReferrer(),
      utmSource: attr.first.utmSource || "",
      utmMedium: attr.first.utmMedium || "",
      utmCampaign: attr.first.utmCampaign || "",
      utmContent: attr.first.utmContent || "",
      utmTerm: attr.first.utmTerm || "",
      lastUtmSource: attr.last.utmSource || "",
      lastUtmMedium: attr.last.utmMedium || "",
      lastUtmCampaign: attr.last.utmCampaign || "",
      lastUtmContent: attr.last.utmContent || "",
      lastUtmTerm: attr.last.utmTerm || "",
      fbclid: attr.first.fbclid || attr.last.fbclid || "",
      gclid: attr.first.gclid || attr.last.gclid || "",
      ttclid: attr.first.ttclid || attr.last.ttclid || "",
      landingUrl: attr.first.landingUrl || safePageUrl(),
      firstReferrer: attr.first.firstReferrer || "",
      timestamp: new Date().toISOString(),
      trackerVersion: trackerVersion,
      internalToken: clean(currentInternalToken, 160),
      sourceOrigin: window.location.origin || "",
    };
  }

  function storageRemove(key) {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {}
  }

  function queueRead() {
    var raw = storageGet(queueKey);
    if (!raw) return [];
    try {
      var items = JSON.parse(raw);
      if (!Array.isArray(items)) return [];
      return items.slice(-50).map(function (item) {
        if (item && item.payload) return item;
        return { payload: item || {}, attempts: 0, nextAttemptAt: 0 };
      });
    } catch (error) {
      return [];
    }
  }

  function queueWrite(items) {
    storageSet(queueKey, JSON.stringify((items || []).slice(-50)));
  }

  function retryDelay(attempts, status) {
    if (status === 429) return Math.min(10 * 60 * 1000, 60000 * Math.max(1, attempts));
    return Math.min(10 * 60 * 1000, Math.pow(2, Math.min(8, Math.max(1, attempts))) * 1000);
  }

  function isPermanentStatus(status) {
    return status === 400 || status === 401 || status === 403 || status === 413 || status === 422;
  }

  function queueAdd(payload, error) {
    var status = error && error.status ? Number(error.status) : 0;
    if (isPermanentStatus(status)) {
      deadLetterAdd(payload, "HTTP " + status);
      return;
    }
    var items = queueRead();
    var exists = items.some(function (item) {
      return item && item.payload && item.payload.eventId === payload.eventId;
    });
    if (exists) return;
    items.push({
      payload: payload,
      attempts: 1,
      nextAttemptAt: Date.now() + retryDelay(1, status),
    });
    queueWrite(items);
    scheduleFlush();
  }

  function request(payload, url, method) {
    return fetch(url || endpoint, {
      method: method || "POST",
      headers: { "Content-Type": "application/json" },
      body: method === "GET" ? undefined : JSON.stringify(payload || {}),
      keepalive: (url || endpoint) === endpoint,
      credentials: "omit",
    }).then(function (response) {
      return response.json().catch(function () { return {}; }).then(function (data) {
        if (!response.ok) {
          var error = new Error((data && data.message) || (data && data.error) || ("HTTP " + response.status));
          error.status = response.status;
          error.data = data || {};
          throw error;
        }
        return data || {};
      });
    });
  }

  function deadLetterRead() {
    var raw = storageGet(deadLetterKey);
    if (!raw) return [];
    try {
      var items = JSON.parse(raw);
      return Array.isArray(items) ? items.slice(-50) : [];
    } catch (error) {
      return [];
    }
  }

  function deadLetterAdd(item, reason) {
    var items = deadLetterRead();
    items.push({
      event: item || {},
      reason: clean(reason || "rejected", 120),
      rejectedAt: new Date().toISOString(),
    });
    storageSet(deadLetterKey, JSON.stringify(items.slice(-50)));
  }

  var flushTimer = 0;
  function scheduleFlush(delay) {
    if (flushTimer) window.clearTimeout(flushTimer);
    var items = queueRead();
    if (!items.length) return;
    var now = Date.now();
    var nextAt = items.reduce(function (min, item) {
      var value = Number(item.nextAttemptAt || 0);
      return !min || value < min ? value : min;
    }, 0);
    var wait = typeof delay === "number" ? delay : Math.max(500, nextAt - now);
    flushTimer = window.setTimeout(flushQueue, Math.min(wait, 10 * 60 * 1000));
  }

  function flushQueue() {
    flushTimer = 0;
    var items = queueRead();
    if (!items.length || !navigator.onLine) {
      if (items.length) scheduleFlush(30000);
      return;
    }
    var now = Date.now();
    var due = items.filter(function (item) { return Number(item.nextAttemptAt || 0) <= now; }).slice(0, 20);
    if (!due.length) {
      scheduleFlush();
      return;
    }
    var payloads = due.map(function (item) { return item.payload; });
    var dueIds = {};
    due.forEach(function (item) {
      if (item.payload && item.payload.eventId) dueIds[item.payload.eventId] = item;
    });

    request({ events: payloads })
      .then(function (data) {
        var accepted = {};
        var rejected = Array.isArray(data.rejectedEvents) ? data.rejectedEvents : [];
        (Array.isArray(data.acceptedEventIds) ? data.acceptedEventIds : []).forEach(function (id) {
          accepted[id] = true;
        });
        if (!Object.keys(accepted).length && !rejected.length && data && data.ok === true) {
          Object.keys(dueIds).forEach(function (id) { accepted[id] = true; });
        }
        var rejectionMap = {};
        rejected.forEach(function (entry) {
          if (entry && entry.eventId) rejectionMap[entry.eventId] = entry;
        });
        var updated = queueRead().filter(function (item) {
          var id = item && item.payload ? item.payload.eventId : "";
          if (!id || !dueIds[id]) return true;
          if (accepted[id]) return false;
          var rejection = rejectionMap[id];
          if (rejection && rejection.retryable === false) {
            deadLetterAdd(item.payload, rejection.code || "rejected");
            return false;
          }
          item.attempts = Number(item.attempts || 0) + 1;
          item.nextAttemptAt = Date.now() + retryDelay(item.attempts, 0);
          return true;
        });
        queueWrite(updated);
        scheduleFlush(updated.length ? 1000 : undefined);
      })
      .catch(function (error) {
        var status = Number(error && error.status ? error.status : 0);
        var updated = queueRead().filter(function (item) {
          var id = item && item.payload ? item.payload.eventId : "";
          if (!id || !dueIds[id]) return true;
          if (isPermanentStatus(status)) {
            deadLetterAdd(item.payload, "HTTP " + status);
            return false;
          }
          item.attempts = Number(item.attempts || 0) + 1;
          item.nextAttemptAt = Date.now() + retryDelay(item.attempts, status);
          return true;
        });
        queueWrite(updated);
        scheduleFlush();
      });
  }

  function loadRuntimeConfig() {
    return request({}, configEndpoint, "GET").then(function (data) {
      if (data && data.ok) {
        metaMode = clean(data.metaMode || metaMode, 20) || "off";
        metaPixelId = clean(data.metaPixelId || metaPixelId, 40);
        metaPageView = data.metaSendPageView === true;
        if (!cookieDomain && data.cookieDomain) cookieDomain = clean(data.cookieDomain, 120);
      }
      return data;
    }).catch(function () { return {}; });
  }

  function validateInternalDevice() {
    if (!currentInternalToken) {
      currentInternalValid = false;
      return Promise.resolve(false);
    }
    return request({
      internalToken: currentInternalToken,
      visitorId: currentVisitorId,
    }, deviceStatusEndpoint).then(function (data) {
      currentInternalValid = !!(data && data.internal);
      if (!currentInternalValid) {
        storageRemove("bwt_internal_token");
        setCookie("bwt_internal_token", "", -1);
        currentInternalToken = "";
      }
      return currentInternalValid;
    }).catch(function () {
      currentInternalValid = !!currentInternalToken;
      return currentInternalValid;
    });
  }

  function metaTrack(eventType, payload) {
    if (currentInternalValid || metaMode === "off" || !window.fbq) return;
    if (eventType === "page_view") {
      if (!metaPageView || window.__BWT_META_PAGEVIEW_SENT) return;
      window.__BWT_META_PAGEVIEW_SENT = true;
      window.fbq("track", "PageView");
    } else if (eventType === "checkout_click") {
      window.fbq("track", "InitiateCheckout", {
        content_name: payload.label || payload.pageKey || "Landing Page",
        content_category: payload.productKey || "landing_page",
      });
    } else if (eventType === "cta_click") {
      window.fbq("trackCustom", "CTAClick", {
        label: payload.label || "",
        page_key: payload.pageKey || "",
        product_key: payload.productKey || "",
      });
    } else if (eventType === "form_submit_success") {
      window.fbq("track", "Lead", {
        content_name: payload.label || payload.pageKey || "Landing Form",
      });
    } else if (eventType.indexOf("scroll_") === 0) {
      window.fbq("trackCustom", "BWTScroll", {
        milestone: eventType.replace("scroll_", ""),
        page_key: payload.pageKey || "",
      });
    }
  }

  function send(eventType, extra) {
    currentSessionId = sessionId();
    var payload = Object.assign(basePayload(), extra || {}, {
      eventType: clean(eventType || "custom_event", 80).toLowerCase(),
      eventId: (extra && extra.eventId) || makeId("e"),
    });
    request(payload).catch(function (error) {
      queueAdd(payload, error);
    });
    metaTrack(payload.eventType, payload);
    return payload.eventId;
  }

  function initMetaPixel() {
    if (currentInternalValid || metaMode === "off" || metaMode === "existing") return;
    if (!metaPixelId || window.fbq) return;
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", metaPixelId);
  }

  function closestTrackElement(target) {
    if (!target || !target.closest) return null;
    return target.closest("[data-bwt-click], [data-track], [data-bwtx-track], a[href], button");
  }

  function hasTrackingClass(el) {
    if (!el || !el.classList) return false;
    return [
      "feature-link",
      "trust-item",
      "single-banner-link",
      "quick-login",
      "footer-social-link",
      "banner-cta-link",
      "btn",
      "button",
    ].some(function (name) {
      return el.classList.contains(name);
    });
  }

  function eventTypeForElement(el) {
    var explicit = el.getAttribute("data-bwt-click") || el.getAttribute("data-bwtx-track");
    if (explicit) return clean(explicit, 80).toLowerCase();
    var href = el.getAttribute("href") || "";
    var label = labelForElement(el).toLowerCase();
    var classes = (el.className && String(el.className).toLowerCase()) || "";
    if (
      /recommend|rekomendasi|offer-link/.test(classes) ||
      /lihat produk|lihat rekomendasi|produk yang cocok|rekomendasi/.test(label)
    ) {
      return "recommendation_click";
    }
    if (href && /checkout|payment|order|bayar|product=/i.test(href)) return "checkout_click";
    if (el.hasAttribute("data-track") || el.hasAttribute("data-bwt-cta") || hasTrackingClass(el)) return "cta_click";
    return "";
  }

  function labelForElement(el) {
    return (
      el.getAttribute("data-bwt-label") ||
      el.getAttribute("data-track") ||
      el.getAttribute("aria-label") ||
      el.getAttribute("title") ||
      clean(el.textContent || el.value || el.innerText || "", 160) ||
      "(tanpa label)"
    );
  }

  function bindClicks() {
    document.addEventListener(
      "click",
      function (event) {
        var el = closestTrackElement(event.target);
        if (!el) return;
        var eventType = eventTypeForElement(el);
        if (!eventType) return;
        send(eventType, {
          label: labelForElement(el),
          targetUrl: safeUrlValue(el.href || el.getAttribute("href") || ""),
        });
      },
      true,
    );
  }

  function bindForms() {
    var started = typeof WeakSet !== "undefined" ? new WeakSet() : null;
    document.addEventListener(
      "input",
      function (event) {
        var form = event.target && event.target.closest ? event.target.closest("form") : null;
        if (!form) return;
        if (started && started.has(form)) return;
        if (started) started.add(form);
        send("form_start", {
          label:
            form.getAttribute("data-bwt-label") ||
            form.getAttribute("aria-label") ||
            form.getAttribute("id") ||
            form.getAttribute("name") ||
            "Form mulai diisi",
          targetUrl: safeUrlValue(form.getAttribute("action") || window.location.href),
          formStatus: "started",
        });
      },
      true,
    );
    document.addEventListener(
      "submit",
      function (event) {
        var form = event.target;
        if (!form || !form.tagName || form.tagName.toLowerCase() !== "form") return;
        send("form_submit_attempt", {
          label:
            form.getAttribute("data-bwt-label") ||
            form.getAttribute("aria-label") ||
            form.getAttribute("id") ||
            form.getAttribute("name") ||
            "Form submit",
          targetUrl: safeUrlValue(form.getAttribute("action") || window.location.href),
          formStatus: "attempt",
        });
      },
      true,
    );
  }

  function scrollPercent() {
    var doc = document.documentElement;
    var body = document.body || doc;
    var scrollTop = window.pageYOffset || doc.scrollTop || body.scrollTop || 0;
    var height = Math.max(body.scrollHeight, doc.scrollHeight, body.offsetHeight, doc.offsetHeight, body.clientHeight, doc.clientHeight);
    var viewport = window.innerHeight || doc.clientHeight || 1;
    if (height <= viewport + 2) return 0;
    return Math.min(100, Math.round((scrollTop / Math.max(1, height - viewport)) * 100));
  }

  function bindScroll() {
    var ticking = false;
    var milestones = [25, 50, 75, 90];
    function check() {
      ticking = false;
      var percent = scrollPercent();
      milestones.forEach(function (milestone) {
        if (percent >= milestone && !scrollSent[milestone]) {
          scrollSent[milestone] = true;
          send("scroll_" + milestone, { label: "Scroll " + milestone + "%", scrollPercent: milestone });
        }
      });
    }
    window.addEventListener(
      "scroll",
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(check);
      },
      { passive: true },
    );
    window.addEventListener("load", check, { once: true });
    window.setTimeout(check, 500);
  }



  function installTransactionFetchBridge() {
    if (window.__BWT_TRANSACTION_FETCH_BRIDGE__ || typeof window.fetch !== "function") return;
    window.__BWT_TRANSACTION_FETCH_BRIDGE__ = true;
    var nativeFetch = window.fetch;

    window.fetch = function (input, init) {
      var requestProductKey = productKey;
      var isCreatePayment = false;
      try {
        var url = typeof input === "string" ? input : input && input.url ? input.url : "";
        isCreatePayment = /\/wp-json\/bwtx\/v1\/create-payment(?:\?|$)/i.test(url);
        if (isCreatePayment && init && typeof init.body === "string") {
          var body = JSON.parse(init.body);
          var latestAttr = attribution();
          requestProductKey = normalizeProductKey(
            body.productKey || body.product_key || body.source || productKey,
          );
          body.visitorId = body.visitorId || currentVisitorId;
          body.sessionId = body.sessionId || sessionId();
          body.utmSource = body.utmSource || latestAttr.first.utmSource || "";
          body.utmMedium = body.utmMedium || latestAttr.first.utmMedium || "";
          body.utmCampaign = body.utmCampaign || latestAttr.first.utmCampaign || "";
          body.utmContent = body.utmContent || latestAttr.first.utmContent || "";
          body.utmTerm = body.utmTerm || latestAttr.first.utmTerm || "";
          body.lastUtmSource = body.lastUtmSource || latestAttr.last.utmSource || "";
          body.lastUtmMedium = body.lastUtmMedium || latestAttr.last.utmMedium || "";
          body.lastUtmCampaign = body.lastUtmCampaign || latestAttr.last.utmCampaign || "";
          body.lastUtmContent = body.lastUtmContent || latestAttr.last.utmContent || "";
          body.lastUtmTerm = body.lastUtmTerm || latestAttr.last.utmTerm || "";
          body.fbclid = body.fbclid || latestAttr.first.fbclid || latestAttr.last.fbclid || "";
          body.gclid = body.gclid || latestAttr.first.gclid || latestAttr.last.gclid || "";
          body.ttclid = body.ttclid || latestAttr.first.ttclid || latestAttr.last.ttclid || "";
          body.landingUrl = body.landingUrl || latestAttr.first.landingUrl || safePageUrl();
          body.firstReferrer = body.firstReferrer || latestAttr.first.firstReferrer || "";
          body.referrer = body.referrer || safeReferrer();
          body.pageUrl = body.pageUrl || safePageUrl();
          init = Object.assign({}, init, { body: JSON.stringify(body) });
        }
      } catch (error) {}

      var result = nativeFetch.call(this, input, init);
      if (!isCreatePayment || !result || typeof result.then !== "function") return result;

      return result.then(function (response) {
        send(response.ok ? "checkout_created" : "checkout_error", {
          label: response.ok ? "Pembayaran berhasil dibuat" : "Gagal membuat pembayaran",
          productKey: requestProductKey || productKey,
          checkoutProductKey: requestProductKey || productKey,
          note: "HTTP " + response.status,
        });
        return response;
      }).catch(function (error) {
        send("checkout_error", {
          label: "Gagal menghubungi pembayaran",
          productKey: requestProductKey || productKey,
          checkoutProductKey: requestProductKey || productKey,
          note: clean(error && error.message, 255),
        });
        throw error;
      });
    };
  }

  function bindCheckoutDetails() {
    if (/\/checkout\/?$/i.test(window.location.pathname) || clean(pageKey, 160) === "checkout") {
      send("checkout_view", {
        label: "Halaman checkout dibuka",
        productKey: detectProductKey() || productKey,
      });
    }

    document.addEventListener(
      "change",
      function (event) {
        var input = event.target;
        if (!input || input.type !== "checkbox") return;
        if (
          !input.matches("[name='orderBump'], [data-bwt-order-bump], .bwtx-bump input[type='checkbox']")
        ) return;
        var root = input.closest("[data-bwtx-bump-product], .bwtx-bump") || input;
        var bumpKey =
          root.getAttribute("data-bwtx-bump-product") ||
          input.getAttribute("data-bwt-order-bump") ||
          "order_bump";
        send("order_bump_toggle", {
          label: input.checked ? "Order bump dipilih" : "Order bump dibatalkan",
          selected: input.checked ? "1" : "0",
          checkoutProductKey: normalizeProductKey(bumpKey),
        });
      },
      true,
    );
  }

  function exposeApi() {
    window.BWTracker = {
      version: trackerVersion,
      pageKey: pageKey,
      productKey: productKey,
      track: send,
      formSuccess: function (data) {
        return send("form_submit_success", Object.assign({ formStatus: "success" }, data || {}));
      },
      formFailed: function (data) {
        return send("form_submit_failed", Object.assign({ formStatus: "failed" }, data || {}));
      },
      quizStart: function (data) {
        return send("quiz_start", data || {});
      },
      quizComplete: function (data) {
        return send("quiz_complete", data || {});
      },
      recommendationView: function (data) {
        return send("recommendation_view", data || {});
      },
      recommendationClick: function (data) {
        return send("recommendation_click", data || {});
      },
      visitorId: function () {
        return currentVisitorId;
      },
      sessionId: function () {
        return currentSessionId;
      },
      attribution: function () {
        return attr;
      },
      isInternal: function () {
        return !!currentInternalValid;
      },
      flush: flushQueue,
    };
  }

  function bootstrap() {
    Promise.all([loadRuntimeConfig(), validateInternalDevice()]).then(function () {
      initMetaPixel();
      installTransactionFetchBridge();
      exposeApi();
      bindClicks();
      bindForms();
      bindScroll();
      bindCheckoutDetails();
      flushQueue();
      send("page_view", { label: document.title || "Page view" });
    });
  }

  window.addEventListener("online", function () { scheduleFlush(500); });
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") scheduleFlush(500);
  });
  window.setInterval(function () {
    if (queueRead().length) scheduleFlush(500);
  }, 60000);

  bootstrap();
})();
