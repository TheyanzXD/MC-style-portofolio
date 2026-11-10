# M. Izyan Danish — Minecraft-inspired Portfolio

Website portofolio pribadi dengan antarmuka blocky/pixel terinspirasi dunia Minecraft. Dibangun menggunakan HTML, CSS, dan JavaScript murni (tanpa framework atau build step).

## Isi folder

- `index.html` — struktur halaman utama dan halaman profil.
- `style.css` — warna, komponen blocky, layout responsif, dan animasi.
- `script.js` — navigasi halaman, tombol kembali, animasi transisi, dan navigasi bagian profil.
- `README.md` — panduan ini.

## Menjalankan secara lokal

1. Ekstrak ZIP.
2. Buka `index.html` di browser.
3. Untuk pengalaman lokal yang lebih konsisten, jalankan static server, misalnya:

   ```bash
   python -m http.server 8000
   ```

4. Buka `http://localhost:8000`.

Tidak ada proses instalasi dependency atau kompilasi.

## Foto profil

Foto profil sudah dipasang pada halaman utama dan kartu identitas di halaman profil. File foto berada di `assets/profile-photo.jpg`. Untuk menggantinya, timpa file tersebut dengan foto baru menggunakan nama file yang sama.

## Mengubah data profil

Edit teks langsung di `index.html`. Bagian utama yang bisa diperbarui:

- Nama, deskripsi singkat, dan label minat.
- Riwayat pendidikan.
- Hobi dan minat.
- Jurusan PPLG, deskripsi serta URL empat proyek GitHub.
- Cita-cita dan motto.
- Tautan media sosial.

## Deploy ke Vercel

1. Upload isi folder ini ke repository GitHub.
2. Impor repository tersebut di Vercel.
3. Pilih framework preset **Other**.
4. Build command: kosongkan.
5. Output directory: `.` (root project).
6. Deploy.

## Catatan

- Navigasi **BUKA PROFIL SAYA** membuka halaman profil dengan animasi transisi.
- Tombol **KEMBALI** dan tombol di footer mengembalikan pengunjung ke halaman utama. Tombol `Escape` juga dapat digunakan saat halaman profil terbuka.
- Navigasi bagian profil menggulir ke bagian yang dipilih.
- Tautan proyek dan media sosial akan terbuka di tab baru.
- Font Google Fonts digunakan sebagai peningkatan tampilan; jika tidak tersedia, browser memakai font fallback lokal.
