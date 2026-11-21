# EduKas-Sekolah 4.0

Versi resmi aplikasi ditetapkan menjadi **4.0** oleh pemilik aplikasi. Nomor versi berikutnya hanya berubah berdasarkan keputusan pemilik aplikasi.

## File
- `index.html`: frontend responsif untuk Vercel.
- `api/config.js`: endpoint konfigurasi Vercel.
- `backend-source/Code.gs`: backend Google Apps Script.
- `CHANGELOG-4.0.md`: catatan perubahan.

## Deploy frontend Vercel
1. Cadangkan repository yang sekarang.
2. Unggah isi paket Vercel ke root repository GitHub.
3. Jangan menambahkan `package.json`; konfigurasi HTML statis + API route mengikuti deployment yang sebelumnya berhasil.
4. Pastikan Environment Variable `EDUKAS_WEBHOOK_URL` di Vercel berisi URL Web App Apps Script `/exec`.
5. Deploy dan uji dengan akun/data dummy.

## Memasang backend Apps Script
1. Cadangkan proyek Apps Script.
2. Salin seluruh isi `backend-source/Code.gs` ke proyek Apps Script yang terhubung ke Spreadsheet EduKas.
3. Pastikan Script Property `EDUKAS_REG_SECRET` tetap disetel. Jangan masukkan ke frontend/Vercel.
4. Jalankan `testPbkdf2EngineCompatibility()` dari Apps Script Editor. Lanjutkan hanya jika `passed: true`.
5. Deploy Web App sebagai versi baru; perbarui `EDUKAS_WEBHOOK_URL` di Vercel bila URL `/exec` berubah.
6. Uji Bendahara, Kepala Sekolah, Guru, dan Wali Murid dengan akun dummy.

## Catatan
- PBKDF2-HMAC-SHA256 tetap 60.000 iterasi dan format hash tersimpan tetap kompatibel.
- Mesin PBKDF2 V8 mengurangi panggilan Utilities berulang.
- Login awal menggunakan ulang state yang sudah dibaca saat autentikasi.
- Metrik waktu per tahap tidak mengandung password, hash, token, NPSN, atau data pribadi.
- UI, menu, fitur, warna, dan alur bisnis dipertahankan. Ukuran dashboard dan layout desktop ditingkatkan.


## Koreksi backend
Backend terbaru mencakup helper `constantTimeEquals_()` yang diperlukan oleh verifikasi password, pendaftaran, dan tes kompatibilitas.
