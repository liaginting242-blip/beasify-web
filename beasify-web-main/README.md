# Beasify
Prototipe web interaktif platform informasi beasiswa. Tugas Vinix Batch 5 Modul 7, Kelompok 35.

## Tautan
- Desain Figma (Modul 5): https://www.figma.com/design/djcxAdRWjJe8qVhSsFuMYd/Kelompok-35-UIUX
- Repositori: https://github.com/liaginting242-blip/beasify-web

## Fitur
- Landing page dengan pop-up modal
- Halaman utama daftar beasiswa
- Menu samping (hamburger) yang bisa dibuka dan ditutup
- Pencarian beasiswa
- Filter beasiswa (jenjang, pendanaan, lokasi, bidang studi, status pendaftaran, syarat IPK, sertifikat bahasa)
- Bookmark beasiswa dan halaman daftar bookmark
- Pesan "Data Tidak Ditemukan" saat hasil kosong
- Tampilan responsif untuk HP, tablet, dan laptop

## Teknologi
HTML, CSS, dan JavaScript biasa (tanpa framework). Kode dibuat dengan bantuan AI (Claude) melalui prompt terstruktur, lalu diperiksa dan disesuaikan secara manual.

## Cakupan prototipe
Prototipe mencakup **Landing page** dan **Halaman utama** (daftar beasiswa dengan menu samping, pencarian, filter, dan bookmark). Halaman lain di desain Figma (Login, Sign in, Detail, Checklist Dokumen, dan portal mitra) belum dibuat dan menjadi pengembangan selanjutnya.

## Struktur proyek
beasify-web
├── gambar/        (logo dan foto)
├── index.html     (landing page)
├── style.css
├── script.js      (pop-up modal)
├── main.html      (halaman utama)
├── main.css
└── main.js        (menu samping, pencarian, filter, bookmark)

## Cara menjalankan di lokal

**Kebutuhan:** browser (Chrome atau Edge), VS Code, dan koneksi internet (font Inter dimuat dari Google Fonts).
1. Clone repo: git clone https://github.com/liaginting242-blip/beasify-web.git
2. Buka folder beasify-web di VS Code (File, lalu Open Folder).
3. Pasang ekstensi **Live Server** (Ritwick Dey) dari menu Extensions.
4. Klik kanan index.html, pilih **Open with Live Server**. Halaman landing page terbuka.
5. Klik **Cari Beasiswa**, lalu pilih tombol **Cari Beasiswa** di pop-up untuk masuk ke halaman utama (main.html). Halaman ini juga bisa dibuka langsung: klik kanan main.html, pilih **Open with Live Server**.
6. Alternatif tanpa Live Server: klik dua kali index.html atau main.html di File Explorer.
Semua file harus tetap berada dalam satu folder, dan folder gambar harus ikut ada.

## Kontribusi anggota

| Nama | GitHub | Kontribusi |
|---|---|---|
| Apriliana G Munthe | liaginting242-blip | Landing page, halaman utama, pengelolaan repo GitHub, README |
| Maurida Nuzul Khasanah | mauridaanuzulk-pixel| [Isi kontribusi] |
| [Nama anggota 3] | [username GitHub] | [Isi kontribusi] |

## Log prompt AI
**Prompt 1: Landing page**
Lampiran: screenshot frame Landing page dari Figma.
Buatkan halaman web dari desain terlampir untuk website beasiswa bernama "Beasify".
Teknologi: HTML, CSS, dan JavaScript biasa (tanpa framework).
File: index.html, style.css, script.js.
Warna: header #5F96AE, tombol #D9D9D9, latar #FFFFFF, teks #000000.
Font: Inter (judul 48px, teks 20px).
Bagian halaman: header dengan logo, banner dengan gambar dan teks, tiga kartu info, footer.
Fitur interaktif: tombol "Cari Beasiswa" membuka pop-up modal.
Syarat: tata letak semirip mungkin dengan desain, responsif untuk HP, tablet, dan laptop, tanpa error.

**Prompt 2: Halaman utama**
Lampiran: tiga screenshot Figma (Main page, Main page Quick nav, Main page filter page).
Lanjutkan website beasiswa "Beasify". Buatkan halaman main.html dengan main.css dan main.js, memakai gaya yang sama dengan index.html dan style.css yang sudah ada.
Warna: header #5F96AE, tombol #D9D9D9, latar #FFFFFF, teks #000000.
Font: Inter.
Isi halaman: header dengan tombol hamburger, kolom pencarian "Cari beasiswa, instansi, ...", dan daftar kartu beasiswa (gambar, nama, instansi, jenjang, pendanaan).
Fitur interaktif:
1. Tombol hamburger membuka menu samping berisi Home, Bookmark, Status apply, dan Settings, dan bisa ditutup.
2. Tombol filter membuka pop-up filter (jenjang, tipe pendanaan, cakupan lokasi, bidang studi, status pendaftaran, syarat IPK, sertifikat bahasa), lalu daftar tersaring sesuai pilihan.
3. Kolom pencarian menyaring kartu saat mengetik. Jika tidak ada hasil, tampilkan "Data Tidak Ditemukan".
4. Ikon bookmark pada kartu menyimpan beasiswa, dan menu Bookmark menampilkan daftarnya.
Syarat: mirip desain, responsif untuk HP, tablet, dan laptop, tanpa error. Data beasiswa cukup 6 contoh di JavaScript.

## Catatan perbaikan manual

| Masalah | Perbaikan yang dilakukan sendiri |
|---|---|
| Logo hasil AI hanya pengganti sederhana | Diganti dengan logo asli dari Figma (logo-beasify.png) di index.html |
| Nama file gambar ganda (wisuda.jpg.jpg) dan belum dalam folder | Diganti nama dan dipindah ke folder gambar memakai git mv |
| Tombol di pop-up belum menuju halaman utama | Mengubah tombol "Cari Beasiswa" agar membuka main.html |
| Foto kartu belum ada | Mengekspor foto dari Figma dan memasangnya sebagai beasiswa-1.jpg sampai beasiswa-3.jpg |
| Teks chip filter dan data kartu masih contoh | Menyesuaikan teks chip dan data beasiswa dengan rancangan kelompok |
