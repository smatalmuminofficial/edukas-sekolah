# EduKas-Sekolah 4.0 — Catatan Perubahan

Versi resmi aplikasi: **4.0**. Perubahan kecil tidak otomatis menaikkan versi.

## Performa autentikasi
- PBKDF2-HMAC-SHA256 menggunakan mesin SHA-256/HMAC JavaScript V8.
- Iterasi tetap 60.000; format hash `pbkdf2_v2_sha256$iterations$salt$derivedKey` tidak berubah.
- Proses login memakai ulang state sekolah yang dibaca saat autentikasi.
- Pencarian Master Sheet membaca A:B untuk identitas, lalu C:G hanya pada baris sekolah target.
- Metrik server mengukur pencarian master, parsing state, verifikasi password, token, pemuatan state, penulisan, dan sinkronisasi.
- Tidak mencatat kredensial atau data pribadi.

## Tampilan
- Identitas visual, warna, ikon, menu dan fitur dipertahankan.
- Font dashboard mobile diperbesar.
- Saldo dan ringkasan keuangan diperjelas.
- Desktop >=1024px menggunakan workspace lebih lebar, navigasi samping, dan dashboard dua kolom.
- Mobile tetap memakai navigasi bawah.

## Validasi
- Jalankan `testPbkdf2EngineCompatibility()` di Apps Script sebelum deploy backend.
- Belum ada klaim waktu Sign In/Sign Up tertentu sebelum pengujian live Android dan Apps Script.


## Koreksi backend setelah uji Apps Script
- Menambahkan helper `constantTimeEquals_()` yang sebelumnya dipakai oleh validasi hash password, kode otorisasi pendaftaran, dan tes kompatibilitas tetapi belum didefinisikan.
