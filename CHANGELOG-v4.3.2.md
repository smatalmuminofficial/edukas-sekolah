# Changelog EduKas v4.3.2

## Optimasi
1. Login + pull menjadi satu request HTTP.
2. Lookup Master membaca metadata A:F, lalu `state_json` hanya pada baris sekolah yang cocok.
3. Pull mencari `school_id` lewat kolom A dan membaca JSON hanya untuk baris target.
4. Cek duplikasi NPSN hanya membaca kolom B.
5. Lookup kredensial guru/siswa membaca kolom yang diperlukan.
6. Registrasi sekolah kosong melewati sinkronisasi tabel laporan.

## Keamanan
1. PBKDF2 tetap 60.000 iterasi, tidak diturunkan.
2. Lockout tingkat sekolah dihapus untuk mencegah penguncian massal.
3. Endpoint publik reset password dengan shared secret dinonaktifkan; reset melalui Apps Script Editor tetap ada.
4. Prefix token/rate limit diperbarui ke v4.3.2, sehingga sesi lama perlu login ulang.

## Instrumentasi
Frontend mencatat durasi registrasi dan login gabungan di console tanpa mencatat kredensial. Respons login menyediakan `performance.serverTotalMs`.
Target evaluasi awal (bukan jaminan): Sign Up 5–10 detik; Sign In 3–8 detik.

## Batas pengujian
Belum dilakukan uji live pada akun Google, deployment Apps Script, Spreadsheet, atau perangkat Android pengguna. Gunakan data dummy di staging.
