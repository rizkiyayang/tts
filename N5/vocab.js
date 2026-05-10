// === VOCABS (hierarkis) ===
// Format:
// { question, reading, meaning, chapter: { book, level?, type?, week?, day?, bab? }, synonyms_id? }
window.VOCABS = [
  // === ANGKA ===
  {
    question: "番号",
    reading: "ばんごう",
    meaning: "nomor",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "零",
    reading: "れい",
    meaning: "nol",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "ゼロ",
    reading: "ぜろ",
    meaning: "nol",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "半",
    reading: "はん",
    meaning: "setengah",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "一",
    reading: "いち",
    meaning: "satu",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "二",
    reading: "に",
    meaning: "dua",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "三",
    reading: "さん",
    meaning: "tiga",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "四",
    reading: "し / よん",
    meaning: "empat",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "五",
    reading: "ご",
    meaning: "lima",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "六",
    reading: "ろく",
    meaning: "enam",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "七",
    reading: "しち / なな",
    meaning: "tujuh",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "八",
    reading: "はち",
    meaning: "delapan",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "九",
    reading: "きゅう / く",
    meaning: "sembilan",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "十",
    reading: "じゅう",
    meaning: "sepuluh",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "百",
    reading: "ひゃく",
    meaning: "ratus, seratus",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "千",
    reading: "せん",
    meaning: "seribu",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "万",
    reading: "まん",
    meaning: "sepuluh ribu",
    chapter: ["Kata benda 1", "Angka"],
  },

  {
    question: "一つ",
    reading: "ひとつ",
    meaning: "satu, usia 1 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "二つ",
    reading: "ふたつ",
    meaning: "dua, usia 2 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "三つ",
    reading: "みっつ",
    meaning: "tiga, usia 3 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "四つ",
    reading: "よっつ",
    meaning: "empat, usia 4 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "五つ",
    reading: "いつつ",
    meaning: "lima, usia 5 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "六つ",
    reading: "むっつ",
    meaning: "enam, usia 6 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "七つ",
    reading: "ななつ",
    meaning: "tujuh, usia 7 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "八つ",
    reading: "やっつ",
    meaning: "delapan, usia 8 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "九つ",
    reading: "ここのつ",
    meaning: "sembilan, usia 9 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "十",
    reading: "とお",
    meaning: "sepuluh",
    chapter: ["Kata benda 1", "Angka"],
  },
  {
    question: "二十歳",
    reading: "はたち",
    meaning: "usia 20 tahun",
    chapter: ["Kata benda 1", "Angka"],
  },

  // === HARI ===
  {
    question: "曜日",
    reading: "ようび",
    meaning: "hari",
    chapter: ["Kata benda 1", "Waktu", "Hari"],
  },
  {
    question: "月曜日",
    reading: "げつようび",
    meaning: "senin",
    chapter: ["Kata benda 1", "Waktu", "Hari"],
  },
  {
    question: "火曜日",
    reading: "かようび",
    meaning: "selasa",
    chapter: ["Kata benda 1", "Waktu", "Hari"],
  },
  {
    question: "水曜日",
    reading: "すいようび",
    meaning: "rabu",
    chapter: ["Kata benda 1", "Waktu", "Hari"],
  },
  {
    question: "木曜日",
    reading: "もくようび",
    meaning: "kamis",
    chapter: ["Kata benda 1", "Waktu", "Hari"],
  },
  {
    question: "金曜日",
    reading: "きんようび",
    meaning: "jumat",
    chapter: ["Kata benda 1", "Waktu", "Hari"],
  },
  {
    question: "土曜日",
    reading: "どようび",
    meaning: "sabtu",
    chapter: ["Kata benda 1", "Waktu", "Hari"],
  },
  {
    question: "日曜日",
    reading: "にちようび",
    meaning: "minggu",
    chapter: ["Kata benda 1", "Waktu", "Hari"],
  },

  // === TANGGAL & JUMLAH HARI ===
  {
    question: "日",
    reading: "にち",
    meaning: "tanggal, hari",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "一日",
    reading: "ついたち",
    meaning: "tanggal 1",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "二日",
    reading: "ふつか",
    meaning: "tanggal 2",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "三日",
    reading: "みっか",
    meaning: "tanggal 3",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "四日",
    reading: "よっか",
    meaning: "tanggal 4",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "五日",
    reading: "いつか",
    meaning: "tanggal 5",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "六日",
    reading: "むいか",
    meaning: "tanggal 6",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "七日",
    reading: "なのか",
    meaning: "tanggal 7",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "八日",
    reading: "ようか",
    meaning: "tanggal 8",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "九日",
    reading: "ここのか",
    meaning: "tanggal 9",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "十日",
    reading: "とおか",
    meaning: "tanggal 10",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },
  {
    question: "二十日",
    reading: "はつか",
    meaning: "tanggal 20",
    chapter: ["Kata benda 1", "Waktu", "Tanggal"],
  },

  {
    question: "一日",
    reading: "いちにち",
    meaning: "1 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "二日間",
    reading: "ふつかかん",
    meaning: "(selama) 2 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "三日間",
    reading: "みっかかん",
    meaning: "(selama) 3 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "四日間",
    reading: "よっかかん",
    meaning: "(selama) 4 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "五日間",
    reading: "いつかかん",
    meaning: "(selama) 5 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "六日間",
    reading: "むいかかん",
    meaning: "(selama) 6 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "七日間",
    reading: "なのかかん",
    meaning: "(selama) 7 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "八日間",
    reading: "ようかかん",
    meaning: "(selama) 8 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "九日間",
    reading: "ここのかかん",
    meaning: "(selama) 9 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "十日間",
    reading: "とおかかん",
    meaning: "(selama) 10 hari",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "一週間",
    reading: "いっしゅうかん",
    meaning: "1 minggu",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "一か月間",
    reading: "いっかげつかん",
    meaning: "(selama) 1 bulan",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },
  {
    question: "一年間",
    reading: "いちねんかん",
    meaning: "(selama) 1 tahun",
    chapter: ["Kata benda 1", "Waktu", "Durasi"],
  },

  // === KETERANGAN WAKTU ===
  {
    question: "時間",
    reading: "じかん",
    meaning: "waktu",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "午前",
    reading: "ごぜん",
    meaning: "pagi, a.m.",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "午後",
    reading: "ごご",
    meaning: "sore, p.m.",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "先",
    reading: "さき",
    meaning: "lebih dulu",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "今",
    reading: "いま",
    meaning: "sekarang",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "朝",
    reading: "あさ",
    meaning: "pagi",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "昼",
    reading: "ひる",
    meaning: "siang",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "夕方",
    reading: "ゆうがた",
    meaning: "sore hari, senja",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "夜",
    reading: "よる",
    meaning: "malam",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "晩",
    reading: "ばん",
    meaning: "malam",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "毎日",
    reading: "まいにち",
    meaning: "setiap hari",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "今日",
    reading: "きょう",
    meaning: "hari ini",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "昨日",
    reading: "きのう",
    meaning: "kemarin",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "明日",
    reading: "あした",
    meaning: "besok",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "今朝",
    reading: "けさ",
    meaning: "pagi ini",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "今晩",
    reading: "こんばん",
    meaning: "malam ini",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "今週",
    reading: "こんしゅう",
    meaning: "minggu ini",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "先週",
    reading: "せんしゅう",
    meaning: "minggu lalu",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "来週",
    reading: "らいしゅう",
    meaning: "minggu depan",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "今月",
    reading: "こんげつ",
    meaning: "bulan ini",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "先月",
    reading: "せんげつ",
    meaning: "bulan lalu",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "来月",
    reading: "らいげつ",
    meaning: "bulan depan",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "今年",
    reading: "ことし",
    meaning: "tahun ini",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "去年",
    reading: "きょねん",
    meaning: "tahun lalu",
    chapter: ["Kata benda 1", "Waktu"],
  },
  {
    question: "来年",
    reading: "らいねん",
    meaning: "tahun depan",
    chapter: ["Kata benda 1", "Waktu"],
  },

  // === JAM ===
  {
    question: "時",
    reading: "じ",
    meaning: "jam (counter waktu)",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "分",
    reading: "ふん / ぷん",
    meaning: "menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "秒",
    reading: "びょう",
    meaning: "detik",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },

  {
    question: "一時",
    reading: "いちじ",
    meaning: "jam 1",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "二時",
    reading: "にじ",
    meaning: "jam 2",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "三時",
    reading: "さんじ",
    meaning: "jam 3",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "四時",
    reading: "よじ",
    meaning: "jam 4",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "五時",
    reading: "ごじ",
    meaning: "jam 5",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "六時",
    reading: "ろくじ",
    meaning: "jam 6",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "七時",
    reading: "しちじ",
    meaning: "jam 7",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "八時",
    reading: "はちじ",
    meaning: "jam 8",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "九時",
    reading: "くじ",
    meaning: "jam 9",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "十時",
    reading: "じゅうじ",
    meaning: "jam 10",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "十一時",
    reading: "じゅういちじ",
    meaning: "jam 11",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "十二時",
    reading: "じゅうにじ",
    meaning: "jam 12",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },

  {
    question: "一分",
    reading: "いっぷん",
    meaning: "1 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "二分",
    reading: "にふん",
    meaning: "2 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "三分",
    reading: "さんぷん",
    meaning: "3 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "四分",
    reading: "よんぷん",
    meaning: "4 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "五分",
    reading: "ごふん",
    meaning: "5 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "六分",
    reading: "ろっぷん",
    meaning: "6 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "七分",
    reading: "ななふん",
    meaning: "7 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "八分",
    reading: "はっぷん",
    meaning: "8 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "九分",
    reading: "きゅうふん",
    meaning: "9 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "十分",
    reading: "じゅっぷん",
    meaning: "10 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "十五分",
    reading: "じゅうごふん",
    meaning: "15 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },
  {
    question: "三十分",
    reading: "さんじゅっぷん",
    meaning: "30 menit",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },

  {
    question: "半",
    reading: "はん",
    meaning: "setengah (jam)",
    chapter: ["Kata benda 1", "Waktu", "Jam"],
  },

  // === WARNA ===
  {
    question: "色",
    reading: "いろ",
    meaning: "warna",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "青",
    reading: "あお",
    meaning: "biru",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "青い",
    reading: "あおい",
    meaning: "biru",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "赤",
    reading: "あか",
    meaning: "merah",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "赤い",
    reading: "あかい",
    meaning: "merah",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "黄色",
    reading: "きいろ",
    meaning: "kuning",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "黄色い",
    reading: "きいろい",
    meaning: "kuning",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "黒",
    reading: "くろ",
    meaning: "hitam",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "黒い",
    reading: "くろい",
    meaning: "hitam",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "白",
    reading: "しろ",
    meaning: "putih",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "白い",
    reading: "しろい",
    meaning: "putih",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "茶色",
    reading: "ちゃいろ",
    meaning: "coklat",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "茶色い",
    reading: "ちゃいろい",
    meaning: "coklat",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "緑色",
    reading: "みどりいろ",
    meaning: "hijau",
    chapter: ["Kata sifat", "Warna"],
  },
  {
    question: "緑",
    reading: "みどり",
    meaning: "hijau",
    chapter: ["Kata sifat", "Warna"],
  },

  // === SATUAN ===
  {
    question: "キロ",
    reading: "きろ",
    meaning: "kilo",
    chapter: ["Kata benda 1", "Satuan"],
  },
  {
    question: "キログラム",
    reading: "きろぐらむ",
    meaning: "kilogram",
    chapter: ["Kata benda 1", "Satuan"],
  },
  {
    question: "グラム",
    reading: "ぐらむ",
    meaning: "gram",
    chapter: ["Kata benda 1", "Satuan"],
  },
  {
    question: "キロメートル",
    reading: "きろめーとる",
    meaning: "kilometer",
    chapter: ["Kata benda 1", "Satuan"],
  },
  {
    question: "メートル",
    reading: "めーとる",
    meaning: "meter",
    chapter: ["Kata benda 1", "Satuan"],
  },
  {
    question: "枚",
    reading: "まい",
    meaning: "lembar",
    chapter: ["Kata benda 1", "Satuan"],
  },
  {
    question: "ページ",
    reading: "ぺーじ",
    meaning: "halaman",
    chapter: ["Kata benda 1", "Satuan"],
  },
  {
    question: "冊",
    reading: "さつ",
    meaning: "jilid",
    chapter: ["Kata benda 1", "Satuan"],
  },
  {
    question: "番",
    reading: "ばん",
    meaning: "nomor",
    chapter: ["Kata benda 1", "Satuan"],
  },

  // === COUNTER ===
  {
    question: "番目",
    reading: "ばんめ",
    meaning: "nomor urut ke ...",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "人",
    reading: "にん",
    meaning: "orang (counter)",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "本",
    reading: "ほん",
    meaning: "batang (counter benda panjang)",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "匹",
    reading: "ひき",
    meaning: "ekor (counter hewan kecil)",
    chapter: ["Kata benda 1", "Counter"],
  },

  // === KELUARGA ===
  {
    question: "家族",
    reading: "かぞく",
    meaning: "keluarga",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "家庭",
    reading: "かてい",
    meaning: "rumah tangga",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "おじいさん",
    reading: "おじいさん",
    meaning: "kakek",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "おばあさん",
    reading: "おばあさん",
    meaning: "nenek",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "お父さん",
    reading: "おとうさん",
    meaning: "ayah, bapak",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "父",
    reading: "ちち",
    meaning: "ayah",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "お母さん",
    reading: "おかあさん",
    meaning: "ibu, bunda",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "母",
    reading: "はは",
    meaning: "ibu",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "両親",
    reading: "りょうしん",
    meaning: "orang tua",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "伯父さん",
    reading: "おじさん",
    meaning: "paman, om",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "叔父さん",
    reading: "おじさん",
    meaning: "paman, om",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "伯母さん",
    reading: "おばさん",
    meaning: "bibi, tante",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "叔母さん",
    reading: "おばさん",
    meaning: "bibi, tante",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "兄弟",
    reading: "きょうだい",
    meaning: "saudara",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "お兄さん",
    reading: "おにいさん",
    meaning: "kakak laki-laki",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "兄",
    reading: "あに",
    meaning: "kakak laki-laki",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "お姉さん",
    reading: "おねえさん",
    meaning: "kakak perempuan",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "姉",
    reading: "あね",
    meaning: "kakak perempuan",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "弟",
    reading: "おとうと",
    meaning: "adik laki-laki",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "妹",
    reading: "いもうと",
    meaning: "adik perempuan",
    chapter: ["Kata benda 1", "Keluarga"],
  },

  // === KATA GANTI ===
  {
    question: "私",
    reading: "わたし",
    meaning: "saya",
    chapter: ["Kata ganti"],
  },
  {
    question: "わたくし",
    reading: "わたくし",
    meaning: "saya",
    chapter: ["Kata ganti"],
  },
  {
    question: "あなた",
    reading: "あなた",
    meaning: "kamu, anda",
    chapter: ["Kata ganti"],
  },
  {
    question: "彼",
    reading: "かれ",
    meaning: "dia (laki-laki)",
    chapter: ["Kata ganti"],
  },
  {
    question: "彼女",
    reading: "かのじょ",
    meaning: "dia (perempuan)",
    chapter: ["Kata ganti"],
  },
  {
    question: "私たち",
    reading: "わたしたち",
    meaning: "kami, kita",
    chapter: ["Kata ganti"],
  },
  {
    question: "あなたたち",
    reading: "あなたたち",
    meaning: "kalian",
    chapter: ["Kata ganti"],
  },
  {
    question: "彼ら",
    reading: "かれら",
    meaning: "mereka (laki-laki)",
    chapter: ["Kata ganti"],
  },
  {
    question: "彼女ら",
    reading: "かのじょら",
    meaning: "mereka (perempuan)",
    chapter: ["Kata ganti"],
  },
  {
    question: "自分",
    reading: "じぶん",
    meaning: "diri sendiri",
    chapter: ["Kata ganti"],
  },

  // === MANUSIA & BAGIAN TUBUH ===
  {
    question: "人",
    reading: "ひと",
    meaning: "orang",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "方",
    reading: "かた",
    meaning: "orang (bentuk hormat)",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "大人",
    reading: "おとな",
    meaning: "orang dewasa",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "男",
    reading: "おとこ",
    meaning: "laki-laki",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "女",
    reading: "おんな",
    meaning: "perempuan",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "子供",
    reading: "こども",
    meaning: "anak-anak",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "頭",
    reading: "あたま",
    meaning: "kepala",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "目",
    reading: "め",
    meaning: "mata",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "鼻",
    reading: "はな",
    meaning: "hidung",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "口",
    reading: "くち",
    meaning: "mulut",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "歯",
    reading: "は",
    meaning: "gigi",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "耳",
    reading: "みみ",
    meaning: "telinga",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "首",
    reading: "くび",
    meaning: "leher",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "体",
    reading: "からだ",
    meaning: "tubuh",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "手",
    reading: "て",
    meaning: "tangan",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "胸",
    reading: "むね",
    meaning: "dada",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "背",
    reading: "せ",
    meaning: "punggung",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "お腹",
    reading: "おなか",
    meaning: "perut",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },
  {
    question: "足",
    reading: "あし",
    meaning: "kaki",
    chapter: ["Kata benda 1", "Manusia & Bagian Tubuh"],
  },

  // === TRANSPORTASI UMUM ===

  {
    question: "タクシー",
    reading: "たくしー",
    meaning: "taksi",
    chapter: ["Kata benda 2", "Transportasi"],
  },
  {
    question: "バス",
    reading: "ばす",
    meaning: "bis",
    chapter: ["Kata benda 2", "Transportasi"],
  },
  {
    question: "電車",
    reading: "でんしゃ",
    meaning: "kereta listrik",
    chapter: ["Kata benda 2", "Transportasi"],
  },
  {
    question: "地下鉄",
    reading: "ちかてつ",
    meaning: "kereta bawah tanah",
    chapter: ["Kata benda 2", "Transportasi"],
  },
  {
    question: "飛行機",
    reading: "ひこうき",
    meaning: "pesawat terbang",
    chapter: ["Kata benda 2", "Transportasi"],
  },
  {
    question: "切符",
    reading: "きっぷ",
    meaning: "karcis, tiket",
    chapter: ["Kata benda 2", "Transportasi"],
  },

  // === SEKOLAH & BAHASA ===
  {
    question: "学校",
    reading: "がっこう",
    meaning: "sekolah",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "大学",
    reading: "だいがく",
    meaning: "universitas",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "教室",
    reading: "きょうしつ",
    meaning: "kelas",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "図書館",
    reading: "としょかん",
    meaning: "perpustakaan",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "授業",
    reading: "じゅぎょう",
    meaning: "pelajaran",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "言葉",
    reading: "ことば",
    meaning: "kata-kata, bahasa",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "英語",
    reading: "えいご",
    meaning: "bahasa Inggris",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "漢字",
    reading: "かんじ",
    meaning: "huruf kanji",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "文章",
    reading: "ぶんしょう",
    meaning: "kalimat",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "作文",
    reading: "さくぶん",
    meaning: "karangan",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "辞書",
    reading: "じしょ",
    meaning: "kamus",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "意味",
    reading: "いみ",
    meaning: "arti",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "宿題",
    reading: "しゅくだい",
    meaning: "pekerjaan rumah",
    chapter: ["Kata benda 2", "Sekolah"],
  },
  {
    question: "テスト",
    reading: "てすと",
    meaning: "tes, ujian",
    chapter: ["Kata benda 2", "Sekolah"],
  },

  // === BANGUNAN & TEMPAT ===
  {
    question: "建物",
    reading: "たてもの",
    meaning: "bangunan",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "アパート",
    reading: "あぱーと",
    meaning: "apartemen",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "家",
    reading: "いえ",
    meaning: "rumah",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "ホテル",
    reading: "ほてる",
    meaning: "hotel",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "デパート",
    reading: "でぱーと",
    meaning: "toko serba ada",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "駅",
    reading: "えき",
    meaning: "stasiun",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "病院",
    reading: "びょういん",
    meaning: "rumah sakit",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "映画館",
    reading: "えいがかん",
    meaning: "bioskop",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "銀行",
    reading: "ぎんこう",
    meaning: "bank",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "郵便局",
    reading: "ゆうびんきょく",
    meaning: "kantor pos",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "会社",
    reading: "かいしゃ",
    meaning: "kantor, perusahaan",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "レストラン",
    reading: "れすとらん",
    meaning: "restoran",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "喫茶店",
    reading: "きっさてん",
    meaning: "kedai kopi",
    chapter: ["Kata benda 2", "Bangunan"],
  },
  {
    question: "店",
    reading: "みせ",
    meaning: "toko",
    chapter: ["Kata benda 2", "Bangunan"],
  },

  // === Tempat ===
  {
    question: "村",
    reading: "むら",
    meaning: "desa",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "町",
    reading: "まち",
    meaning: "Tempat",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "道",
    reading: "みち",
    meaning: "jalan",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "角",
    reading: "かど",
    meaning: "sudut",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "交差点",
    reading: "こうさてん",
    meaning: "persimpangan",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "橋",
    reading: "はし",
    meaning: "jembatan",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "公園",
    reading: "こうえん",
    meaning: "taman",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "プール",
    reading: "ぷーる",
    meaning: "kolam renang",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "地図",
    reading: "ちず",
    meaning: "peta",
    chapter: ["Kata benda 2", "Tempat"],
  },

  // === ALAM & MUSIM ===
  {
    question: "天気",
    reading: "てんき",
    meaning: "cuaca",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "空",
    reading: "そら",
    meaning: "langit",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "風",
    reading: "かぜ",
    meaning: "angin",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "雨",
    reading: "あめ",
    meaning: "hujan",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "雪",
    reading: "ゆき",
    meaning: "salju",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "水",
    reading: "みず",
    meaning: "air",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "山",
    reading: "やま",
    meaning: "gunung",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "川",
    reading: "かわ",
    meaning: "sungai",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "花",
    reading: "はな",
    meaning: "bunga",
    chapter: ["Kata benda 2", "Alam"],
  },

  {
    question: "春",
    reading: "はる",
    meaning: "musim semi",
    chapter: ["Kata benda 2", "Musim"],
  },
  {
    question: "夏",
    reading: "なつ",
    meaning: "musim panas",
    chapter: ["Kata benda 2", "Musim"],
  },
  {
    question: "秋",
    reading: "あき",
    meaning: "musim gugur",
    chapter: ["Kata benda 2", "Musim"],
  },
  {
    question: "冬",
    reading: "ふゆ",
    meaning: "musim dingin",
    chapter: ["Kata benda 2", "Musim"],
  },

  // === BINATANG ===
  {
    question: "動物",
    reading: "どうぶつ",
    meaning: "binatang",
    chapter: ["Kata benda 2", "Binatang"],
  },
  {
    question: "犬",
    reading: "いぬ",
    meaning: "anjing",
    chapter: ["Kata benda 2", "Binatang"],
  },
  {
    question: "猫",
    reading: "ねこ",
    meaning: "kucing",
    chapter: ["Kata benda 2", "Binatang"],
  },
  {
    question: "鳥",
    reading: "とり",
    meaning: "burung",
    chapter: ["Kata benda 2", "Binatang"],
  },
  {
    question: "魚",
    reading: "さかな",
    meaning: "ikan",
    chapter: ["Kata benda 2", "Binatang"],
  },

  // === HOBI ===
  {
    question: "音楽",
    reading: "おんがく",
    meaning: "musik",
    chapter: ["Kata benda 2", "Hobi"],
  },
  {
    question: "歌",
    reading: "うた",
    meaning: "lagu",
    chapter: ["Kata benda 2", "Hobi"],
  },
  {
    question: "ギター",
    reading: "ぎたー",
    meaning: "gitar",
    chapter: ["Kata benda 2", "Hobi"],
  },
  {
    question: "映画",
    reading: "えいが",
    meaning: "film",
    chapter: ["Kata benda 2", "Hobi"],
  },
  {
    question: "写真",
    reading: "しゃしん",
    meaning: "foto",
    chapter: ["Kata benda 2", "Hobi"],
  },
  {
    question: "スポーツ",
    reading: "すぽーつ",
    meaning: "olahraga",
    chapter: ["Kata benda 2", "Hobi"],
  },

  // === PAKAIAN ===
  {
    question: "洋服",
    reading: "ようふく",
    meaning: "pakaian",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "コート",
    reading: "こーと",
    meaning: "mantel",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "セーター",
    reading: "せーたー",
    meaning: "sweater",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "上着",
    reading: "うわぎ",
    meaning: "jaket",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "シャツ",
    reading: "しゃつ",
    meaning: "kemeja",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "ネクタイ",
    reading: "ねくたい",
    meaning: "dasi",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "スカート",
    reading: "すかーと",
    meaning: "rok",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "ズボン",
    reading: "ずぼん",
    meaning: "celana panjang",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "ポケット",
    reading: "ぽけっと",
    meaning: "saku",
    chapter: ["Kata benda 2", "Pakaian"],
  },
  {
    question: "ボタン",
    reading: "ぼたん",
    meaning: "kancing",
    chapter: ["Kata benda 2", "Pakaian"],
  },

  // === MAKANAN & MINUMAN ===
  {
    question: "食べ物",
    reading: "たべもの",
    meaning: "makanan",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "飲み物",
    reading: "のみもの",
    meaning: "minuman",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "ご飯",
    reading: "ごはん",
    meaning: "nasi",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "肉",
    reading: "にく",
    meaning: "daging",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "魚",
    reading: "さかな",
    meaning: "ikan",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "野菜",
    reading: "やさい",
    meaning: "sayur",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "果物",
    reading: "くだもの",
    meaning: "buah",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "パン",
    reading: "ぱん",
    meaning: "roti",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "卵",
    reading: "たまご",
    meaning: "telur",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "牛乳",
    reading: "ぎゅうにゅう",
    meaning: "susu",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "お茶",
    reading: "おちゃ",
    meaning: "teh hijau",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },
  {
    question: "コーヒー",
    reading: "こーひー",
    meaning: "kopi",
    chapter: ["Kata benda 2", "Makan", "Makanan"],
  },

  // === BENDA SEHARI-HARI ===
  {
    question: "物",
    reading: "もの",
    meaning: "barang",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "帽子",
    reading: "ぼうし",
    meaning: "topi",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "傘",
    reading: "かさ",
    meaning: "payung",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "眼鏡",
    reading: "めがね",
    meaning: "kacamata",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "タオル",
    reading: "たおる",
    meaning: "handuk",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "財布",
    reading: "さいふ",
    meaning: "dompet",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "お金",
    reading: "おかね",
    meaning: "uang",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "靴",
    reading: "くつ",
    meaning: "sepatu",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "かばん",
    reading: "かばん",
    meaning: "tas",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "薬",
    reading: "くすり",
    meaning: "obat",
    chapter: ["Kata benda 2", "Benda"],
  },

  // === RUMAH: RUANGAN ===
  {
    question: "窓",
    reading: "まど",
    meaning: "jendela",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "居間",
    reading: "いま",
    meaning: "ruang tamu, ruang duduk",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "台所",
    reading: "だいどころ",
    meaning: "dapur",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "食堂",
    reading: "しょくどう",
    meaning: "ruang makan, kantin",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "部屋",
    reading: "へや",
    meaning: "kamar, ruang",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "風呂場",
    reading: "ふろば",
    meaning: "kamar mandi",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "シャワー",
    reading: "しゃわー",
    meaning: "pancuran (mandi), shower",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "お手洗い",
    reading: "おてあらい",
    meaning: "toilet",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "トイレ",
    reading: "といれ",
    meaning: "toilet",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "廊下",
    reading: "ろうか",
    meaning: "lorong",
    chapter: ["Kata benda 2", "Rumah", "Ruangan"],
  },
  {
    question: "電気",
    reading: "でんき",
    meaning: "listrik",
    chapter: ["Kata benda 2", "Rumah", "Fasilitas"],
  },
  {
    question: "水道",
    reading: "すいどう",
    meaning: "saluran air",
    chapter: ["Kata benda 2", "Rumah", "Fasilitas"],
  },

  // === RUMAH: PERALATAN RUMAH TANGGA ===
  {
    question: "ソファ",
    reading: "そふぁ",
    meaning: "sofa",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "椅子",
    reading: "いす",
    meaning: "kursi",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "机",
    reading: "つくえ",
    meaning: "meja",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "テーブル",
    reading: "てーぶる",
    meaning: "meja",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "本棚",
    reading: "ほんだな",
    meaning: "rak buku",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "ベッド",
    reading: "べっど",
    meaning: "ranjang, tempat tidur",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "布団",
    reading: "ふとん",
    meaning: "tempat tidur ala Jepang",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "冷房",
    reading: "れいぼう",
    meaning: "AC, pendingin ruangan",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "暖房",
    reading: "だんぼう",
    meaning: "pemanas ruangan",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "ストーブ",
    reading: "すとーぶ",
    meaning: "pemanas ruangan",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "冷暖房",
    reading: "れいだんぼう",
    meaning: "pengatur suhu udara",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "冷蔵庫",
    reading: "れいぞうこ",
    meaning: "kulkas, lemari es",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "テレビ",
    reading: "てれび",
    meaning: "televisi",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "テープレコーダー",
    reading: "てーぷれこーだー",
    meaning: "tape recorder",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "ラジオ",
    reading: "らじお",
    meaning: "radio",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },
  {
    question: "ラジカセ",
    reading: "らじかせ",
    meaning: "radio kaset",
    chapter: ["Kata benda 2", "Rumah", "Peralatan"],
  },

  // === MAKAN: PERALATAN MAKAN ===
  {
    question: "お皿",
    reading: "おさら",
    meaning: "piring",
    chapter: ["Kata benda 2", "Makan", "Peralatan"],
  },
  {
    question: "スプーン",
    reading: "すぷーん",
    meaning: "sendok",
    chapter: ["Kata benda 2", "Makan", "Peralatan"],
  },
  {
    question: "フォーク",
    reading: "ふぉーく",
    meaning: "garpu",
    chapter: ["Kata benda 2", "Makan", "Peralatan"],
  },
  {
    question: "ナイフ",
    reading: "ないふ",
    meaning: "pisau",
    chapter: ["Kata benda 2", "Makan", "Peralatan"],
  },
  {
    question: "お茶碗",
    reading: "おちゃわん",
    meaning: "mangkuk nasi",
    chapter: ["Kata benda 2", "Makan", "Peralatan"],
  },
  {
    question: "お箸",
    reading: "おはし",
    meaning: "sumpit",
    chapter: ["Kata benda 2", "Makan", "Peralatan"],
  },
  {
    question: "コップ",
    reading: "こっぷ",
    meaning: "gelas",
    chapter: ["Kata benda 2", "Makan", "Peralatan"],
  },
  {
    question: "カップ",
    reading: "かっぷ",
    meaning: "cangkir",
    chapter: ["Kata benda 2", "Makan", "Peralatan"],
  },

  // === MAKAN: BUMBU DAPUR ===
  {
    question: "砂糖",
    reading: "さとう",
    meaning: "gula",
    chapter: ["Kata benda 2", "Makan", "Bumbu"],
  },
  {
    question: "塩",
    reading: "しお",
    meaning: "garam",
    chapter: ["Kata benda 2", "Makan", "Bumbu"],
  },
  {
    question: "胡椒",
    reading: "こしょう",
    meaning: "lada, merica",
    chapter: ["Kata benda 2", "Makan", "Bumbu"],
  },
  {
    question: "醤油",
    reading: "しょうゆ",
    meaning: "kecap asin",
    chapter: ["Kata benda 2", "Makan", "Bumbu"],
  },
  {
    question: "調味料",
    reading: "ちょうみりょう",
    meaning: "bumbu dapur",
    chapter: ["Kata benda 2", "Makan", "Bumbu"],
  },

  // === POSISI & ARAH ===
  {
    question: "上",
    reading: "うえ",
    meaning: "atas",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "下",
    reading: "した",
    meaning: "bawah",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "前",
    reading: "まえ",
    meaning: "depan",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "後ろ",
    reading: "うしろ",
    meaning: "belakang",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "外",
    reading: "そと",
    meaning: "luar",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "中",
    reading: "なか",
    meaning: "dalam",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "向こう",
    reading: "むこう",
    meaning: "seberang sana",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "手前",
    reading: "てまえ",
    meaning: "sebelah sini",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "右",
    reading: "みぎ",
    meaning: "kanan",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "左",
    reading: "ひだり",
    meaning: "kiri",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "隣",
    reading: "となり",
    meaning: "sebelah, tetangga",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "横",
    reading: "よこ",
    meaning: "samping",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "辺",
    reading: "へん",
    meaning: "sekitar",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "近く",
    reading: "ちかく",
    meaning: "dekat",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "東",
    reading: "ひがし",
    meaning: "timur",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "西",
    reading: "にし",
    meaning: "barat",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "北",
    reading: "きた",
    meaning: "utara",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },
  {
    question: "南",
    reading: "みなみ",
    meaning: "selatan",
    chapter: ["Kata benda 2", "Posisi & Arah"],
  },

  // === KATA PENUNJUK ===
  {
    question: "これ",
    reading: "これ",
    meaning: "ini",
    chapter: ["Kata ganti", "Penunjuk"],
  },
  {
    question: "それ",
    reading: "それ",
    meaning: "itu",
    chapter: ["Kata ganti", "Penunjuk"],
  },
  {
    question: "あれ",
    reading: "あれ",
    meaning: "itu (jauh)",
    chapter: ["Kata ganti", "Penunjuk"],
  },
  {
    question: "この",
    reading: "この",
    meaning: "benda ini",
    chapter: ["Kata ganti", "Penunjuk"],
  },
  {
    question: "その",
    reading: "その",
    meaning: "benda itu",
    chapter: ["Kata ganti", "Penunjuk"],
  },

  // === KATA TANYA ===
  { question: "何", reading: "なに", meaning: "apa", chapter: ["Kata tanya"] },
  {
    question: "誰",
    reading: "だれ",
    meaning: "siapa",
    chapter: ["Kata tanya"],
  },
  {
    question: "どうして",
    reading: "どうして",
    meaning: "mengapa",
    chapter: ["Kata tanya"],
  },
  {
    question: "なぜ",
    reading: "なぜ",
    meaning: "mengapa",
    chapter: ["Kata tanya"],
  },
  {
    question: "なんで",
    reading: "なんで",
    meaning: "mengapa",
    chapter: ["Kata tanya"],
  },
  {
    question: "どこ",
    reading: "どこ",
    meaning: "di mana",
    chapter: ["Kata tanya"],
  },
  {
    question: "どちら",
    reading: "どちら",
    meaning: "arah mana",
    chapter: ["Kata tanya"],
  },
  {
    question: "どっち",
    reading: "どっち",
    meaning: "yang mana (2)",
    chapter: ["Kata tanya"],
  },
  {
    question: "どの",
    reading: "どの",
    meaning: "yang mana",
    chapter: ["Kata tanya"],
  },
  {
    question: "どれ",
    reading: "どれ",
    meaning: "yang mana (>=3)",
    chapter: ["Kata tanya"],
  },
  {
    question: "いつ",
    reading: "いつ",
    meaning: "kapan",
    chapter: ["Kata tanya"],
  },
  {
    question: "いくら",
    reading: "いくら",
    meaning: "berapa harga",
    chapter: ["Kata tanya"],
  },
  {
    question: "いくつ",
    reading: "いくつ",
    meaning: "berapa buah",
    chapter: ["Kata tanya"],
  },
  {
    question: "いかが",
    reading: "いかが",
    meaning: "bagaimana (halus)",
    chapter: ["Kata tanya"],
  },
  {
    question: "どう",
    reading: "どう",
    meaning: "bagaimana",
    chapter: ["Kata tanya"],
  },

  // === KATA SAMBUNG ===
  {
    question: "そして",
    reading: "そして",
    meaning: "dan, lalu",
    chapter: ["Kata sambung"],
  },

  {
    question: "それから",
    reading: "それから",
    meaning: "setelah itu",
    chapter: ["Kata sambung"],
  },
  {
    question: "それに",
    reading: "それに",
    meaning: "selain itu",
    chapter: ["Kata sambung"],
  },
  {
    question: "だから",
    reading: "だから",
    meaning: "jadi, karena itu",
    chapter: ["Kata sambung"],
  },
  {
    question: "ですから",
    reading: "ですから",
    meaning: "oleh karena itu (formal)",
    chapter: ["Kata sambung"],
  },
  {
    question: "でも",
    reading: "でも",
    meaning: "tetapi",
    chapter: ["Kata sambung"],
  },
  {
    question: "しかし",
    reading: "しかし",
    meaning: "namun",
    chapter: ["Kata sambung"],
  },
  {
    question: "それでも",
    reading: "それでも",
    meaning: "meskipun begitu",
    chapter: ["Kata sambung"],
  },
  {
    question: "じゃ",
    reading: "じゃ",
    meaning: "kalau begitu (informal)",
    chapter: ["Kata sambung"],
  },
  {
    question: "では",
    reading: "では",
    meaning: "kalau begitu (formal)",
    chapter: ["Kata sambung"],
  },
  {
    question: "それでは",
    reading: "それでは",
    meaning: "kalau begitu",
    chapter: ["Kata sambung"],
  },
  {
    question: "また",
    reading: "また",
    meaning: "lagi, juga",
    chapter: ["Kata sambung"],
  },
  {
    question: "それとも",
    reading: "それとも",
    meaning: "atau (pertanyaan pilihan)",
    chapter: ["Kata sambung"],
  },
  {
    question: "ところで",
    reading: "ところで",
    meaning: "ngomong-ngomong",
    chapter: ["Kata sambung"],
  },
  {
    question: "つまり",
    reading: "つまり",
    meaning: "singkatnya",
    chapter: ["Kata sambung"],
  },

  // === KATA KETERANGAN TAMBAHAN ===
  {
    question: "ちょうど",
    reading: "ちょうど",
    meaning: "tepat, pas",
    chapter: ["Kata keterangan"],
  },
  {
    question: "次",
    reading: "つぎ",
    meaning: "berikut",
    chapter: ["Kata keterangan"],
  },
  {
    question: "時々",
    reading: "ときどき",
    meaning: "kadang-kadang",
    chapter: ["Kata keterangan"],
  },
  {
    question: "いつも",
    reading: "いつも",
    meaning: "selalu",
    chapter: ["Kata keterangan"],
  },
  {
    question: "よく",
    reading: "よく",
    meaning: "sering, dengan baik",
    chapter: ["Kata keterangan"],
  },
  {
    question: "じゃ",
    reading: "じゃ",
    meaning: "kalau begitu",
    chapter: ["Kata keterangan"],
  },
  {
    question: "じゃあ",
    reading: "じゃあ",
    meaning: "kalau begitu",
    chapter: ["Kata keterangan"],
  },
  {
    question: "さあ",
    reading: "さあ",
    meaning: "nah!",
    chapter: ["Kata keterangan"],
  },
  {
    question: "など",
    reading: "など",
    meaning: "dan lain-lain",
    chapter: ["Kata keterangan"],
  },
  {
    question: "始め",
    reading: "はじめ",
    meaning: "mula-mula",
    chapter: ["Kata keterangan"],
  },
  {
    question: "初めて",
    reading: "はじめて",
    meaning: "pertama kali",
    chapter: ["Kata keterangan"],
  },
  {
    question: "最後",
    reading: "さいご",
    meaning: "terakhir",
    chapter: ["Kata keterangan"],
  },
  {
    question: "大丈夫",
    reading: "だいじょうぶ",
    meaning: "tidak apa-apa",
    chapter: ["Kata keterangan"],
  },
  {
    question: "かまいません",
    reading: "かまいません",
    meaning: "tidak apa-apa",
    chapter: ["Kata keterangan"],
  },
  {
    question: "縦",
    reading: "たて",
    meaning: "vertikal, panjangnya",
    chapter: ["Kata benda 1"],
  },
  {
    question: "横",
    reading: "よこ",
    meaning: "horizontal, lebarnya, sebelah",
    chapter: ["Kata benda 1"],
  },
  {
    question: "ほか",
    reading: "ほか",
    meaning: "yang lain",
    chapter: ["Kata keterangan"],
  },
  {
    question: "本当に",
    reading: "ほんとうに",
    meaning: "sungguh-sungguh",
    chapter: ["Kata keterangan"],
  },
  {
    question: "まだ",
    reading: "まだ",
    meaning: "belum, masih",
    chapter: ["Kata keterangan"],
  },
  {
    question: "もう",
    reading: "もう",
    meaning: "sudah, lagi",
    chapter: ["Kata keterangan"],
  },
  {
    question: "もっと",
    reading: "もっと",
    meaning: "lebih",
    chapter: ["Kata keterangan"],
  },
  {
    question: "ゆっくり",
    reading: "ゆっくり",
    meaning: "perlahan-lahan",
    chapter: ["Kata keterangan"],
  },
  {
    question: "早く",
    reading: "はやく",
    meaning: "cepat-cepat",
    chapter: ["Kata keterangan"],
  },
  {
    question: "速く",
    reading: "はやく",
    meaning: "cepat-cepat",
    chapter: ["Kata keterangan"],
  },

  {
    question: "いつも",
    reading: "いつも",
    meaning: "selalu",
    chapter: ["Kata keterangan"],
  },
  {
    question: "よく",
    reading: "よく",
    meaning: "sering",
    chapter: ["Kata keterangan"],
  },
  {
    question: "ときどき",
    reading: "ときどき",
    meaning: "kadang-kadang",
    chapter: ["Kata keterangan"],
  },
  {
    question: "たまに",
    reading: "たまに",
    meaning: "sesekali",
    chapter: ["Kata keterangan"],
  },
  {
    question: "めったに",
    reading: "めったに",
    meaning: "jarang",
    chapter: ["Kata keterangan"],
  },
  {
    question: "もう",
    reading: "もう",
    meaning: "sudah",
    chapter: ["Kata keterangan"],
  },
  {
    question: "まだ",
    reading: "まだ",
    meaning: "masih / belum",
    chapter: ["Kata keterangan"],
  },

  // === ALAT TULIS ===
  {
    question: "紙",
    reading: "かみ",
    meaning: "kertas",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "ペン",
    reading: "ぺん",
    meaning: "pen, bolpen",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "ボールペン",
    reading: "ぼーるぺん",
    meaning: "bolpen",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "万年筆",
    reading: "まんねんひつ",
    meaning: "pen tinta",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "鉛筆",
    reading: "えんぴつ",
    meaning: "pensil",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "本",
    reading: "ほん",
    meaning: "buku",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "ノート",
    reading: "のーと",
    meaning: "buku tulis",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "手紙",
    reading: "てがみ",
    meaning: "surat",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "切手",
    reading: "きって",
    meaning: "perangko",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "葉書",
    reading: "はがき",
    meaning: "kartu pos",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "封筒",
    reading: "ふうとう",
    meaning: "amplop",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "テープ",
    reading: "てーぷ",
    meaning: "pita, selotip",
    chapter: ["Kata benda 1", "Sekolah"],
  },
  {
    question: "箱",
    reading: "はこ",
    meaning: "kotak, box",
    chapter: ["Kata benda 1", "Sekolah"],
  },

  // === JABATAN & PEKERJAAN ===
  {
    question: "仕事",
    reading: "しごと",
    meaning: "pekerjaan",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "医者",
    reading: "いしゃ",
    meaning: "dokter",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "警官",
    reading: "けいかん",
    meaning: "polisi",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "お巡りさん",
    reading: "おまわりさん",
    meaning: "polisi patroli",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "先生",
    reading: "せんせい",
    meaning: "guru, pengajar",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "生徒",
    reading: "せいと",
    meaning: "murid",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "学生",
    reading: "がくせい",
    meaning: "pelajar, mahasiswa",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "留学生",
    reading: "りゅうがくせい",
    meaning: "pelajar asing",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },

  {
    question: "会社員",
    reading: "かいしゃいん",
    meaning: "pegawai perusahaan",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "店員",
    reading: "てんいん",
    meaning: "pegawai toko",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "銀行員",
    reading: "ぎんこういん",
    meaning: "pegawai bank",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "大学生",
    reading: "だいがくせい",
    meaning: "mahasiswa",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "高校生",
    reading: "こうこうせい",
    meaning: "siswa SMA",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "中学生",
    reading: "ちゅうがくせい",
    meaning: "siswa SMP",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "小学生",
    reading: "しょうがくせい",
    meaning: "siswa SD",
    chapter: ["Kata benda 1", "Pekerjaan"],
  },
  {
    question: "友達",
    reading: "ともだち",
    meaning: "teman",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "名前",
    reading: "なまえ",
    meaning: "nama",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "住所",
    reading: "じゅうしょ",
    meaning: "alamat",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "電話番号",
    reading: "でんわばんごう",
    meaning: "nomor telepon",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "国",
    reading: "くに",
    meaning: "negara",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "外国人",
    reading: "がいこくじん",
    meaning: "orang asing",
    chapter: ["Kata benda 1", "Identitas"],
  },

  // === TEMPAT & NEGARA TAMBAHAN ===
  {
    question: "場所",
    reading: "ばしょ",
    meaning: "tempat",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "所",
    reading: "ところ",
    meaning: "tempat",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "地域",
    reading: "ちいき",
    meaning: "daerah",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "住所地",
    reading: "じゅうしょち",
    meaning: "alamat lokasi",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "都会",
    reading: "とかい",
    meaning: "Tempat besar",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "田舎",
    reading: "いなか",
    meaning: "kampung, pedesaan",
    chapter: ["Kata benda 1", "Tempat"],
  },

  // Negara
  {
    question: "日本",
    reading: "にほん",
    meaning: "Jepang",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "インドネシア",
    reading: "いんどねしあ",
    meaning: "Indonesia",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "アメリカ",
    reading: "あめりか",
    meaning: "Amerika",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "中国",
    reading: "ちゅうごく",
    meaning: "Tiongkok",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "韓国",
    reading: "かんこく",
    meaning: "Korea",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "タイ",
    reading: "たい",
    meaning: "Thailand",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "ベトナム",
    reading: "べとなむ",
    meaning: "Vietnam",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "インド",
    reading: "いんど",
    meaning: "India",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "イギリス",
    reading: "いぎりす",
    meaning: "Inggris",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "フランス",
    reading: "ふらんす",
    meaning: "Prancis",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "ドイツ",
    reading: "どいつ",
    meaning: "Jerman",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "オーストラリア",
    reading: "おーすとらりあ",
    meaning: "Australia",
    chapter: ["Kata benda 1", "Tempat"],
  },

  // Tempat penting
  {
    question: "東京",
    reading: "とうきょう",
    meaning: "Tokyo",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "大阪",
    reading: "おおさか",
    meaning: "Osaka",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "京都",
    reading: "きょうと",
    meaning: "Kyoto",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "ジャカルタ",
    reading: "じゃかるた",
    meaning: "Jakarta",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "バンドン",
    reading: "ばんどん",
    meaning: "Bandung",
    chapter: ["Kata benda 1", "Tempat"],
  },
  {
    question: "スラバヤ",
    reading: "すらばや",
    meaning: "Surabaya",
    chapter: ["Kata benda 1", "Tempat"],
  },

  // === KATA SIFAT i ===
  {
    question: "明るい",
    reading: "あかるい",
    meaning: "terang, cerah",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "甘い",
    reading: "あまい",
    meaning: "manis",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "新しい",
    reading: "あたらしい",
    meaning: "baru",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "暖かい",
    reading: "あたたかい",
    meaning: "hangat",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "厚い",
    reading: "あつい",
    meaning: "tebal",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "暑い",
    reading: "あつい",
    meaning: "panas (cuaca)",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "熱い",
    reading: "あつい",
    meaning: "panas (benda)",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "小さい",
    reading: "ちいさい",
    meaning: "kecil",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "近い",
    reading: "ちかい",
    meaning: "dekat",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "古い",
    reading: "ふるい",
    meaning: "kuno, tua",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "太い",
    reading: "ふとい",
    meaning: "gemuk",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "早い",
    reading: "はやい",
    meaning: "cepat (waktu)",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "速い",
    reading: "はやい",
    meaning: "cepat (laju)",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "低い",
    reading: "ひくい",
    meaning: "rendah",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "広い",
    reading: "ひろい",
    meaning: "luas, lapang",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "欲しい",
    reading: "ほしい",
    meaning: "ingin",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "細い",
    reading: "ほそい",
    meaning: "kurus",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "いい",
    reading: "いい",
    meaning: "baik, bagus",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "忙しい",
    reading: "いそがしい",
    meaning: "sibuk",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "痛い",
    reading: "いたい",
    meaning: "sakit",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "辛い",
    reading: "からい",
    meaning: "pedas, asin",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "軽い",
    reading: "かるい",
    meaning: "ringan",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "かわいい",
    reading: "かわいい",
    meaning: "lucu, imut",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "黄色い",
    reading: "きいろい",
    meaning: "kuning",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "汚い",
    reading: "きたない",
    meaning: "kotor",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "暗い",
    reading: "くらい",
    meaning: "gelap",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "黒い",
    reading: "くろい",
    meaning: "hitam",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "丸い",
    reading: "まるい",
    meaning: "bulat",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "まずい",
    reading: "まずい",
    meaning: "tidak enak",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "短い",
    reading: "みじかい",
    meaning: "pendek",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "難しい",
    reading: "むずかしい",
    meaning: "sukar",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "長い",
    reading: "ながい",
    meaning: "panjang",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "ぬるい",
    reading: "ぬるい",
    meaning: "tidak cukup panas/dingin",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "おいしい",
    reading: "おいしい",
    meaning: "enak",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "重い",
    reading: "おもい",
    meaning: "berat",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "面白い",
    reading: "おもしろい",
    meaning: "menarik",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "多い",
    reading: "おおい",
    meaning: "banyak",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "大きい",
    reading: "おおきい",
    meaning: "besar",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "遅い",
    reading: "おそい",
    meaning: "lambat",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "寒い",
    reading: "さむい",
    meaning: "dingin (cuaca)",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "狭い",
    reading: "せまい",
    meaning: "sempit",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "白い",
    reading: "しろい",
    meaning: "putih",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "少ない",
    reading: "すくない",
    meaning: "sedikit",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "涼しい",
    reading: "すずしい",
    meaning: "sejuk",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "高い",
    reading: "たかい",
    meaning: "mahal, tinggi",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "楽しい",
    reading: "たのしい",
    meaning: "menyenangkan",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "遠い",
    reading: "とおい",
    meaning: "jauh",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "つまらない",
    reading: "つまらない",
    meaning: "membosankan",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "冷たい",
    reading: "つめたい",
    meaning: "dingin (benda)",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "強い",
    reading: "つよい",
    meaning: "kuat",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "うるさい",
    reading: "うるさい",
    meaning: "berisik",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "薄い",
    reading: "うすい",
    meaning: "tipis",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "若い",
    reading: "わかい",
    meaning: "muda",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "悪い",
    reading: "わるい",
    meaning: "jelek, buruk",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "易しい",
    reading: "やさしい",
    meaning: "mudah",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "安い",
    reading: "やすい",
    meaning: "murah",
    chapter: ["Kata sifat", "i"],
  },
  {
    question: "弱い",
    reading: "よわい",
    meaning: "lemah",
    chapter: ["Kata sifat", "i"],
  },

  // === KATA SIFAT NON-i ===
  {
    question: "嫌い",
    reading: "きらい",
    meaning: "benci, tidak suka",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "便利",
    reading: "べんり",
    meaning: "praktis",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "小さな",
    reading: "ちいさな",
    meaning: "kecil",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "大好き",
    reading: "だいすき",
    meaning: "sangat suka",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "元気",
    reading: "げんき",
    meaning: "sehat, bersemangat",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "下手",
    reading: "へた",
    meaning: "tidak mahir",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "暇",
    reading: "ひま",
    meaning: "senggang",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "いろいろ",
    reading: "いろいろ",
    meaning: "macam-macam",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "丈夫",
    reading: "じょうぶ",
    meaning: "kuat, tahan lama",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "上手",
    reading: "じょうず",
    meaning: "mahir",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "きれい",
    reading: "きれい",
    meaning: "cantik, bersih",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "にぎやか",
    reading: "にぎやか",
    meaning: "ramai",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "大きな",
    reading: "おおきな",
    meaning: "besar",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "立派",
    reading: "りっぱ",
    meaning: "megah",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "親切",
    reading: "しんせつ",
    meaning: "ramah, baik hati",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "静か",
    reading: "しずか",
    meaning: "tenang",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "好き",
    reading: "すき",
    meaning: "suka",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "大変",
    reading: "たいへん",
    meaning: "menyusahkan",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "大切",
    reading: "たいせつ",
    meaning: "penting",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "有名",
    reading: "ゆうめい",
    meaning: "terkenal",
    chapter: ["Kata sifat", "na"],
  },

  // === KATA KERJA GOLONGAN I ===
  {
    question: "開きます",
    reading: "あきます",
    meaning: "buka, terbuka",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "歩きます",
    reading: "あるきます",
    meaning: "berjalan kaki",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "吹きます",
    reading: "ふきます",
    meaning: "bertiup",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "履きます",
    reading: "はきます",
    meaning: "mengenakan (bawahan)",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "働きます",
    reading: "はたらきます",
    meaning: "bekerja",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "引きます",
    reading: "ひきます",
    meaning: "menarik",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "弾きます",
    reading: "ひきます",
    meaning: "bermain (alat musik)",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "行きます",
    reading: "いきます",
    meaning: "pergi",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "書きます",
    reading: "かきます",
    meaning: "menulis",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "聞きます",
    reading: "ききます",
    meaning: "mendengar, bertanya",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "磨きます",
    reading: "みがきます",
    meaning: "menggosok",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "鳴きます",
    reading: "なきます",
    meaning: "bersuara (binatang)",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "置きます",
    reading: "おきます",
    meaning: "meletakkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "咲きます",
    reading: "さきます",
    meaning: "berkembang (bunga)",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "着きます",
    reading: "つきます",
    meaning: "tiba",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "脱ぎます",
    reading: "ぬぎます",
    meaning: "menanggalkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "泳ぎます",
    reading: "およぎます",
    meaning: "berenang",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "遊びます",
    reading: "あそびます",
    meaning: "bermain",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "並びます",
    reading: "ならびます",
    meaning: "berbaris",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "飛びます",
    reading: "とびます",
    meaning: "terbang",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "呼びます",
    reading: "よびます",
    meaning: "memanggil",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "飲みます",
    reading: "のみます",
    meaning: "minum",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "住みます",
    reading: "すみます",
    meaning: "tinggal",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "頼みます",
    reading: "たのみます",
    meaning: "meminta",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "休みます",
    reading: "やすみます",
    meaning: "beristirahat",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "読みます",
    reading: "よみます",
    meaning: "membaca",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "死にます",
    reading: "しにます",
    meaning: "mati",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "会います",
    reading: "あいます",
    meaning: "bertemu",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "洗います",
    reading: "あらいます",
    meaning: "mencuci",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "違います",
    reading: "ちがいます",
    meaning: "berbeda",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "言います",
    reading: "いいます",
    meaning: "berkata",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "買います",
    reading: "かいます",
    meaning: "membeli",
    chapter: ["Kata kerja", "Golongan I"],
  },

  // === KATA KERJA GOLONGAN II ===
  {
    question: "浴びます",
    reading: "あびます",
    meaning: "mandi, menyiram",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "できます",
    reading: "できます",
    meaning: "bisa",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "居ます",
    reading: "います",
    meaning: "ada (makhluk hidup)",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "借ります",
    reading: "かります",
    meaning: "meminjam",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "着ます",
    reading: "きます",
    meaning: "mengenakan (pakaian)",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "見ます",
    reading: "みます",
    meaning: "melihat",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "起きます",
    reading: "おきます",
    meaning: "bangun",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "降ります",
    reading: "おります",
    meaning: "turun",
    chapter: ["Kata kerja", "Golongan II"],
  },

  {
    question: "あげます",
    reading: "あげます",
    meaning: "memberi",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "開けます",
    reading: "あけます",
    meaning: "membuka",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "出かけます",
    reading: "でかけます",
    meaning: "keluar rumah",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "出ます",
    reading: "でます",
    meaning: "keluar",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "晴れます",
    reading: "はれます",
    meaning: "cerah",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "入れます",
    reading: "いれます",
    meaning: "memasukkan",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "かけます",
    reading: "かけます",
    meaning: "menggantung",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "消えます",
    reading: "きえます",
    meaning: "hilang, padam",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "答えます",
    reading: "こたえます",
    meaning: "menjawab",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "見せます",
    reading: "みせます",
    meaning: "memperlihatkan",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "並べます",
    reading: "ならべます",
    meaning: "membariskan",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "寝ます",
    reading: "ねます",
    meaning: "tidur",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "覚えます",
    reading: "おぼえます",
    meaning: "mengingat",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "教えます",
    reading: "おしえます",
    meaning: "mengajarkan",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "閉めます",
    reading: "しめます",
    meaning: "menutup",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "食べます",
    reading: "たべます",
    meaning: "makan",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "疲れます",
    reading: "つかれます",
    meaning: "letih",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "つけます",
    reading: "つけます",
    meaning: "menyalakan",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "勤めます",
    reading: "つとめます",
    meaning: "berdinas",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "生まれます",
    reading: "うまれます",
    meaning: "lahir",
    chapter: ["Kata kerja", "Golongan II"],
  },
  {
    question: "忘れます",
    reading: "わすれます",
    meaning: "lupa",
    chapter: ["Kata kerja", "Golongan II"],
  },

  // === KATA KERJA GOLONGAN III ===

  {
    question: "来ます",
    reading: "きます",
    meaning: "datang",
    chapter: ["Kata kerja", "Golongan III"],
  },

  {
    question: "します",
    reading: "します",
    meaning: "melakukan",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "勉強します",
    reading: "べんきょうします",
    meaning: "belajar",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "コピーします",
    reading: "こぴーします",
    meaning: "mengopi",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "練習します",
    reading: "れんしゅうします",
    meaning: "berlatih",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "散歩します",
    reading: "さんぽします",
    meaning: "berjalan-jalan",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "掃除します",
    reading: "そうじします",
    meaning: "membersihkan",
    chapter: ["Kata kerja", "Golongan III"],
  },

  // === TAMBAHAN KATA KERJA GOL I ===
  {
    question: "習います",
    reading: "ならいます",
    meaning: "belajar",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "吸います",
    reading: "すいます",
    meaning: "menghisap",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "使います",
    reading: "つかいます",
    meaning: "memakai",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "歌います",
    reading: "うたいます",
    meaning: "bernyanyi",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "待ちます",
    reading: "まちます",
    meaning: "menunggu",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "持ちます",
    reading: "もちます",
    meaning: "membawa",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "立ちます",
    reading: "たちます",
    meaning: "berdiri",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "あります",
    reading: "あります",
    meaning: "ada (benda)",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "降ります",
    reading: "ふります",
    meaning: "turun (hujan)",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "入ります",
    reading: "はいります",
    meaning: "masuk",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "始まります",
    reading: "はじまります",
    meaning: "mulai",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "貼ります",
    reading: "はります",
    meaning: "menempelkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "走ります",
    reading: "はしります",
    meaning: "berlari",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "要ります",
    reading: "いります",
    meaning: "butuh",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "帰ります",
    reading: "かえります",
    meaning: "pulang",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "かかります",
    reading: "かかります",
    meaning: "memerlukan (waktu)",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "切ります",
    reading: "きります",
    meaning: "memotong",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "困ります",
    reading: "こまります",
    meaning: "menyusahkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "曇ります",
    reading: "くもります",
    meaning: "mendung",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "曲がります",
    reading: "まがります",
    meaning: "membelok",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "なります",
    reading: "なります",
    meaning: "menjadi",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "登ります",
    reading: "のぼります",
    meaning: "mendaki",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "乗ります",
    reading: "のります",
    meaning: "naik (kendaraan)",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "終わります",
    reading: "おわります",
    meaning: "selesai",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "閉まります",
    reading: "しまります",
    meaning: "tutup",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "知ります",
    reading: "しります",
    meaning: "mengetahui",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "座ります",
    reading: "すわります",
    meaning: "duduk",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "止まります",
    reading: "とまります",
    meaning: "berhenti",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "取ります",
    reading: "とります",
    meaning: "mengambil",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "撮ります",
    reading: "とります",
    meaning: "mengambil (foto)",
    chapter: ["Kata kerja", "Golongan I"],
  },

  // === KATA KERJA TAMBAHAN (する系) ===
  {
    question: "作ります",
    reading: "つくります",
    meaning: "membuat",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "売ります",
    reading: "うります",
    meaning: "menjual",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "分かります",
    reading: "わかります",
    meaning: "mengerti",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "渡ります",
    reading: "わたります",
    meaning: "menyeberang",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "やります",
    reading: "やります",
    meaning: "melakukan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "出します",
    reading: "だします",
    meaning: "mengeluarkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "話します",
    reading: "はなします",
    meaning: "berbicara",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "返します",
    reading: "かえします",
    meaning: "mengembalikan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "貸します",
    reading: "かします",
    meaning: "meminjamkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "消します",
    reading: "けします",
    meaning: "memadamkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "無くします",
    reading: "なくします",
    meaning: "menghilangkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "押します",
    reading: "おします",
    meaning: "mendorong",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "差します",
    reading: "さします",
    meaning: "mengulurkan",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "渡します",
    reading: "わたします",
    meaning: "menyerahkan",
    chapter: ["Kata kerja", "Golongan I"],
  },

  // === PARTIKEL (助詞 / joshi) ===
  {
    question: "は",
    reading: "は",
    meaning: "partikel topik (wa)",
    chapter: ["Partikel"],
  },
  {
    question: "が",
    reading: "が",
    meaning: "partikel subjek",
    chapter: ["Partikel"],
  },
  {
    question: "を",
    reading: "を",
    meaning: "partikel objek",
    chapter: ["Partikel"],
  },
  {
    question: "に",
    reading: "に",
    meaning: "partikel arah, waktu, tujuan",
    chapter: ["Partikel"],
  },
  {
    question: "で",
    reading: "で",
    meaning: "partikel tempat terjadinya aksi",
    chapter: ["Partikel"],
  },
  {
    question: "へ",
    reading: "へ",
    meaning: "partikel arah",
    chapter: ["Partikel"],
  },
  {
    question: "と",
    reading: "と",
    meaning: "dan, dengan (partikel)",
    chapter: ["Partikel"],
  },
  {
    question: "も",
    reading: "も",
    meaning: "juga",
    chapter: ["Partikel"],
  },
  {
    question: "から",
    reading: "から",
    meaning: "dari",
    chapter: ["Partikel"],
  },
  {
    question: "まで",
    reading: "まで",
    meaning: "sampai",
    chapter: ["Partikel"],
  },
  {
    question: "の",
    reading: "の",
    meaning: "kepunyaan, atribut",
    chapter: ["Partikel"],
  },
  {
    question: "か",
    reading: "か",
    meaning: "partikel tanya",
    chapter: ["Partikel"],
  },
  {
    question: "ね",
    reading: "ね",
    meaning: "ya kan, konfirmasi",
    chapter: ["Partikel"],
  },
  {
    question: "よ",
    reading: "よ",
    meaning: "penegasan",
    chapter: ["Partikel"],
  },

  {
    question: "より",
    reading: "より",
    meaning: "dibanding",
    chapter: ["Partikel"],
  },
  {
    question: "や",
    reading: "や",
    meaning: "dan lain-lain",
    chapter: ["Partikel"],
  },
  {
    question: "だけ",
    reading: "だけ",
    meaning: "hanya",
    chapter: ["Partikel"],
  },
  {
    question: "しか",
    reading: "しか",
    meaning: "hanya (dengan negatif)",
    chapter: ["Partikel"],
  },
  {
    question: "くらい",
    reading: "くらい",
    meaning: "sekitar",
    chapter: ["Partikel"],
  },
  {
    question: "ぐらい",
    reading: "ぐらい",
    meaning: "sekitar",
    chapter: ["Partikel"],
  },
  {
    question: "でも",
    reading: "でも",
    meaning: "meskipun / bahkan",
    chapter: ["Partikel"],
  },

  // === KATA KETERANGAN TAMBAHAN (副詞 / fukushi) ===
  {
    question: "とても",
    reading: "とても",
    meaning: "sangat",
    chapter: ["Kata keterangan"],
  },
  {
    question: "あまり",
    reading: "あまり",
    meaning: "tidak terlalu",
    chapter: ["Kata keterangan"],
  },
  {
    question: "たくさん",
    reading: "たくさん",
    meaning: "banyak",
    chapter: ["Kata keterangan"],
  },
  {
    question: "すこし",
    reading: "すこし",
    meaning: "sedikit",
    chapter: ["Kata keterangan"],
  },
  {
    question: "ぜんぜん",
    reading: "ぜんぜん",
    meaning: "tidak sama sekali",
    chapter: ["Kata keterangan"],
  },
  {
    question: "だいたい",
    reading: "だいたい",
    meaning: "kira-kira, sebagian besar",
    chapter: ["Kata keterangan"],
  },
  {
    question: "いっしょに",
    reading: "いっしょに",
    meaning: "bersama",
    chapter: ["Kata keterangan"],
  },
  {
    question: "すぐ",
    reading: "すぐ",
    meaning: "segera",
    chapter: ["Kata keterangan"],
  },
  {
    question: "あとで",
    reading: "あとで",
    meaning: "nanti",
    chapter: ["Kata keterangan"],
  },
  {
    question: "もうすぐ",
    reading: "もうすぐ",
    meaning: "sebentar lagi",
    chapter: ["Kata keterangan"],
  },
  // === KATA SERU (感動詞 / kandoushi) ===
  {
    question: "ああ",
    reading: "ああ",
    meaning: "ah, oh",
    chapter: ["Kata seru"],
  },
  {
    question: "ええ",
    reading: "ええ",
    meaning: "ya (sopan)",
    chapter: ["Kata seru"],
  },
  {
    question: "いいえ",
    reading: "いいえ",
    meaning: "tidak",
    chapter: ["Kata seru"],
  },
  {
    question: "すみません",
    reading: "すみません",
    meaning: "permisi, maaf",
    chapter: ["Kata seru"],
  },
  {
    question: "ありがとう",
    reading: "ありがとう",
    meaning: "terima kasih",
    chapter: ["Kata seru"],
  },

  // === EKSPRESI HARIAN ===
  {
    question: "おはよう",
    reading: "おはよう",
    meaning: "selamat pagi",
    chapter: ["Kata seru"],
  },
  {
    question: "おはようございます",
    reading: "おはようございます",
    meaning: "selamat pagi (sopan)",
    chapter: ["Kata seru"],
  },
  {
    question: "こんにちは",
    reading: "こんにちは",
    meaning: "selamat siang",
    chapter: ["Kata seru"],
  },
  {
    question: "こんばんは",
    reading: "こんばんは",
    meaning: "selamat malam",
    chapter: ["Kata seru"],
  },
  {
    question: "おやすみなさい",
    reading: "おやすみなさい",
    meaning: "selamat tidur",
    chapter: ["Kata seru"],
  },
  {
    question: "いただきます",
    reading: "いただきます",
    meaning: "selamat makan",
    chapter: ["Kata seru"],
  },
  {
    question: "ごちそうさまでした",
    reading: "ごちそうさまでした",
    meaning: "terima kasih atas makanannya",
    chapter: ["Kata seru"],
  },
  {
    question: "いってきます",
    reading: "いってきます",
    meaning: "saya pergi dulu",
    chapter: ["Kata seru"],
  },
  {
    question: "いってらっしゃい",
    reading: "いってらっしゃい",
    meaning: "hati-hati di jalan",
    chapter: ["Kata seru"],
  },
  {
    question: "ただいま",
    reading: "ただいま",
    meaning: "saya pulang",
    chapter: ["Kata seru"],
  },
  {
    question: "おかえりなさい",
    reading: "おかえりなさい",
    meaning: "selamat datang kembali",
    chapter: ["Kata seru"],
  },
  {
    question: "お願いします",
    reading: "おねがいします",
    meaning: "tolong",
    chapter: ["Kata seru"],
  },
  {
    question: "失礼します",
    reading: "しつれいします",
    meaning: "permisi",
    chapter: ["Kata seru"],
  },

  // === TAMBAHAN PRIORITAS N5 (1–7) ===

  // 1️⃣ Kata kerja penting tambahan
  {
    question: "思います",
    reading: "おもいます",
    meaning: "berpikir, berpendapat",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "持って行きます",
    reading: "もっていきます",
    meaning: "membawa pergi",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "持って来ます",
    reading: "もってきます",
    meaning: "membawa datang",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "乗り換えます",
    reading: "のりかえます",
    meaning: "transit, pindah kendaraan",
    chapter: ["Kata kerja", "Golongan II"],
  },

  // 2️⃣ Kata benda kehidupan sehari-hari tambahan
  {
    question: "鍵",
    reading: "かぎ",
    meaning: "kunci",
    chapter: ["Kata benda 2", "Benda"],
  },
  {
    question: "ドア",
    reading: "どあ",
    meaning: "pintu",
    chapter: ["Kata benda 2", "Rumah"],
  },
  {
    question: "空港",
    reading: "くうこう",
    meaning: "bandara",
    chapter: ["Kata benda 2", "Tempat"],
  },
  {
    question: "海",
    reading: "うみ",
    meaning: "laut",
    chapter: ["Kata benda 2", "Alam"],
  },
  {
    question: "島",
    reading: "しま",
    meaning: "pulau",
    chapter: ["Kata benda 2", "Alam"],
  },

  // 3️⃣ Kata benda sosial & identitas tambahan
  {
    question: "奥さん",
    reading: "おくさん",
    meaning: "istri (orang lain)",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "旦那さん",
    reading: "だんなさん",
    meaning: "suami (orang lain)",
    chapter: ["Kata benda 1", "Keluarga"],
  },
  {
    question: "年齢",
    reading: "ねんれい",
    meaning: "usia",
    chapter: ["Kata benda 1", "Identitas"],
  },

  // === IDENTITAS TAMBAHAN ===
  {
    question: "年",
    reading: "とし",
    meaning: "umur, tahun usia",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "年齢",
    reading: "ねんれい",
    meaning: "usia",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "誕生日",
    reading: "たんじょうび",
    meaning: "tanggal lahir",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "生年月日",
    reading: "せいねんがっぴ",
    meaning: "tanggal lahir (formal)",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "出身",
    reading: "しゅっしん",
    meaning: "asal, daerah asal",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "出身地",
    reading: "しゅっしんち",
    meaning: "tempat asal",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "国籍",
    reading: "こくせき",
    meaning: "kewarganegaraan",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "番号札",
    reading: "ばんごうふだ",
    meaning: "nomor antrian",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "連絡先",
    reading: "れんらくさき",
    meaning: "kontak",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "電話",
    reading: "でんわ",
    meaning: "telepon",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "携帯",
    reading: "けいたい",
    meaning: "ponsel",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "携帯電話",
    reading: "けいたいでんわ",
    meaning: "telepon genggam",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "メール",
    reading: "めーる",
    meaning: "email",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "職業",
    reading: "しょくぎょう",
    meaning: "pekerjaan (profesi)",
    chapter: ["Kata benda 1", "Identitas"],
  },
  {
    question: "会社名",
    reading: "かいしゃめい",
    meaning: "nama perusahaan",
    chapter: ["Kata benda 1", "Identitas"],
  },

  // 4️⃣ Adverb tambahan penting
  {
    question: "もう一度",
    reading: "もういちど",
    meaning: "sekali lagi",
    chapter: ["Kata keterangan"],
  },
  {
    question: "ぜひ",
    reading: "ぜひ",
    meaning: "pasti, dengan segala cara",
    chapter: ["Kata keterangan"],
  },
  {
    question: "たぶん",
    reading: "たぶん",
    meaning: "mungkin",
    chapter: ["Kata keterangan"],
  },
  {
    question: "特に",
    reading: "とくに",
    meaning: "terutama",
    chapter: ["Kata keterangan"],
  },
  {
    question: "まだまだ",
    reading: "まだまだ",
    meaning: "masih jauh, belum cukup",
    chapter: ["Kata keterangan"],
  },
  {
    question: "やっと",
    reading: "やっと",
    meaning: "akhirnya",
    chapter: ["Kata keterangan"],
  },
  {
    question: "ずっと",
    reading: "ずっと",
    meaning: "terus-menerus",
    chapter: ["Kata keterangan"],
  },

  // 5️⃣ Kata sifat tambahan
  {
    question: "同じ",
    reading: "おなじ",
    meaning: "sama",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "不便",
    reading: "ふべん",
    meaning: "tidak praktis",
    chapter: ["Kata sifat", "na"],
  },
  {
    question: "簡単",
    reading: "かんたん",
    meaning: "mudah, sederhana",
    chapter: ["Kata sifat", "na"],
  },

  // 6️⃣ Counter tambahan
  {
    question: "個",
    reading: "こ",
    meaning: "buah (counter benda kecil)",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "台",
    reading: "だい",
    meaning: "unit mesin/kendaraan",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "回",
    reading: "かい",
    meaning: "kali (frekuensi)",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "歳",
    reading: "さい",
    meaning: "umur (counter usia)",
    chapter: ["Kata benda 1", "Counter"],
  },

  // 7️⃣ Partikel tambahan N5 akhir
  {
    question: "ので",
    reading: "ので",
    meaning: "karena",
    chapter: ["Partikel"],
  },
  {
    question: "のに",
    reading: "のに",
    meaning: "meskipun",
    chapter: ["Partikel"],
  },
  {
    question: "ながら",
    reading: "ながら",
    meaning: "sambil",
    chapter: ["Partikel"],
  },
  {
    question: "しかも",
    reading: "しかも",
    meaning: "selain itu",
    chapter: ["Partikel"],
  },

  // =============================
  // TAMBAHAN GRAMMAR N5
  // =============================

  {
    question: "〜たい",
    reading: "〜たい",
    meaning: "ingin melakukan",
    chapter: ["Grammar"],
  },
  {
    question: "〜てもいい",
    reading: "〜てもいい",
    meaning: "boleh melakukan",
    chapter: ["Grammar"],
  },
  {
    question: "〜てはいけません",
    reading: "〜てはいけません",
    meaning: "tidak boleh",
    chapter: ["Grammar"],
  },
  {
    question: "〜なければなりません",
    reading: "〜なければなりません",
    meaning: "harus melakukan",
    chapter: ["Grammar"],
  },
  {
    question: "〜なくてもいい",
    reading: "〜なくてもいい",
    meaning: "tidak perlu",
    chapter: ["Grammar"],
  },
  {
    question: "〜ことができます",
    reading: "〜ことができます",
    meaning: "bisa melakukan",
    chapter: ["Grammar"],
  },
  {
    question: "〜つもり",
    reading: "〜つもり",
    meaning: "berniat",
    chapter: ["Grammar"],
  },
  {
    question: "〜ましょう",
    reading: "〜ましょう",
    meaning: "mari",
    chapter: ["Grammar"],
  },
  {
    question: "〜ませんか",
    reading: "〜ませんか",
    meaning: "maukah",
    chapter: ["Grammar"],
  },
  {
    question: "〜ほうがいい",
    reading: "〜ほうがいい",
    meaning: "sebaiknya",
    chapter: ["Grammar"],
  },
  {
    question: "〜から",
    reading: "〜から",
    meaning: "karena",
    chapter: ["Grammar"],
  },
  {
    question: "〜ので",
    reading: "〜ので",
    meaning: "karena (formal)",
    chapter: ["Grammar"],
  },
  {
    question: "〜前に",
    reading: "〜まえに",
    meaning: "sebelum",
    chapter: ["Grammar"],
  },
  {
    question: "〜後で",
    reading: "〜あとで",
    meaning: "setelah",
    chapter: ["Grammar"],
  },
  {
    question: "〜ながら",
    reading: "〜ながら",
    meaning: "sambil",
    chapter: ["Grammar"],
  },

  // =============================
  // TAMBAHAN COUNTER N5
  // =============================

  {
    question: "回",
    reading: "かい",
    meaning: "kali (counter)",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "台",
    reading: "だい",
    meaning: "unit mesin/kendaraan",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "個",
    reading: "こ",
    meaning: "buah (benda kecil)",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "杯",
    reading: "はい",
    meaning: "gelas/cangkir",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "着",
    reading: "ちゃく",
    meaning: "helai pakaian",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "足",
    reading: "そく",
    meaning: "pasang (sepatu)",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "軒",
    reading: "けん",
    meaning: "rumah (counter bangunan)",
    chapter: ["Kata benda 1", "Counter"],
  },
  {
    question: "歳",
    reading: "さい",
    meaning: "umur (counter usia)",
    chapter: ["Kata benda 1", "Counter"],
  },

  // =============================
  // TAMBAHAN VERB PENTING N5
  // =============================

  // Golongan I
  {
    question: "思います",
    reading: "おもいます",
    meaning: "berpikir",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "持って行きます",
    reading: "もっていきます",
    meaning: "membawa pergi",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "持って来ます",
    reading: "もってきます",
    meaning: "membawa datang",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "手伝います",
    reading: "てつだいます",
    meaning: "membantu",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "連れて行きます",
    reading: "つれていきます",
    meaning: "mengajak pergi",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "連れて来ます",
    reading: "つれてきます",
    meaning: "mengajak datang",
    chapter: ["Kata kerja", "Golongan I"],
  },
  {
    question: "乗り換えます",
    reading: "のりかえます",
    meaning: "pindah kendaraan",
    chapter: ["Kata kerja", "Golongan II"],
  },

  // Golongan III (する系)
  {
    question: "運転します",
    reading: "うんてんします",
    meaning: "mengemudi",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "洗濯します",
    reading: "せんたくします",
    meaning: "mencuci pakaian",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "料理します",
    reading: "りょうりします",
    meaning: "memasak",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "予約します",
    reading: "よやくします",
    meaning: "memesan",
    chapter: ["Kata kerja", "Golongan III"],
  },
  {
    question: "結婚します",
    reading: "けっこんします",
    meaning: "menikah",
    chapter: ["Kata kerja", "Golongan III"],
  },
];
// === Auto-enrichment: add romaji & synonyms_id if missing ===
(function () {
  // Convert Katakana to Hiragana for normalization
  function kataToHira(str) {
    return str.replace(/[\u30A1-\u30F6]/g, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) - 0x60),
    );
  }

  // Basic Hepburn romaji map (hiragana). Covers digraphs, sokuon (っ), and chouon (ー)
  const DIGRAPHS = {
    きゃ: "kya",
    きゅ: "kyu",
    きょ: "kyo",
    しゃ: "sha",
    しゅ: "shu",
    しょ: "sho",
    ちゃ: "cha",
    ちゅ: "chu",
    ちょ: "cho",
    にゃ: "nya",
    にゅ: "nyu",
    にょ: "nyo",
    ひゃ: "hya",
    ひゅ: "hyu",
    ひょ: "hyo",
    みゃ: "mya",
    みゅ: "myu",
    みょ: "myo",
    りゃ: "rya",
    りゅ: "ryu",
    りょ: "ryo",
    ぎゃ: "gya",
    ぎゅ: "gyu",
    ぎょ: "gyo",
    じゃ: "ja",
    じゅ: "ju",
    じょ: "jo",
    びゃ: "bya",
    びゅ: "byu",
    びょ: "byo",
    ぴゃ: "pya",
    ぴゅ: "pyu",
    ぴょ: "pyo",
  };
  const MONO = {
    あ: "a",
    い: "i",
    う: "u",
    え: "e",
    お: "o",
    か: "ka",
    き: "ki",
    く: "ku",
    け: "ke",
    こ: "ko",
    さ: "sa",
    し: "shi",
    す: "su",
    せ: "se",
    そ: "so",
    た: "ta",
    ち: "chi",
    つ: "tsu",
    て: "te",
    と: "to",
    な: "na",
    に: "ni",
    ぬ: "nu",
    ね: "ne",
    の: "no",
    は: "ha",
    ひ: "hi",
    ふ: "fu",
    へ: "he",
    ほ: "ho",
    ま: "ma",
    み: "mi",
    む: "mu",
    め: "me",
    も: "mo",
    や: "ya",
    ゆ: "yu",
    よ: "yo",
    ら: "ra",
    り: "ri",
    る: "ru",
    れ: "re",
    ろ: "ro",
    わ: "wa",
    を: "o",
    ん: "n",
    が: "ga",
    ぎ: "gi",
    ぐ: "gu",
    げ: "ge",
    ご: "go",
    ざ: "za",
    じ: "ji",
    ず: "zu",
    ぜ: "ze",
    ぞ: "zo",
    だ: "da",
    ぢ: "ji",
    づ: "zu",
    で: "de",
    ど: "do",
    ば: "ba",
    び: "bi",
    ぶ: "bu",
    べ: "be",
    ぼ: "bo",
    ぱ: "pa",
    ぴ: "pi",
    ぷ: "pu",
    ぺ: "pe",
    ぽ: "po",
    ぁ: "a",
    ぃ: "i",
    ぅ: "u",
    ぇ: "e",
    ぉ: "o",
    ゎ: "wa",
    ゕ: "ka",
    ゖ: "ke",
    ー: "-", // marker for long vowel; handled later
  };

  function longVowel(prev) {
    if (!prev) return "";
    return prev
      .replace(/a$/, "a")
      .replace(/i$/, "i")
      .replace(/u$/, "u")
      .replace(/e$/, "e")
      .replace(/o$/, "o");
  }

  function kanaToRomaji(input) {
    if (!input) return "";
    const hira = kataToHira(input);
    let out = "";
    for (let i = 0; i < hira.length; i++) {
      const c = hira[i];
      const next = hira[i + 1] || "";
      const pair = c + next;

      // sokuon っ (double next consonant)
      if (c === "っ") {
        const after = hira[i + 1] || "";
        // try digraph first
        const dig = after + (hira[i + 2] || "");
        let base = DIGRAPHS[dig] || MONO[after] || "";
        if (base) out += base[0];
        continue;
      }

      // digraphs (きゃ etc.)
      if (DIGRAPHS[pair]) {
        out += DIGRAPHS[pair];
        i++; // skip next
        continue;
      }

      if (c === "ー") {
        // extend previous vowel
        const prev = out[out.length - 1] || "";
        if (prev) out += prev; // naive doubling (e.g., コーヒー -> koohii)
        continue;
      }

      // punctuation or space
      if (/[^\u3041-\u3096]/.test(c)) {
        out += c;
        continue;
      }

      out += MONO[c] || c;
    }

    // Fix common romaji niceties
    out = out
      .replace(/nn([bmp])/g, "m$1") // ん before b/m/p -> m
      .replace(/ou/g, "ou");

    return out.toLowerCase().replace(/\s+/g, ""); // remove Japanese spaces
  }

  // Derive simple Indonesian synonyms from meaning text (best-effort)
  function deriveSynonyms(meaning, existing) {
    if (existing && Array.isArray(existing) && existing.length) return existing;
    if (!meaning) return [];
    const text = String(meaning).toLowerCase();
    let raw = text
      .replace(/[\[\]（）()]/g, ",")
      .replace(/；|・|—|–|—|\/|;|\|/g, ",")
      .replace(/\s{2,}/g, " ");
    let parts = raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    // normalize common variants
    const expanded = new Set();
    for (const p of parts) {
      expanded.add(p);
      if (p.includes(" ")) expanded.add(p.replace(/\s+/g, "-"));
      if (p.includes("-")) expanded.add(p.replace(/-/g, " "));
    }
    return Array.from(expanded).slice(0, 6); // cap to avoid bloat
  }

  // Manual overrides for key entries
  const OVERRIDES_BY_QUESTION = {
    冷蔵庫: ["lemari es", "lemari-es", "lemari pendingin"],
    コップ: ["gelas", "gelas minum"],
    グラス: ["gelas kaca", "gelas minum"],
    ヒーター: ["pemanas", "penghangat ruangan"],
    エアコン: ["ac", "pendingin ruangan", "air conditioner"],
  };

  window.VOCABS = (window.VOCABS || []).map((v) => {
    const reading = v.reading || "";
    const romaji = v.romaji || kanaToRomaji(reading);
    const override = OVERRIDES_BY_QUESTION[v.question];
    const synonyms_id =
      Array.isArray(v.synonyms_id) && v.synonyms_id.length
        ? v.synonyms_id
        : override
          ? override
          : deriveSynonyms(v.meaning, v.synonyms_id);

    return Object.assign({}, v, { romaji, synonyms_id });
  });
})();
