# EduKas-Sekolah v4.3.2

## Isi paket
- `index.html`: frontend Vercel.
- `Code.gs`: backend Google Apps Script.
- `package.json`, `.gitignore`, `.env.example`.
- `CHANGELOG-v4.3.2.md`.

## Pemasangan aman
1. Cadangkan Spreadsheet dan proyek Apps Script v4.3.1.
2. Gunakan salinan Spreadsheet/proyek khusus staging terlebih dahulu.
3. Ganti seluruh isi Apps Script dengan `Code.gs`.
4. Jalankan `setupSheets()` satu kali.
5. Pastikan Script Properties `EDUKAS_REG_SECRET` tetap disetel pada proyek Apps Script yang sama. Jangan taruh nilainya di frontend/Vercel.
6. Deploy Web App: Execute as **Me**, akses **Anyone**, lalu salin URL `/exec`.
7. Set `EDUKAS_WEBHOOK_URL` di Vercel ke URL `/exec` baru, lalu deploy ulang.
8. Uji dengan data dummy dari Android.

## Catatan
- PBKDF2 tetap 60.000 iterasi.
- Login + pemuatan data awal digabung dalam satu request (`login_and_pull`).
- Endpoint publik `admin_reset_password` berbasis shared secret dinonaktifkan. Reset manual tetap tersedia melalui `adminResetAccountPassword(npsn, role, username, passwordBaru)` di Apps Script Editor.
- Lockout login menjadi per akun, bukan per sekolah.
- Versi ini untuk staging sampai uji integrasi, keamanan, dan konsistensi data selesai.
