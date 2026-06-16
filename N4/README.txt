TTS BELAJAR WIBU v0.6.3 — VIEWPORT GAME MODE

Isi:
- index.html: pemilih level
- N5/, N4/, N3/: aplikasi TTS dan checkout langsung
- assets/: mesin, desain, dan tracker

Alur akses:
- setiap level mendapat satu puzzle gratis
- puzzle gratis yang belum selesai tetap dapat dilanjutkan
- setelah trial selesai, popup pembelian muncul otomatis
- pembeli lama masuk menggunakan email ATAU nomor WhatsApp pembelian
- tidak memakai kode OTP/email enam digit
- sesi hilang diarahkan ke login
- masa akses berakhir diarahkan ke perpanjangan
- data checkout disimpan lokal agar tidak perlu mengetik ulang

Fitur permainan:
- generator hanya menerima puzzle yang saling terhubung dan benar-benar menyilang
- jumlah kata adaptif: 6–8 di HP kecil, 8–9 di tablet, dan 10–12 di desktop
- grid dipotong mengikuti area terpakai
- pengguna mengetik langsung ke grid; buffer tersembunyi tetap memproses romaji per kata
- kana kecil, っ, ん, katakana, dan tanda panjang ー didukung
- petunjuk hiragana/katakana disembunyikan sampai jawaban benar
- petunjuk Mendatar dan Menurun memakai tab yang berpindah otomatis
- Enter atau tombol Periksa Jawaban memeriksa semua jawaban lengkap; kotak kosong diabaikan
- mode permainan menyesuaikan viewport dan tidak memakai scroll halaman

Syarat backend:
- Belajar Wibu Transaction Plugin minimal 0.4.32
- Tracker Plugin 0.2.4

Catatan keamanan:
Login email/WhatsApp lebih sederhana tetapi lebih lemah daripada OTP. Endpoint backend tetap membatasi maksimal lima percobaan dalam lima belas menit.
