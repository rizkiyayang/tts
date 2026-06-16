(() => {
  "use strict";

  const INTERNAL_SIZE = 9;
  const DEFAULT_TARGET_WORDS = 12;
  const DEFAULT_MIN_WORDS = 12;
  const MAX_HINTS = 3;
  const MAX_WORD_LENGTH = 9;
  const TTS_LEVEL = String(document.body.dataset.level || "N5").toUpperCase();
  const TTS_LEVEL_ID = TTS_LEVEL.toLowerCase();
  const TTS_PRODUCT_KEY = document.body.dataset.productKey || `tts_${TTS_LEVEL_ID}_30d`;
  const TTS_API_BASE = "https://admin.belajarwibu.com/wp-json/bwtx/v1";
  const ACTIVE_PUZZLE_KEY = `tts${TTS_LEVEL}ActivePuzzleV5`;
  const LEGACY_ACTIVE_PUZZLE_KEY = `tts${TTS_LEVEL}ActivePuzzleV4`;
  const COMPLETED_KEY = `tts${TTS_LEVEL}CompletedV3`;
  const USED_WORDS_KEY = `tts${TTS_LEVEL}UsedWordsV3`;
  const TTS_FREE_KEY = `tts_free_trial_${TTS_LEVEL_ID}_v2`;
  const TTS_SESSION_KEY = `tts_access_session_${TTS_PRODUCT_KEY}`;
  const TTS_RETURN_KEY = "bwtx_return_params_v1";
  const TTS_ACCESS_META_KEY = `tts_access_meta_${TTS_PRODUCT_KEY}`;
  const TTS_CHECKOUT_PROFILE_KEY = "tts_checkout_profile_v1";

  const TTS_CHECKOUT_PRODUCT_KEY = "paket_tts_30d";
  const TTS_MINIMUM_AMOUNT = 10000;
  const TTS_DEFAULT_AMOUNT = 25000;
  const TTS_PRODUCTS = {
    paket_tts_30d: {
      title: "Semua Level TTS JLPT",
      price: TTS_DEFAULT_AMOUNT,
      minimumPrice: TTS_MINIMUM_AMOUNT,
      priceText: "mulai Rp10.000",
      durationText: "30 hari",
      path: "./"
    },
  };

  const ROMAJI_MAP = {
    kya:"きゃ",kyu:"きゅ",kyo:"きょ",sha:"しゃ",shu:"しゅ",sho:"しょ",sya:"しゃ",syu:"しゅ",syo:"しょ",
    cha:"ちゃ",chu:"ちゅ",cho:"ちょ",tya:"ちゃ",tyu:"ちゅ",tyo:"ちょ",nya:"にゃ",nyu:"にゅ",nyo:"にょ",
    hya:"ひゃ",hyu:"ひゅ",hyo:"ひょ",mya:"みゃ",myu:"みゅ",myo:"みょ",rya:"りゃ",ryu:"りゅ",ryo:"りょ",
    gya:"ぎゃ",gyu:"ぎゅ",gyo:"ぎょ",ja:"じゃ",ju:"じゅ",jo:"じょ",jya:"じゃ",jyu:"じゅ",jyo:"じょ",
    bya:"びゃ",byu:"びゅ",byo:"びょ",pya:"ぴゃ",pyu:"ぴゅ",pyo:"ぴょ",
    fa:"ふぁ",fi:"ふぃ",fe:"ふぇ",fo:"ふぉ",va:"ゔぁ",vi:"ゔぃ",vu:"ゔ",ve:"ゔぇ",vo:"ゔぉ",
    tsa:"つぁ",tsi:"つぃ",tse:"つぇ",tso:"つぉ",she:"しぇ",je:"じぇ",che:"ちぇ",ti:"てぃ",di:"でぃ",
    a:"あ",i:"い",u:"う",e:"え",o:"お",ka:"か",ki:"き",ku:"く",ke:"け",ko:"こ",
    sa:"さ",shi:"し",si:"し",su:"す",se:"せ",so:"そ",ta:"た",chi:"ち",ti2:"ち",tsu:"つ",tu:"つ",te:"て",to:"と",
    na:"な",ni:"に",nu:"ぬ",ne:"ね",no:"の",ha:"は",hi:"ひ",fu:"ふ",hu:"ふ",he:"へ",ho:"ほ",
    ma:"ま",mi:"み",mu:"む",me:"め",mo:"も",ya:"や",yu:"ゆ",yo:"よ",ra:"ら",ri:"り",ru:"る",re:"れ",ro:"ろ",
    wa:"わ",wo:"を",ga:"が",gi:"ぎ",gu:"ぐ",ge:"げ",go:"ご",za:"ざ",ji:"じ",zi:"じ",zu:"ず",ze:"ぜ",zo:"ぞ",
    da:"だ",de:"で",do:"ど",ba:"ば",bi:"び",bu:"ぶ",be:"べ",bo:"ぼ",pa:"ぱ",pi:"ぴ",pu:"ぷ",pe:"ぺ",po:"ぽ",
    la:"ぁ",li:"ぃ",lu:"ぅ",le:"ぇ",lo:"ぉ",xa:"ぁ",xi:"ぃ",xu:"ぅ",xe:"ぇ",xo:"ぉ",xtsu:"っ",ltsu:"っ",xya:"ゃ",xyu:"ゅ",xyo:"ょ"
  };
  ROMAJI_MAP.ti = "ち";

  const state = {
    puzzle: null,
    words: [],
    solutionGrid: [],
    values: {},
    cellEls: {},
    wordsByCell: {},
    currentWordId: null,
    currentDir: "A",
    activeCellKey: null,
    hintsLeft: MAX_HINTS,
    hintedCells: new Set(),
    lockedCells: new Set(),
    solvedWordIds: new Set(),
    reviewCounts: {},
    wordBuffers: {},
    wordKana: {},
    revealed: false,
    finished: false,
    composing: false,
    completed: Number(localStorage.getItem(COMPLETED_KEY) || 0),
  };

  let ttsAccessGranted = false;
  let currentAccessData = null;
  let activeCheckoutProductKey = TTS_CHECKOUT_PRODUCT_KEY;
  let checkoutAmount = TTS_DEFAULT_AMOUNT;
  let syncTimer = null;
  let accessGateReason = "trial";
  let pendingAccessAction = null;
  let trialPaywallPending = false;
  
  function shuffle(items) {
    const array = [...items];
    for (let index = array.length - 1; index > 0; index--) {
      const random = Math.floor(Math.random() * (index + 1));
      [array[index], array[random]] = [array[random], array[index]];
    }
    return array;
  }

  function storageJSON(key, fallback = null) {
    try {
      const value = JSON.parse(localStorage.getItem(key) || "null");
      return value === null ? fallback : value;
    } catch {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }


  function viewportPuzzleProfile() {
    return { target: 12, min: 12, maxRows: 9, maxCols: 9 };
  }

  function readingVariants(value) {
    return String(value || "").split("/").map((item) => item.trim()).filter(Boolean);
  }

  function kanaUnits(value) {
    return Array.from(String(value || "").normalize("NFC"));
  }

  function hasKanji(value) {
    return /[\u3400-\u9fff々〆ヵヶ]/.test(String(value || ""));
  }

  function isKatakana(value) {
    return /^[\u30a1-\u30faー・]+$/.test(String(value || ""));
  }

  function katakanaToHiragana(value) {
    return Array.from(String(value || "")).map((char) => {
      const code = char.codePointAt(0);
      return code >= 0x30a1 && code <= 0x30f6 ? String.fromCodePoint(code - 0x60) : char;
    }).join("");
  }

  function hiraganaToKatakana(value) {
    return Array.from(String(value || "")).map((char) => {
      const code = char.codePointAt(0);
      return code >= 0x3041 && code <= 0x3096 ? String.fromCodePoint(code + 0x60) : char;
    }).join("");
  }

  const KANA_ROMAJI = {};
  Object.entries(ROMAJI_MAP).forEach(([romaji, kana]) => {
    if (!KANA_ROMAJI[kana] || romaji.length < KANA_ROMAJI[kana].length) KANA_ROMAJI[kana] = romaji.replace(/2$/, "");
  });
  Object.assign(KANA_ROMAJI, { ん:"n",し:"shi",ち:"chi",つ:"tsu",ふ:"fu",じ:"ji",きゃ:"kya",きゅ:"kyu",きょ:"kyo",しゃ:"sha",しゅ:"shu",しょ:"sho",ちゃ:"cha",ちゅ:"chu",ちょ:"cho",じゃ:"ja",じゅ:"ju",じょ:"jo" });

  function kanaVowel(char) {
    const hira = katakanaToHiragana(char);
    const romaji = KANA_ROMAJI[hira] || "";
    const match = romaji.match(/[aeiou](?!.*[aeiou])/);
    return match ? match[0] : "";
  }

  function vowelKana(vowel) {
    return ({ a:"あ", i:"い", u:"う", e:"え", o:"お" })[vowel] || "";
  }

  function expandLongMarksToHiragana(value) {
    const output = [];
    for (const raw of kanaUnits(katakanaToHiragana(value.replace(/[\s・]/g, "")))) {
      if (raw === "ー") {
        const previous = output[output.length - 1] || "";
        output.push(vowelKana(kanaVowel(previous)) || "ー");
      } else {
        output.push(raw);
      }
    }
    return output.join("");
  }

  function kanaToRomaji(value, naturalLong = true) {
    const chars = kanaUnits(katakanaToHiragana(value));
    let output = "";
    for (let index = 0; index < chars.length; index++) {
      const char = chars[index];
      const next = chars[index + 1] || "";
      if (char === "ー") {
        if (naturalLong) {
          const match = output.match(/[aeiou](?!.*[aeiou])/);
          output += match ? match[0] : "-";
        } else output += "-";
        continue;
      }
      if (char === "っ") {
        const pair = KANA_ROMAJI[next + (chars[index + 2] || "")] || KANA_ROMAJI[next] || "";
        output += pair ? pair[0] : "xtsu";
        continue;
      }
      if (char === "ん") {
        const nextPair = KANA_ROMAJI[next + (chars[index + 2] || "")] || KANA_ROMAJI[next] || "";
        output += /^[aeiouy]/.test(nextPair) ? "n'" : "n";
        continue;
      }
      const combined = KANA_ROMAJI[char + next];
      if (combined) { output += combined; index++; continue; }
      output += KANA_ROMAJI[char] || char;
    }
    return output;
  }

  function romanToHiragana(input) {
    let value = String(input || "").normalize("NFKC").toLowerCase().replace(/[\s_]/g, "");
    value = value.replace(/ā/g,"aa").replace(/ī/g,"ii").replace(/ū/g,"uu").replace(/ē/g,"ee").replace(/ō/g,"oo");
    let output = "";
    let index = 0;
    while (index < value.length) {
      const char = value[index];
      if (/[\u3040-\u30ffー]/.test(char)) { output += katakanaToHiragana(char); index++; continue; }
      if (char === "-") { output += "ー"; index++; continue; }
      if (char === "n") {
        const next = value[index + 1] || "";
        const after = value[index + 2] || "";
        if (next === "'") { output += "ん"; index += 2; continue; }
        if (!next) { output += "ん"; index++; continue; }
        if (next === "n") {
          output += "ん";
          index += (/[aeiouy]/.test(after) ? 1 : 2);
          continue;
        }
        if (!/[aeiouy]/.test(next)) { output += "ん"; index++; continue; }
      }
      if (index + 1 < value.length && char === value[index + 1] && /[bcdfghjklmpqrstvwxyz]/.test(char) && char !== "n") {
        output += "っ"; index++; continue;
      }
      let matched = false;
      for (const length of [3,2,1]) {
        const token = value.slice(index, index + length);
        const kana = ROMAJI_MAP[token];
        if (kana) { output += kana; index += length; matched = true; break; }
      }
      if (!matched) index++;
    }
    return output;
  }

  function inferClueLabel(item) {
    if (item.clueLabel) return item.clueLabel;
    const chapters = (item.chapter || []).join(" ").toLowerCase();
    const choices = ["kata tanya","kata sambung","kata benda","kata kerja","kata sifat","ungkapan","kata serapan","kata keterangan"];
    const match = choices.find((choice) => chapters.includes(choice));
    if (match) return match.replace(/\b\w/g, (char) => char.toUpperCase());
    if (isKatakana(item.question)) return "Kata serapan";
    return "Kosakata";
  }

  function buildWordBank() {
    const source = Array.isArray(window.VOCABS) ? window.VOCABS : [];
    const words = [];
    source.forEach((item, sourceIndex) => {
      const question = String(item.question || "").trim();
      const variants = readingVariants(item.reading);
      if (!question || !variants.length || !item.meaning) return;
      const solution = isKatakana(question) ? question : variants[0];
      const units = kanaUnits(solution);
      if (!/^[\u3041-\u3096\u30a1-\u30faー]+$/.test(solution)) return;
      if (units.length < 2 || units.length > MAX_WORD_LENGTH) return;
      const acceptedSolutions = [solution];
      variants.forEach((reading) => {
        const normalized = isKatakana(question) ? hiraganaToKatakana(reading) : reading;
        if (kanaUnits(normalized).length === units.length) acceptedSolutions.push(normalized);
      });
      words.push({
        sourceId: `${sourceIndex}:${question}:${solution}`,
        q: question,
        w: solution,
        units,
        m: String(item.meaning).trim(),
        chapter: item.chapter || [],
        clueLabel: inferClueLabel(item),
        example: item.example || "",
        exampleMeaning: item.exampleMeaning || "",
        hasKanji: hasKanji(question),
        script: isKatakana(solution) ? "katakana" : "hiragana",
        acceptedSolutions: [...new Set(acceptedSolutions)],
        r: kanaToRomaji(solution, true),
      });
    });
    const seen = new Set();
    return words.filter((word) => {
      const key = `${word.q}|${word.w}|${word.m}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function wordKey(word) {
    return `${word.q}|${word.w}|${word.m}`;
  }

  function loadUsedWordKeys() {
    const value = storageJSON(USED_WORDS_KEY, []);
    return Array.isArray(value) ? value : [];
  }

  function saveUsedWordKeys(keys) {
    saveJSON(USED_WORDS_KEY, [...new Set(keys)].slice(-2500));
  }

  function createInternalGrid() {
    return Array.from({ length: INTERNAL_SIZE }, () => Array(INTERNAL_SIZE).fill(null));
  }

  function inInternalBounds(row, col) {
    return row >= 0 && col >= 0 && row < INTERNAL_SIZE && col < INTERNAL_SIZE;
  }

  function canPlace(grid, entry, row, col, dir, requireCross = true) {
    const units = entry.units;
    const endRow = dir === "D" ? row + units.length - 1 : row;
    const endCol = dir === "A" ? col + units.length - 1 : col;
    if (!inInternalBounds(row,col) || !inInternalBounds(endRow,endCol)) return null;
    const before = dir === "A" ? [row,col-1] : [row-1,col];
    const after = dir === "A" ? [row,endCol+1] : [endRow+1,col];
    if (inInternalBounds(...before) && grid[before[0]][before[1]]) return null;
    if (inInternalBounds(...after) && grid[after[0]][after[1]]) return null;
    let crosses = 0;
    for (let index = 0; index < units.length; index++) {
      const currentRow = dir === "D" ? row + index : row;
      const currentCol = dir === "A" ? col + index : col;
      const cell = grid[currentRow][currentCol];
      if (cell) {
        if (cell.char !== units[index] || cell.dirs.has(dir)) return null;
        crosses++;
      } else {
        const sideA = dir === "A" ? [currentRow-1,currentCol] : [currentRow,currentCol-1];
        const sideB = dir === "A" ? [currentRow+1,currentCol] : [currentRow,currentCol+1];
        if (inInternalBounds(...sideA) && grid[sideA[0]][sideA[1]]) return null;
        if (inInternalBounds(...sideB) && grid[sideB[0]][sideB[1]]) return null;
      }
    }
    if (requireCross && crosses === 0) return null;
    return { crosses };
  }

  function placeEntry(grid, placed, occupied, entry, row, col, dir) {
    const id = `w${placed.length + 1}`;
    entry.units.forEach((char,index) => {
      const currentRow = dir === "D" ? row + index : row;
      const currentCol = dir === "A" ? col + index : col;
      let cell = grid[currentRow][currentCol];
      if (!cell) {
        cell = { char, dirs:new Set(), wordIds:[] };
        grid[currentRow][currentCol] = cell;
        if (!occupied.has(char)) occupied.set(char, []);
        occupied.get(char).push([currentRow,currentCol]);
      }
      cell.dirs.add(dir);
      cell.wordIds.push(id);
    });
    placed.push({ ...entry, id, row, col, dir });
  }

  function layoutBounds(grid) {
    let minRow=INTERNAL_SIZE, minCol=INTERNAL_SIZE, maxRow=-1, maxCol=-1, used=0, intersections=0;
    for (let row=0; row<INTERNAL_SIZE; row++) for (let col=0; col<INTERNAL_SIZE; col++) {
      const cell=grid[row][col];
      if (!cell) continue;
      used++;
      if (cell.wordIds.length > 1) intersections++;
      minRow=Math.min(minRow,row); maxRow=Math.max(maxRow,row); minCol=Math.min(minCol,col); maxCol=Math.max(maxCol,col);
    }
    return { minRow,minCol,maxRow,maxCol,rows:maxRow-minRow+1,cols:maxCol-minCol+1,used,intersections };
  }

  function findPlacements(grid, occupied, entry) {
    const candidates=[];
    entry.units.forEach((char,index) => {
      const positions=occupied.get(char) || [];
      positions.forEach(([crossRow,crossCol]) => {
        for (const dir of ["A","D"]) {
          const row=dir === "D" ? crossRow-index : crossRow;
          const col=dir === "A" ? crossCol-index : crossCol;
          const result=canPlace(grid,entry,row,col,dir,true);
          if (!result) continue;
          const endRow=dir === "D" ? row+entry.units.length-1 : row;
          const endCol=dir === "A" ? col+entry.units.length-1 : col;
          const before=layoutBounds(grid);
          const minRow=Math.min(before.minRow,row), minCol=Math.min(before.minCol,col), maxRow=Math.max(before.maxRow,endRow), maxCol=Math.max(before.maxCol,endCol);
          const area=(maxRow-minRow+1)*(maxCol-minCol+1);
          const beforeArea=before.rows*before.cols;
          const balance=Math.abs((maxRow-minRow+1)-(maxCol-minCol+1));
          candidates.push({ row,col,dir,score:result.crosses*90-(area-beforeArea)*6-area*.25-balance*4+Math.random()*4 });
        }
      });
    });
    const unique=new Map();
    candidates.forEach((candidate)=>{ const key=`${candidate.row}:${candidate.col}:${candidate.dir}`; if(!unique.has(key)||unique.get(key).score<candidate.score) unique.set(key,candidate); });
    return [...unique.values()].sort((a,b)=>b.score-a.score);
  }

  function evaluateLayout(grid, placed, profile=viewportPuzzleProfile()) {
    if (placed.length < 2) return null;
    const bounds=layoutBounds(grid);
    const wordCrosses={};
    placed.forEach((word)=>wordCrosses[word.id]=0);
    for (let row=0; row<INTERNAL_SIZE; row++) for (let col=0; col<INTERNAL_SIZE; col++) {
      const cell=grid[row][col];
      if (cell && cell.wordIds.length>1) cell.wordIds.forEach((id)=>wordCrosses[id]++);
    }
    if (Object.values(wordCrosses).some((count)=>count===0)) return null;
    const density=bounds.used/(bounds.rows*bounds.cols);
    const aspect=Math.max(bounds.rows/bounds.cols,bounds.cols/bounds.rows);
    const multiCross=Object.values(wordCrosses).filter((count)=>count>=2).length/placed.length;
    const acrossCount=placed.filter((word)=>word.dir==="A").length;
    const downCount=placed.length-acrossCount;
    if (Math.abs(acrossCount-downCount)>1) return null;
    if (placed.length===profile.target && placed.length%2===0 && acrossCount!==downCount) return null;
    if (aspect>1.95 || density<0.18 || bounds.rows>profile.maxRows || bounds.cols>profile.maxCols) return null;
    const score=placed.length*1000+bounds.intersections*110+multiCross*220+density*320-(bounds.rows*bounds.cols)*5-aspect*35;
    return { ...bounds,density,aspect,multiCross,score };
  }

  function finalizeFixedPuzzle(grid, placed) {
    const words=placed.map((word)=>({ ...word }));
    const sorted=[...words].sort((a,b)=>a.row-b.row||a.col-b.col||a.dir.localeCompare(b.dir));
    const numberMap=new Map(); let number=1;
    sorted.forEach((word)=>{
      const key=`${word.row},${word.col}`;
      if(!numberMap.has(key)) numberMap.set(key,number++);
      word.num=numberMap.get(key);
    });
    return { version:5, rows:9, cols:9, words:sorted };
  }

  function generatePuzzle() {
    const profile=viewportPuzzleProfile();
    const allEntries=buildWordBank();
    // Repetition across different puzzles is intentionally allowed so every
    // puzzle can keep a consistent number of clues. A word is still unique
    // inside the same puzzle.
    const entries=allEntries;
    let globalBest=null;
    for (let target=profile.target; target>=profile.min; target--) {
      let targetBest=null;
      const attempts=2600;
      for (let attempt=0; attempt<attempts; attempt++) {
        const grid=createInternalGrid();
        const placed=[];
        const occupied=new Map();
        const pool=shuffle(entries).slice(0,Math.min(entries.length,110)).sort((a,b)=>b.units.length-a.units.length+(Math.random()-.5)*2);
        const firstPool=pool.slice(0,Math.min(20,pool.length));
        const first=firstPool[Math.floor(Math.random()*firstPool.length)];
        if (!first) continue;
        pool.splice(pool.indexOf(first),1);
        const firstDir=Math.random()>.5?"A":"D";
        const firstRow=firstDir==="A"?Math.floor(INTERNAL_SIZE/2):Math.floor((INTERNAL_SIZE-first.units.length)/2);
        const firstCol=firstDir==="A"?Math.floor((INTERNAL_SIZE-first.units.length)/2):Math.floor(INTERNAL_SIZE/2);
        placeEntry(grid,placed,occupied,first,firstRow,firstCol,firstDir);
        const readings=new Set([first.w]);
        for (const entry of pool) {
          if (placed.length>=target) break;
          if (readings.has(entry.w)) continue;
          const candidates=findPlacements(grid,occupied,entry);
          if (!candidates.length) continue;
          const pick=candidates[Math.floor(Math.random()*Math.min(3,candidates.length))];
          placeEntry(grid,placed,occupied,entry,pick.row,pick.col,pick.dir);
          readings.add(entry.w);
        }
        const evaluation=evaluateLayout(grid,placed,profile);
        if (!evaluation) continue;
        const result={grid,placed,evaluation};
        if (!globalBest || evaluation.score>globalBest.evaluation.score) globalBest=result;
        if (placed.length>=target && (!targetBest || evaluation.score>targetBest.evaluation.score)) targetBest=result;
      }
      if (targetBest) return finalizeFixedPuzzle(targetBest.grid,targetBest.placed);
    }
    if (globalBest && globalBest.placed.length>=profile.min) return finalizeFixedPuzzle(globalBest.grid,globalBest.placed);
    throw new Error("Belum menemukan susunan puzzle yang baik. Coba lagi.");
  }

  function hydrateWord(word) {
    return { ...word, units:kanaUnits(word.w), acceptedSolutions:Array.isArray(word.acceptedSolutions)?word.acceptedSolutions:[word.w] };
  }

  function buildSolutionGrid(puzzle) {
    const grid=Array.from({length:puzzle.rows},()=>Array(puzzle.cols).fill(null));
    puzzle.words.forEach((word)=>word.units.forEach((char,index)=>{
      const row=word.dir==="D"?word.row+index:word.row;
      const col=word.dir==="A"?word.col+index:word.col;
      grid[row][col]=char;
    }));
    return grid;
  }

  function buildWordsByCell() {
    const map={};
    state.words.forEach((word)=>word.units.forEach((_,index)=>{
      const row=word.dir==="D"?word.row+index:word.row;
      const col=word.dir==="A"?word.col+index:word.col;
      const key=`${row},${col}`;
      if(!map[key]) map[key]=[];
      map[key].push(word.id);
    }));
    state.wordsByCell=map;
  }

  function clueTerm(word, revealed=false) {
    if (word.hasKanji || revealed || state.solvedWordIds.has(word.id) || state.revealed) return word.q || word.w;
    return word.clueLabel || "Kosakata";
  }

  function directionText(dir) { return dir==="A"?"Mendatar":"Menurun"; }

  function cellKey(row,col) { return `${row},${col}`; }

  function setClueTab(dir) {
    const selected=dir === "D" ? "D" : "A";
    document.querySelectorAll(".clue-tab").forEach((tab)=>{
      const active=tab.dataset.dir===selected;
      tab.classList.toggle("active",active);
      tab.setAttribute("aria-selected",active?"true":"false");
    });
    ["A","D"].forEach((value)=>{
      const panel=document.getElementById(`clue-panel-${value}`);
      if(panel) panel.hidden=value!==selected;
    });
  }

  function fitBoardToViewport() {
    const shell=document.querySelector(".board-shell");
    const grid=document.getElementById("crossword-grid");
    if(!shell||!grid||!state.puzzle)return;
    const styles=getComputedStyle(grid);
    const gap=parseFloat(styles.gap)||2;
    const shellStyles=getComputedStyle(shell);
    const padX=(parseFloat(shellStyles.paddingLeft)||0)+(parseFloat(shellStyles.paddingRight)||0);
    const available=Math.max(120,shell.clientWidth-padX-gap*Math.max(0,state.puzzle.cols-1));
    const widthSize=available/state.puzzle.cols;
    const viewportCap=window.innerWidth<=420?39:window.innerWidth<=860?44:56;
    const size=Math.max(25,Math.floor(Math.min(widthSize,viewportCap)));
    grid.style.setProperty("--cell-size",`${size}px`);
    grid.style.setProperty("--cell-font",`${Math.max(12,Math.floor(size*.48))}px`);
    grid.style.setProperty("--cell-number",`${Math.max(7,Math.floor(size*.18))}px`);
  }

  function renderPuzzle(puzzle=null,saved=null) {
    const generated=puzzle || generatePuzzle();
    state.puzzle={ ...generated, words:generated.words.map(hydrateWord) };
    state.words=state.puzzle.words;
    state.solutionGrid=buildSolutionGrid(state.puzzle);
    state.values={}; state.cellEls={}; state.currentWordId=null; state.currentDir="A"; state.activeCellKey=null;
    state.hintsLeft=MAX_HINTS; state.hintedCells=new Set(); state.lockedCells=new Set(); state.solvedWordIds=new Set();
    state.reviewCounts={}; state.wordBuffers={}; state.wordKana={}; state.revealed=false; state.finished=false;
    buildWordsByCell();

    const grid=document.getElementById("crossword-grid");
    grid.innerHTML="";
    grid.style.setProperty("--rows",state.puzzle.rows);
    grid.style.setProperty("--cols",state.puzzle.cols);
    const starts={}; state.words.forEach((word)=>starts[cellKey(word.row,word.col)]=word.num);
    for(let row=0;row<state.puzzle.rows;row++) for(let col=0;col<state.puzzle.cols;col++) {
      const wrapper=document.createElement("div"); wrapper.className="cell";
      const solution=state.solutionGrid[row][col];
      if(!solution){ wrapper.classList.add("blocked"); grid.appendChild(wrapper); continue; }
      const key=cellKey(row,col);
      const button=document.createElement("button");
      button.type="button"; button.className="cell-display"; button.dataset.row=row; button.dataset.col=col;
      button.setAttribute("aria-label",`Kotak baris ${row+1} kolom ${col+1}`);
      button.addEventListener("click",()=>selectCell(row,col));
      state.cellEls[key]=button;
      if(starts[key]){ const label=document.createElement("span"); label.className="cell-number"; label.textContent=starts[key]; wrapper.appendChild(label); }
      wrapper.appendChild(button); grid.appendChild(wrapper);
    }
    renderClues();
    if(saved) restoreSavedState(saved);
    updateAllCellDisplays(); updateClueStates(); updateProgress();
    showGameScreen();
    document.body.dataset.puzzleWords=String(state.words.length);
    selectInitialWord(saved && saved.currentWordId);
    requestAnimationFrame(()=>requestAnimationFrame(fitBoardToViewport));
    setStatus(saved?"Puzzle terakhir dilanjutkan.":"");
    saveActivePuzzle();
  }

  function renderClues() {
    const lists={A:document.getElementById("clues-A"),D:document.getElementById("clues-D")};
    lists.A.innerHTML=""; lists.D.innerHTML="";
    [...state.words].sort((a,b)=>a.num-b.num||a.dir.localeCompare(b.dir)).forEach((word)=>{
      const item=document.createElement("li"); item.className="clue-item"; item.dataset.id=word.id;
      item.innerHTML=`<span class="clue-num">${word.num}.</span><span class="clue-copy"><span class="clue-term"></span><span class="clue-meaning"></span><span class="clue-feedback"></span></span><span class="clue-audio-wrap"></span>`;
      item.addEventListener("click",()=>selectWord(word.id));
      lists[word.dir].appendChild(item);
    });
    updateClueStates();
  }

  function updateClueStates() {
    state.words.forEach((word)=>{
      const item=document.querySelector(`.clue-item[data-id="${word.id}"]`);
      if(!item) return;
      const solved=state.solvedWordIds.has(word.id);
      item.classList.toggle("active",word.id===state.currentWordId);
      item.classList.toggle("solved",solved);
      item.classList.toggle("review",Boolean(state.reviewCounts[word.id]));
      item.querySelector(".clue-term").textContent=clueTerm(word,solved);
      item.querySelector(".clue-meaning").textContent=word.m;
      const feedback=item.querySelector(".clue-feedback");
      feedback.textContent=state.reviewCounts[word.id]?`Periksa kembali ${countWrongCells(word)} kotak`:"";
      const audioWrap=item.querySelector(".clue-audio-wrap"); audioWrap.innerHTML="";
      if(solved||state.revealed){
        const audio=document.createElement("button"); audio.type="button"; audio.className="clue-audio"; audio.textContent="🔊"; audio.setAttribute("aria-label",`Dengarkan ${word.q||word.w}`);
        audio.addEventListener("click",(event)=>{event.stopPropagation();speakJapanese(word.w);}); audioWrap.appendChild(audio);
      }
    });
  }

  function showGameScreen(){ document.body.classList.add("game-active"); }

  function selectInitialWord(preferredId=null) {
    const preferred=state.words.find((word)=>word.id===preferredId);
    selectWord((preferred||state.words[0]).id,false);
  }

  function selectCell(row,col) {
    const key=cellKey(row,col); const ids=state.wordsByCell[key]||[]; if(!ids.length)return;
    let chosen=ids.map((id)=>state.words.find((word)=>word.id===id)).find((word)=>word.dir===state.currentDir) || state.words.find((word)=>word.id===ids[0]);
    if(state.activeCellKey===key && ids.length>1){ const currentIndex=ids.indexOf(state.currentWordId); chosen=state.words.find((word)=>word.id===ids[(currentIndex+1)%ids.length]); }
    state.activeCellKey=key; selectWord(chosen.id,true,row,col);
  }

  function selectWord(wordId,focus=true,clickedRow=null,clickedCol=null) {
    const word=state.words.find((item)=>item.id===wordId); if(!word)return;
    state.currentWordId=word.id; state.currentDir=word.dir;
    if(clickedRow!==null) state.activeCellKey=cellKey(clickedRow,clickedCol);
    else if(!state.activeCellKey || !(state.wordsByCell[state.activeCellKey]||[]).includes(word.id)) state.activeCellKey=cellKey(word.row,word.col);
    setClueTab(word.dir); updateHighlight(); updateActiveClue(); updateClueStates(); updateHintButton();
    const input=document.getElementById("word-entry-input");
    input.disabled=state.solvedWordIds.has(word.id)||state.revealed;
    input.value=state.solvedWordIds.has(word.id)||state.revealed ? word.w : (state.wordBuffers[word.id]||"");
    if(focus && !input.disabled) requestAnimationFrame(()=>{input.focus();input.setSelectionRange(input.value.length,input.value.length);});
  }

  function updateHighlight() {
    Object.values(state.cellEls).forEach((element)=>{
      element.classList.remove("highlighted","active-cell");
      element.parentElement?.classList.remove("word-active","cell-active");
    });
    const word=state.words.find((item)=>item.id===state.currentWordId); if(!word)return;
    word.units.forEach((_,index)=>{
      const row=word.dir==="D"?word.row+index:word.row;
      const col=word.dir==="A"?word.col+index:word.col;
      const element=state.cellEls[cellKey(row,col)];
      element?.classList.add("highlighted");
      element?.parentElement?.classList.add("word-active");
    });
    const active=state.cellEls[state.activeCellKey];
    active?.classList.add("active-cell");
    active?.parentElement?.classList.add("cell-active");
  }

  function updateActiveClue() {
    const word=state.words.find((item)=>item.id===state.currentWordId);
    const title=document.getElementById("active-clue-title"), meaning=document.getElementById("active-clue-meaning");
    const example=document.getElementById("active-example");
    if(!word){title.textContent="Pilih kotak atau petunjuk.";meaning.textContent="";example.hidden=true;return;}
    title.textContent=`${word.num} ${directionText(word.dir)} · ${clueTerm(word)}`;
    meaning.textContent=word.m;
    if(word.example && !state.solvedWordIds.has(word.id) && !state.revealed){
      example.hidden=false; document.getElementById("active-example-jp").textContent=word.example; document.getElementById("active-example-id").textContent=word.exampleMeaning||"";
    } else example.hidden=true;
  }

  function targetPhoneticUnits(word) {
    const output=[]; let previous="";
    word.units.forEach((unit)=>{
      if(unit==="ー") output.push(vowelKana(kanaVowel(previous))||"ー");
      else { const hira=katakanaToHiragana(unit); output.push(hira); previous=hira; }
    });
    return output;
  }

  function convertInputForWord(raw,word) {
    const cleaned=String(raw||"").normalize("NFKC").trim();
    const romanClean=cleaned.toLowerCase().replace(/[\s_]/g,"").replace(/ā/g,"aa").replace(/ī/g,"ii").replace(/ū/g,"uu").replace(/ē/g,"ee").replace(/ō/g,"oo");
    if(!/[\u3040-\u30ffー]/.test(cleaned)){
      const canonical=kanaToRomaji(word.w,true).toLowerCase();
      const aliases=new Set([canonical,canonical.replace(/'/g,""),canonical.replace(/n'/g,"nn")]);
      if(aliases.has(romanClean)) return [...word.units];
    }
    const typed=/[\u3040-\u30ffー]/.test(cleaned)?expandLongMarksToHiragana(cleaned):expandLongMarksToHiragana(romanToHiragana(cleaned));
    const chars=kanaUnits(typed).slice(0,word.units.length); const targetPhonetic=targetPhoneticUnits(word);
    return chars.map((char,index)=>{
      const targetUnit=word.units[index];
      if(word.script==="katakana"){
        if(targetUnit==="ー" && char===targetPhonetic[index]) return "ー";
        return hiraganaToKatakana(char);
      }
      return katakanaToHiragana(char);
    });
  }

  function wordCell(word,index){ return {row:word.dir==="D"?word.row+index:word.row,col:word.dir==="A"?word.col+index:word.col}; }

  function otherWordValueAtCell(row,col,excludeWordId) {
    const ids=state.wordsByCell[cellKey(row,col)]||[];
    for(const id of ids){
      if(id===excludeWordId) continue;
      const word=state.words.find((item)=>item.id===id); const index=word.dir==="D"?row-word.row:col-word.col;
      if(state.solvedWordIds.has(id)||state.revealed) return word.units[index];
      const value=(state.wordKana[id]||[])[index]; if(value)return value;
    }
    return "";
  }

  function applyWordInput(word,chars) {
    state.wordKana[word.id]=chars;
    word.units.forEach((_,index)=>{
      const {row,col}=wordCell(word,index); const key=cellKey(row,col);
      if(state.lockedCells.has(key)) return;
      state.values[key]=index<chars.length?chars[index]:(otherWordValueAtCell(row,col,word.id)||"");
    });
    const nextIndex=Math.min(chars.length,word.units.length-1); const next=wordCell(word,nextIndex); state.activeCellKey=cellKey(next.row,next.col);
    updateAllCellDisplays(); updateHighlight(); updateProgress(); saveActivePuzzle();
  }

  function updateAllCellDisplays() {
    Object.entries(state.cellEls).forEach(([key,element])=>{
      element.textContent=state.values[key]||"";
      const hinted=state.hintedCells.has(key);
      const correct=(state.wordsByCell[key]||[]).some((id)=>state.solvedWordIds.has(id));
      const revealed=state.revealed && !correct && !hinted;
      element.classList.toggle("hint",hinted);
      element.classList.toggle("locked",state.lockedCells.has(key));
      element.classList.toggle("correct-cell",correct);
      element.classList.toggle("revealed-cell",revealed);
    });
  }

  function currentWordValues(word) {
    return word.units.map((_,index)=>{const {row,col}=wordCell(word,index);return state.values[cellKey(row,col)]||"";});
  }

  function acceptedWord(word,values) {
    const answer=values.join("");
    return word.acceptedSolutions.some((candidate)=>candidate===answer);
  }

  function countWrongCells(word) {
    const values=currentWordValues(word); let wrong=0;
    word.units.forEach((char,index)=>{if(values[index]!==char)wrong++;}); return wrong;
  }

  function solveWord(word) {
    word.units.forEach((char,index)=>{const {row,col}=wordCell(word,index);const key=cellKey(row,col);state.values[key]=char;state.lockedCells.add(key);});
    state.solvedWordIds.add(word.id); delete state.reviewCounts[word.id]; state.wordBuffers[word.id]=word.w; state.wordKana[word.id]=[...word.units];
    updateAllCellDisplays(); updateClueStates(); updateProgress();
  }

  function checkWord(word,fromWhole=false) {
    const values=currentWordValues(word); const blanks=values.filter((value)=>!value).length;
    if(blanks){ if(!fromWhole)setStatus(`Masih ada ${blanks} kotak kosong pada kata ini.`); return false; }
    if(acceptedWord(word,values)){ solveWord(word); if(!fromWhole)setStatus(`${word.num} ${directionText(word.dir)} benar.`); return true; }
    state.reviewCounts[word.id]=(state.reviewCounts[word.id]||0)+1;
    if(state.reviewCounts[word.id]>=2){
      word.units.forEach((char,index)=>{const {row,col}=wordCell(word,index);const element=state.cellEls[cellKey(row,col)];element?.classList.toggle("needs-review",values[index]!==char);});
    }
    updateClueStates(); if(!fromWhole)setStatus(`Periksa kembali ${countWrongCells(word)} kotak.`); return false;
  }

  function allPuzzleCellsFilled() {
    let total=0,filled=0;
    state.solutionGrid.forEach((row,rowIndex)=>row.forEach((solution,colIndex)=>{if(solution){total++;if(state.values[cellKey(rowIndex,colIndex)])filled++;}}));
    return total>0 && filled===total;
  }

  function checkFilledAnswers() {
    if(state.finished)return;
    let complete=0, newlySolved=0, needsReview=0;
    state.words.forEach((word)=>{
      if(state.solvedWordIds.has(word.id))return;
      const values=currentWordValues(word);
      if(values.some((value)=>!value))return;
      complete++;
      if(acceptedWord(word,values)){ solveWord(word); newlySolved++; }
      else {
        state.reviewCounts[word.id]=(state.reviewCounts[word.id]||0)+1;
        needsReview++;
        if(state.reviewCounts[word.id]>=2){
          word.units.forEach((char,index)=>{const {row,col}=wordCell(word,index);const element=state.cellEls[cellKey(row,col)];element?.classList.toggle("needs-review",values[index]!==char);});
        }
      }
    });
    if(state.solvedWordIds.size===state.words.length){finishPuzzle(false);return;}
    updateClueStates();
    if(!complete){ setStatus("Isi satu atau beberapa jawaban terlebih dahulu."); }
    else if(newlySolved && needsReview){ setStatus("Ada jawaban benar. Jawaban lain masih perlu diperiksa."); }
    else if(newlySolved){ setStatus("Jawaban benar."); }
    else { setStatus("Masih ada jawaban yang perlu diperiksa kembali."); }
    const current=state.words.find((word)=>word.id===state.currentWordId);
    if(current&&state.solvedWordIds.has(current.id))moveToNextUnsolved();
    updateProgress(); saveActivePuzzle();
  }

  function moveToNextUnsolved() {
    const ordered=[...state.words].sort((a,b)=>a.num-b.num||a.dir.localeCompare(b.dir));
    const current=ordered.findIndex((word)=>word.id===state.currentWordId);
    for(let offset=1;offset<=ordered.length;offset++){
      const candidate=ordered[(current+offset)%ordered.length]; if(!state.solvedWordIds.has(candidate.id)){selectWord(candidate.id,true);return;}
    }
  }

  function giveHint() {
    if(state.hintsLeft<=0){setStatus("Bantuan habis untuk puzzle ini.");return;}
    const word=state.words.find((item)=>item.id===state.currentWordId); if(!word){setStatus("Pilih satu kata dahulu.");return;}
    let index=-1;
    if(state.activeCellKey){
      const [row,col]=state.activeCellKey.split(",").map(Number); const possible=word.dir==="A"&&row===word.row?col-word.col:word.dir==="D"&&col===word.col?row-word.row:-1;
      if(possible>=0&&possible<word.units.length){const key=cellKey(row,col);if(state.values[key]!==word.units[possible])index=possible;}
    }
    if(index<0) index=word.units.findIndex((char,i)=>{const {row,col}=wordCell(word,i);return state.values[cellKey(row,col)]!==char;});
    if(index<0){setStatus("Kata ini sudah benar.");return;}
    const {row,col}=wordCell(word,index), key=cellKey(row,col); state.values[key]=word.units[index]; state.hintedCells.add(key); state.lockedCells.add(key); state.hintsLeft--;
    updateAllCellDisplays(); updateHintButton(); updateProgress(); setStatus(state.hintsLeft?"Satu kotak dibuka.":"Satu kotak dibuka. Hint habis."); saveActivePuzzle();
  }

  function updateHintButton() {
    const button=document.getElementById("hint-btn");
    if(!button)return;
    if(state.hintsLeft<=0){button.textContent="Hint Habis";button.disabled=true;return;}
    button.disabled=false;
    button.textContent=`${state.hintsLeft} Hint`;
  }

  function updateProgress() {
    const check=document.getElementById("check-btn");
    if(check)check.textContent="Cek";
    updateHintButton();
  }

  function revealAllAnswers() {
    const solvedBefore=state.solvedWordIds.size;
    state.revealed=true;
    state.words.forEach((word)=>word.units.forEach((char,index)=>{const {row,col}=wordCell(word,index);const key=cellKey(row,col);state.values[key]=char;state.lockedCells.add(key);}));
    updateAllCellDisplays(); updateClueStates(); updateActiveClue(); updateProgress(); finishPuzzle(true,solvedBefore);
  }

  function finishPuzzle(gaveUp=false,solvedBefore=null) {
    if(state.finished)return; state.finished=true;
    const correct=solvedBefore===null?state.solvedWordIds.size:solvedBefore;
    state.completed++; localStorage.setItem(COMPLETED_KEY,String(state.completed)); localStorage.removeItem(ACTIVE_PUZZLE_KEY);
    saveUsedWordKeys([...loadUsedWordKeys(),...state.words.map(wordKey)]);
    document.getElementById("result-summary").textContent=`${correct} dari ${state.words.length} jawaban benar${gaveUp?" sebelum jawaban dibuka":""}.`;
    const list=document.getElementById("result-list"); list.innerHTML="";
    [...state.words].sort((a,b)=>a.num-b.num||a.dir.localeCompare(b.dir)).forEach((word)=>{
      const item=document.createElement("div"); item.className="result-item";
      item.innerHTML=`<div><div class="jp">${word.q||word.w}</div><div class="romaji">${word.w} · ${word.r}</div></div><div class="meaning">${word.m}</div>`;
      const audio=document.createElement("button");audio.type="button";audio.className="speak-btn";audio.textContent="🔊";audio.setAttribute("aria-label",`Dengarkan ${word.q||word.w}`);audio.addEventListener("click",()=>speakJapanese(word.w));item.appendChild(audio);list.appendChild(item);
    });
    const wasFreeTrial=!ttsAccessGranted&&!!getTrialState()&&!getTrialState().completedAt;
    if(wasFreeTrial){markTrialCompleted(gaveUp?"revealed":"finished");trialPaywallPending=true;document.getElementById("result-new-btn").textContent="Lanjut Belajar";}
    else{trialPaywallPending=false;document.getElementById("result-new-btn").textContent="Puzzle Berikutnya";}
    setStatus(gaveUp?"Jawaban sudah dibuka.":"おつかれさま！ Puzzle selesai."); openModal("result-modal"); queueProgressSync(); updateStartScreen();
  }

  function speakJapanese(text) {
    if(!("speechSynthesis" in window)){setStatus("Browser ini belum mendukung audio pelafalan.");return;}
    speechSynthesis.cancel(); const utterance=new SpeechSynthesisUtterance(String(text||"")); utterance.lang="ja-JP"; utterance.rate=.88;
    const voice=speechSynthesis.getVoices().find((item)=>/^ja/i.test(item.lang)); if(voice)utterance.voice=voice; speechSynthesis.speak(utterance);
  }

  function saveActivePuzzle() {
    if(state.finished||!state.puzzle)return;
    const payload={version:5,puzzle:state.puzzle,values:state.values,hintsLeft:state.hintsLeft,hintedCells:[...state.hintedCells],lockedCells:[...state.lockedCells],solvedWordIds:[...state.solvedWordIds],reviewCounts:state.reviewCounts,wordBuffers:state.wordBuffers,wordKana:state.wordKana,currentWordId:state.currentWordId,currentDir:state.currentDir,activeCellKey:state.activeCellKey};
    saveJSON(ACTIVE_PUZZLE_KEY,payload); queueProgressSync(); updateStartScreen();
  }

  function loadActivePuzzle() {
    const saved=storageJSON(ACTIVE_PUZZLE_KEY,null);
    return saved&&saved.version===5&&saved.puzzle&&saved.puzzle.rows===9&&saved.puzzle.cols===9&&Array.isArray(saved.puzzle.words)?saved:null;
  }

  function restoreSavedState(saved) {
    state.values=saved.values||{}; state.hintsLeft=Number.isFinite(saved.hintsLeft)?saved.hintsLeft:MAX_HINTS;
    state.hintedCells=new Set(saved.hintedCells||[]); state.lockedCells=new Set(saved.lockedCells||[]); state.solvedWordIds=new Set(saved.solvedWordIds||[]);
    state.reviewCounts=saved.reviewCounts||{}; state.wordBuffers=saved.wordBuffers||{}; state.wordKana=saved.wordKana||{}; state.currentWordId=saved.currentWordId||null; state.currentDir=saved.currentDir||"A"; state.activeCellKey=saved.activeCellKey||null;
  }

  function startNewPuzzle() {
    localStorage.removeItem(ACTIVE_PUZZLE_KEY);
    try { renderPuzzle(generatePuzzle()); }
    catch(error){ setStatus(error.message||"Puzzle belum bisa dibuat. Coba lagi."); }
  }

  function resumePuzzle() {
    const saved=loadActivePuzzle(); if(saved)renderPuzzle(saved.puzzle,saved); else startNewPuzzle();
  }

  function updateStartScreen() {
    const active=loadActivePuzzle();
    document.getElementById("resume-btn").style.display=active?"block":"none";
    const start=document.getElementById("start-btn");
    if(!start)return;
    if(!ttsAccessGranted&&trialIsConsumed())start.textContent="Buka Akses";
    else start.textContent="Mulai Puzzle";
  }

  function setStatus(message) { const element=document.getElementById("status"); if(element)element.textContent=message; }

  function openModal(id) { document.getElementById(id)?.classList.add("show"); }
  function closeModal(id) { document.getElementById(id)?.classList.remove("show"); }
  function closeMenu(){const menu=document.getElementById("account-menu");if(menu)menu.open=false;}

  function migrateLegacyPuzzle() {
    const legacy=storageJSON(LEGACY_ACTIVE_PUZZLE_KEY,null);
    if(!legacy) return;
    try { localStorage.removeItem(LEGACY_ACTIVE_PUZZLE_KEY); } catch {}
    const trial=getTrialState();
    if(trial && !trial.completedAt) {
      try { localStorage.removeItem(TTS_FREE_KEY); } catch {}
    }
  }

  function getTrialState() { return storageJSON(TTS_FREE_KEY, null); }

  function saveTrialState(value) { saveJSON(TTS_FREE_KEY, value); updateAccessUI(); updateStartScreen(); }

  function markTrialStarted() {
    const current=getTrialState();
    if(current)return current;
    const next={level:TTS_LEVEL,startedAt:new Date().toISOString(),completedAt:null};
    saveTrialState(next);return next;
  }

  function markTrialCompleted(reason="finished") {
    const current=getTrialState()||{level:TTS_LEVEL,startedAt:new Date().toISOString()};
    if(!current.completedAt){current.completedAt=new Date().toISOString();current.completedReason=reason;saveTrialState(current);}
    return current;
  }

  function trialIsActive() { const trial=getTrialState(); return !!(trial&&!trial.completedAt&&loadActivePuzzle()); }
  function trialIsConsumed() { const trial=getTrialState(); return !!(trial&&(trial.completedAt||!loadActivePuzzle())); }

  function getAccessMeta() { return storageJSON(TTS_ACCESS_META_KEY, null); }
  function saveAccessMeta(data) {
    const meta={productKey:TTS_PRODUCT_KEY,hadAccess:true,expiresAt:data&&data.expiresAt||null,sessionExpiresAt:data&&data.sessionExpiresAt||null,lastVerifiedAt:new Date().toISOString()};
    saveJSON(TTS_ACCESS_META_KEY,meta);
  }
  function dateIsPast(value) { if(!value)return false;const time=Date.parse(String(value).replace(" ","T")+(String(value).includes("Z")?"":"Z"));return Number.isFinite(time)&&time<Date.now(); }
  function localAccessReason() {
    const meta=getAccessMeta();
    if(meta&&meta.expiresAt&&dateIsPast(meta.expiresAt))return "expired";
    if(meta&&meta.expiresAt&&!dateIsPast(meta.expiresAt))return "login";
    if(meta&&meta.hadAccess)return "login";
    return trialIsConsumed()?"trial":"trial";
  }

  function formatExpiry(value) {
    if(!value)return "Tanpa batas tanggal";
    const date=new Date(String(value).replace(" ","T")+(String(value).includes("Z")?"":"Z"));
    if(Number.isNaN(date.getTime()))return String(value);
    return new Intl.DateTimeFormat("id-ID",{day:"numeric",month:"long",year:"numeric"}).format(date);
  }

  function updateAccessUI() {
    const expiry=document.getElementById("tts-access-expiry");
    const trial=getTrialState();
    if(expiry){
      if(ttsAccessGranted)expiry.textContent=`Akses aktif sampai ${formatExpiry(currentAccessData&&currentAccessData.expiresAt)}`;
      else if(trial&&trial.completedAt)expiry.textContent="Puzzle gratis sudah selesai.";
      else if(trial&&loadActivePuzzle())expiry.textContent="Puzzle gratis sedang berjalan.";
      else expiry.textContent=`Satu puzzle gratis tersedia untuk ${TTS_LEVEL}.`;
    }
    const logout=document.getElementById("logout-access-btn");if(logout)logout.hidden=!ttsAccessGranted;
    const login=document.getElementById("login-open-btn");if(login)login.hidden=ttsAccessGranted;
  }

  async function verifyTtsAccess(payload) {
    try{
      const response=await fetch(`${TTS_API_BASE}/access-check`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...payload,productKey:TTS_PRODUCT_KEY})});
      const data=await response.json().catch(()=>({})); if(!response.ok||!data.ok)return false;
      if(data.sessionToken)localStorage.setItem(TTS_SESSION_KEY,data.sessionToken); currentAccessData=data; ttsAccessGranted=true; saveAccessMeta(data);
      const remote=data.latestProgress&&data.latestProgress.payload;
      if(remote&&!loadActivePuzzle()&&remote.activePuzzle&&remote.activePuzzle.version===5&&remote.activePuzzle.puzzle?.rows===9&&remote.activePuzzle.puzzle?.cols===9)saveJSON(ACTIVE_PUZZLE_KEY,remote.activePuzzle);
      updateAccessUI();updateStartScreen();return true;
    }catch{return false;}
  }

  async function initializeTtsAccess() {
    migrateLegacyPuzzle();
    let saved={};try{saved=JSON.parse(sessionStorage.getItem(TTS_RETURN_KEY)||"{}");}catch{}
    const params=new URLSearchParams(location.search);const attemptId=saved.attempt||params.get("attempt")||"";const verifyToken=saved.verify||params.get("verify")||"";
    if(attemptId&&verifyToken){
      setStatus(`Mengecek pembayaran ${TTS_LEVEL}...`);
      try{
        const response=await fetch(`${TTS_API_BASE}/verify-payment`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({attemptId,verifyToken})});
        const payment=await response.json().catch(()=>({}));if(!response.ok||!payment.ok)throw new Error(payment.error||"Status pembayaran belum terbaca.");
        if(payment.paid&&payment.accessUrl){sessionStorage.removeItem(TTS_RETURN_KEY);location.replace(payment.accessUrl);return;}
      }catch(error){setStatus(error.message||"Status pembayaran belum bisa dicek.");}
    }
    const accessToken=saved.access||params.get("access")||"";
    if(accessToken&&await verifyTtsAccess({accessToken})){sessionStorage.removeItem(TTS_RETURN_KEY);setStatus(`Akses ${TTS_LEVEL} aktif.`);return;}
    const sessionToken=localStorage.getItem(TTS_SESSION_KEY);
    if(sessionToken&&await verifyTtsAccess({sessionToken})){setStatus(`Akses ${TTS_LEVEL} aktif.`);return;}
    localStorage.removeItem(TTS_SESSION_KEY);ttsAccessGranted=false;currentAccessData=null;
    const trial=getTrialState();
    if(trial&&!trial.completedAt&&!loadActivePuzzle())markTrialCompleted("puzzle_missing");
    updateAccessUI();updateStartScreen();
    const reason=localAccessReason();
    const shouldGate=reason==="expired"||reason==="login"||trialIsConsumed();
    if(shouldGate)setTimeout(()=>openAccessGate(reason,reason==="login"?"login":"purchase"),180);
  }

  async function canStartPuzzle(action="new") {
    if(ttsAccessGranted)return true;
    const sessionToken=localStorage.getItem(TTS_SESSION_KEY);
    if(sessionToken&&await verifyTtsAccess({sessionToken}))return true;
    localStorage.removeItem(TTS_SESSION_KEY);ttsAccessGranted=false;
    const trial=getTrialState();
    if(!trial){markTrialStarted();return true;}
    if(!trial.completedAt&&loadActivePuzzle()){
      if(action==="resume")return true;
      resumePuzzle();return false;
    }
    if(!trial.completedAt)markTrialCompleted("puzzle_missing");
    pendingAccessAction=action;
    openAccessGate(localAccessReason(),localAccessReason()==="login"?"login":"purchase");
    return false;
  }

  async function guardedStartNewPuzzle() { if(await canStartPuzzle("new"))startNewPuzzle(); }
  async function guardedResumePuzzle() {
    if(!loadActivePuzzle()){await guardedStartNewPuzzle();return;}
    if(await canStartPuzzle("resume"))resumePuzzle();
  }
  async function requestNewPuzzle() {
    if(loadActivePuzzle()){
      if(!ttsAccessGranted&&trialIsActive()){resumePuzzle();return;}
      openModal("new-confirm-modal");
    } else await guardedStartNewPuzzle();
  }

  function queueProgressSync() { clearTimeout(syncTimer);syncTimer=setTimeout(syncProgress,900); }
  async function syncProgress() {
    if(!ttsAccessGranted)return;const sessionToken=localStorage.getItem(TTS_SESSION_KEY);if(!sessionToken)return;
    try{await fetch(`${TTS_API_BASE}/exam-progress`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productKey:TTS_PRODUCT_KEY,sessionToken,examSessionId:`tts_learning_${TTS_LEVEL_ID}`,status:"in_progress",currentIndex:state.completed,timeLeft:0,answers:[],activePuzzle:loadActivePuzzle(),usedWordKeys:loadUsedWordKeys()})});}catch{}
  }

  function normalizeWhatsapp(value){return String(value||"").replace(/[^\d]/g,"");}
  function validEmail(value){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value||"").trim());}
  function absoluteTtsUrl(path){if(/^https?:\/\//i.test(path))return path;if(location.protocol==="file:")return `https://tts.belajarwibu.com/${path.replace(/^\.\/?|^\.\.\//g,"")||"N5/"}`;return new URL(path,location.href).href;}
  function checkoutProduct(){return TTS_PRODUCTS[TTS_CHECKOUT_PRODUCT_KEY];}
  function checkoutError(message){document.getElementById("tts-checkout-error").textContent=message||"";}

  function formatRupiah(value) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(Math.max(0, Number(value) || 0));
  }

  function updateCheckoutButton() {
    const button=document.getElementById("tts-checkout-submit");
    if(!button)return;
    const prefix=accessGateReason==="expired"?"Perpanjang":"Lanjut Bayar";
    button.textContent=`${prefix} · ${formatRupiah(checkoutAmount)}`;
  }

  function setCheckoutAmount(value,{custom=false}={}) {
    const parsed=Math.round(Number(value)||0);
    checkoutAmount=Math.max(TTS_MINIMUM_AMOUNT,parsed||TTS_DEFAULT_AMOUNT);
    document.querySelectorAll("[data-tts-amount]").forEach((button)=>{
      const active=!custom&&Number(button.dataset.ttsAmount)===checkoutAmount;
      button.classList.toggle("active",active);
      button.setAttribute("aria-pressed",active?"true":"false");
    });
    const customField=document.getElementById("tts-custom-amount-field");
    const customInput=document.getElementById("tts-custom-amount");
    const customToggle=document.getElementById("tts-custom-amount-toggle");
    if(customField)customField.hidden=!custom;
    if(customToggle){
      customToggle.classList.toggle("active",custom);
      customToggle.setAttribute("aria-pressed",custom?"true":"false");
    }
    if(customInput){
      customInput.min=String(TTS_MINIMUM_AMOUNT);
      if(custom || !customInput.value)customInput.value=String(checkoutAmount);
    }
    updateCheckoutButton();
  }

  function showAccessView(view="purchase") {
    const purchase=document.getElementById("access-purchase-view"),login=document.getElementById("access-login-view");
    if(purchase)purchase.hidden=view!=="purchase";
    if(login)login.hidden=view!=="login";
    if(view==="login"){
      document.getElementById("tts-paywall-label").textContent="Sudah pernah membeli";
      document.getElementById("tts-checkout-title").textContent="Buka akses";
      document.getElementById("tts-checkout-subtitle").textContent="Masukkan email atau nomor WhatsApp yang dipakai saat pembayaran.";
      setTimeout(()=>document.getElementById("access-login-identifier")?.focus(),60);
    }else{
      const expired=accessGateReason==="expired";
      document.getElementById("tts-paywall-label").textContent=expired?"Masa akses berakhir":"Puzzle gratis selesai";
      document.getElementById("tts-checkout-title").textContent=expired?"Perpanjang semua level":"Buka semua level TTS JLPT";
      document.getElementById("tts-checkout-subtitle").innerHTML=
        "Bayar seikhlasnya mulai Rp10.000.<br>Akses N5, N4, dan N3 selama 30 hari.";
      setCheckoutAmount(TTS_DEFAULT_AMOUNT);
    }
  }

  function prefillCheckoutProfile() {
    const profile=storageJSON(TTS_CHECKOUT_PROFILE_KEY,{});
    const fields={"tts-buyer-name":profile.name,"tts-buyer-email":profile.email,"tts-buyer-whatsapp":profile.whatsapp};
    Object.entries(fields).forEach(([id,value])=>{const el=document.getElementById(id);if(el&&value&&!el.value)el.value=value;});
  }

  function openAccessGate(reason="trial",view="purchase") {
    accessGateReason=reason;
    activeCheckoutProductKey=TTS_CHECKOUT_PRODUCT_KEY;
    checkoutError("");
    const loginError=document.getElementById("access-login-error");
    if(loginError)loginError.textContent="";
    prefillCheckoutProfile();
    showAccessView(view);
    openModal("tts-checkout-modal");
  }

  function openCheckout() { openAccessGate(accessGateReason,"purchase"); }

  async function submitCheckout(event) {
    event.preventDefault();
    checkoutError("");
    const product=checkoutProduct();
    const name=document.getElementById("tts-buyer-name").value.trim();
    const email=document.getElementById("tts-buyer-email").value.trim();
    const whatsapp=normalizeWhatsapp(document.getElementById("tts-buyer-whatsapp").value);
    if(name.length<2){checkoutError("Nama masih terlalu pendek.");return;}
    if(!validEmail(email)){checkoutError("Email belum valid.");return;}
    if(whatsapp.length<9){checkoutError("Nomor WhatsApp belum valid.");return;}
    if(checkoutAmount<TTS_MINIMUM_AMOUNT){checkoutError("Nominal minimal Rp10.000.");return;}
    saveJSON(TTS_CHECKOUT_PROFILE_KEY,{name,email,whatsapp});
    const button=document.getElementById("tts-checkout-submit");
    try{
      button.disabled=true;
      button.textContent="Memproses...";
      const accessUrl=absoluteTtsUrl(product.path);
      const response=await fetch(`${TTS_API_BASE}/create-payment`,{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
          source:TTS_CHECKOUT_PRODUCT_KEY,
          productKey:TTS_CHECKOUT_PRODUCT_KEY,
          planKey:TTS_CHECKOUT_PRODUCT_KEY,
          productName:product.title,
          itemName:product.title,
          productCategory:"tts",
          amount:checkoutAmount,
          minimumAmount:TTS_MINIMUM_AMOUNT,
          defaultPrice:TTS_DEFAULT_AMOUNT,
          accessUrl,
          resumeUrl:accessUrl,
          finishUrl:accessUrl,
          maxAttempts:-1,
          name,
          whatsapp,
          email
        })
      });
      const data=await response.json().catch(()=>({}));
      if(!response.ok||!data.ok)throw new Error(data.error||"Gagal membuat pembayaran.");
      const paymentUrl=data.redirectUrl||data.paymentUrl||data.redirect_url||data.url;
      if(!paymentUrl)throw new Error("Link pembayaran belum tersedia dari server.");
      location.href=paymentUrl;
    }catch(error){
      checkoutError(error.message||"Gagal membuat pembayaran.");
    }finally{
      button.disabled=false;
      updateCheckoutButton();
    }
  }

  async function loginWithPurchase(event) {
    event.preventDefault();
    const identifier=document.getElementById("access-login-identifier").value.trim();
    const status=document.getElementById("access-login-error"),button=document.getElementById("access-login-submit");
    status.textContent="";
    if(identifier.length<5){status.textContent="Masukkan email atau nomor WhatsApp pembelian.";return;}
    button.disabled=true;button.textContent="Memeriksa akses...";
    try{
      const response=await fetch(`${TTS_API_BASE}/member-login`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({identifier})});
      const data=await response.json().catch(()=>({}));if(!response.ok||!data.ok)throw new Error(data.error||"Akses aktif tidak ditemukan.");
      const entitlements=Array.isArray(data.entitlements)?data.entitlements:[];
      entitlements.forEach((item)=>{if(/^tts_n[345]_30d$/.test(String(item.productKey||"")))localStorage.setItem(`tts_access_session_${item.productKey}`,data.sessionToken);});
      const entitlement=entitlements.find((item)=>item.productKey===TTS_PRODUCT_KEY);
      if(!entitlement)throw new Error(`Akses aktif untuk ${TTS_LEVEL} tidak ditemukan. Kamu mungkin membeli level lain atau masa akses sudah berakhir.`);
      localStorage.setItem(TTS_SESSION_KEY,data.sessionToken);
      if(!await verifyTtsAccess({sessionToken:data.sessionToken}))throw new Error("Sesi akses belum bisa dibuka. Coba masuk kembali.");
      closeModal("tts-checkout-modal");setStatus(`Akses ${TTS_LEVEL} berhasil dibuka.`);trialPaywallPending=false;
      const action=pendingAccessAction;pendingAccessAction=null;updateAccessUI();updateStartScreen();
      if(action==="resume"&&loadActivePuzzle())resumePuzzle();else if(action==="new"&&!loadActivePuzzle())startNewPuzzle();
    }catch(error){status.textContent=error.message||"Akses aktif tidak ditemukan.";}
    finally{button.disabled=false;button.textContent="Masuk & Buka Akses";}
  }

  function logoutAccess(){localStorage.removeItem(TTS_SESSION_KEY);ttsAccessGranted=false;currentAccessData=null;updateAccessUI();updateStartScreen();setStatus("Kamu sudah keluar dari perangkat ini. Masuk lagi dengan email atau WhatsApp pembelian untuk membuka akses.");}

  function bindEvents() {
    const wordInput=document.getElementById("word-entry-input");
    wordInput.addEventListener("compositionstart",()=>state.composing=true);
    wordInput.addEventListener("compositionend",()=>{state.composing=false;handleWordInput();});
    wordInput.addEventListener("input",()=>{if(!state.composing)handleWordInput();});
    wordInput.addEventListener("keydown",(event)=>{if(event.key==="Enter"&&!state.composing&&!event.isComposing){event.preventDefault();checkFilledAnswers();}});
    function handleWordInput(){const word=state.words.find((item)=>item.id===state.currentWordId);if(!word||state.solvedWordIds.has(word.id)||state.revealed)return;state.wordBuffers[word.id]=wordInput.value;const chars=convertInputForWord(wordInput.value,word);applyWordInput(word,chars);}

    document.getElementById("check-btn").addEventListener("click",checkFilledAnswers);
    document.getElementById("hint-btn").addEventListener("click",giveHint);
    document.querySelectorAll(".clue-tab").forEach((tab)=>tab.addEventListener("click",()=>setClueTab(tab.dataset.dir)));
    window.addEventListener("resize",()=>requestAnimationFrame(fitBoardToViewport),{passive:true});
    window.visualViewport?.addEventListener("resize",()=>requestAnimationFrame(fitBoardToViewport),{passive:true});
    document.getElementById("give-up-btn").addEventListener("click",()=>openModal("give-up-modal"));
    document.getElementById("confirm-give-up-btn").addEventListener("click",()=>{closeModal("give-up-modal");revealAllAnswers();});
    document.getElementById("menu-new-btn").addEventListener("click",()=>{closeMenu();requestNewPuzzle();});
    document.getElementById("menu-help-btn").addEventListener("click",()=>{closeMenu();openModal("help-modal");});
    document.getElementById("confirm-new-btn").addEventListener("click",()=>{closeModal("new-confirm-modal");guardedStartNewPuzzle();});
    document.getElementById("start-btn").addEventListener("click",requestNewPuzzle);
    document.getElementById("resume-btn").addEventListener("click",guardedResumePuzzle);
    document.getElementById("result-new-btn").addEventListener("click",()=>{closeModal("result-modal");if(trialPaywallPending&&!ttsAccessGranted){openAccessGate("trial","purchase");return;}guardedStartNewPuzzle();});
    document.getElementById("license-footer-btn").addEventListener("click",()=>openModal("license-modal"));
    document.getElementById("login-open-btn").addEventListener("click",()=>{closeMenu();openAccessGate(localAccessReason(),"login");});
    document.getElementById("logout-access-btn").addEventListener("click",()=>{closeMenu();logoutAccess();});
    document.getElementById("tts-checkout-form").addEventListener("submit",submitCheckout);
    document.getElementById("tts-checkout-close").addEventListener("click",()=>closeModal("tts-checkout-modal"));
    document.getElementById("access-login-switch").addEventListener("click",()=>showAccessView("login"));
    document.getElementById("access-purchase-switch").addEventListener("click",()=>showAccessView("purchase"));
    document.getElementById("access-login-form").addEventListener("submit",loginWithPurchase);
    document.querySelectorAll("[data-tts-amount]").forEach((button)=>{
      button.addEventListener("click",()=>setCheckoutAmount(Number(button.dataset.ttsAmount)));
    });
    document.getElementById("tts-custom-amount-toggle").addEventListener("click",()=>{
      setCheckoutAmount(document.getElementById("tts-custom-amount").value||TTS_DEFAULT_AMOUNT,{custom:true});
      setTimeout(()=>document.getElementById("tts-custom-amount")?.focus(),40);
    });
    document.getElementById("tts-custom-amount").addEventListener("input",(event)=>{
      const value=Number(event.target.value)||0;
      checkoutAmount=value;
      document.querySelectorAll("[data-tts-amount]").forEach((button)=>{
        button.classList.remove("active");
        button.setAttribute("aria-pressed","false");
      });
      updateCheckoutButton();
    });
    document.getElementById("tts-custom-amount").addEventListener("blur",(event)=>{
      if(Number(event.target.value)<TTS_MINIMUM_AMOUNT){
        event.target.value=String(TTS_MINIMUM_AMOUNT);
        checkoutAmount=TTS_MINIMUM_AMOUNT;
        updateCheckoutButton();
      }
    });
    function closeWithGate(id){closeModal(id);if(id==="result-modal"&&trialPaywallPending&&!ttsAccessGranted)setTimeout(()=>openAccessGate("trial","purchase"),120);}
    document.querySelectorAll("[data-close]").forEach((button)=>button.addEventListener("click",()=>closeWithGate(button.dataset.close)));
    document.querySelectorAll(".modal").forEach((modal)=>modal.addEventListener("click",(event)=>{if(event.target===modal)closeWithGate(modal.id);}));
  }

  updateStartScreen(); updateAccessUI(); bindEvents(); initializeTtsAccess();
})();
