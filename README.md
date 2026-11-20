# EduKas v4.3.1 - Vercel Site

Paket ini adalah frontend + endpoint konfigurasi Vercel saja.

## Deploy
1. Upload seluruh isi folder ini ke root repository GitHub Private.
2. Import repository tersebut ke Vercel.
3. Framework Preset: Other.
4. Root Directory: `./`.
5. Tambahkan Environment Variable `EDUKAS_WEBHOOK_URL` dengan URL Google Apps Script Web App yang berakhiran `/exec`.
6. Pilih environment Production (Preview juga jika diperlukan), lalu Save.
7. Deploy atau Redeploy setelah menyimpan Environment Variable.

`api/config.js` membutuhkan `package.json` berisi `"type": "module"` karena memakai `export default`.

## Backend
Kode Google Apps Script (`Code.gs`) disimpan terpisah dan ditempel ke project Apps Script yang terikat langsung ke Google Spreadsheet. Jangan mengunggah file Code.gs sebagai aset publik Vercel.

## Catatan
- Supabase dinonaktifkan pada v4.3.1.
- Gunakan spreadsheet dan akun uji terlebih dahulu. Jangan masukkan data keuangan atau identitas siswa sebenarnya saat uji awal.
- Kode `EDUKAS_REG_SECRET` v4.3.1 dikirim dari form browser ke backend untuk registrasi/reset. Gunakan secret khusus pengujian, jangan pakai ulang kata sandi atau secret pusat yang dipakai untuk layanan lain.
