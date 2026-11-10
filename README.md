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

## Menambahkan foto profil nanti

Saat foto sudah siap:

1. Letakkan file foto di folder proyek, misalnya `foto-izyan.jpg`.
2. Di `index.html`, cari komentar `<!-- Area avatar sementara: ganti dengan foto asli saat foto sudah tersedia. -->` tepat sebelum elemen `.avatar-sky` (untuk saat ini area avatar dibuat dari CSS).
3. Ganti elemen `.avatar-sky` atau isi area `.id-card__avatar` dengan elemen gambar seperti berikut:

   ```html
   <img class="profile-photo" src="foto-izyan.jpg" alt="Foto M. Izyan Danish" />
   ```

4. Tambahkan aturan CSS `.profile-photo { width: 100%; height: 100%; object-fit: cover; }` sesuai area yang dipakai.

Foto belum disertakan sehingga tampilan awal memakai ilustrasi avatar blok dan placeholder inisial.

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
