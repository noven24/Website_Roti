# Transisi ke Ekosistem Full-Stack (Integrasi Supabase & Express)

Di tahap bersejarah ini, d'Bakery resmi naik kelas perlengkapan senjatanya dari proyek simulatif *Front-End* menjadi panggung arsitektur peladen penuh sesungguhnya!

## 1. Integrasi Ruang Penyokong Backend (Vite ↔ Express)
Kami telah menerapkan peladen sentral perantara `Express.js` untuk merangkum seluruh kerangka lalu lintas data, bertengger manis di `http://localhost:5000`. Coba ingat lagi larik kaku yang tertanam di halaman Menu? Segala hardcode yang ada kini hanyalah kenangan; resep utamanya meluncur langsung dari Peladen (Backend) ini sebelum dibaca React!

## 2. Inisiasi Database Skala Enterprise (Pondasi Supabase)
Demi meminimalikasi pengelolaan database yang kolot, d'Bakery telah disuntik oleh **Supabase Database (PostgreSQL)** berteknologi infrastruktur mumpuni:
*   Proyek Awannya bernama `d'Bakery Backend` dibangun dan dikoneksikan bebas tagihan!
*   **Migrasi Skema Kesuksesan:** Tabel basis data (`products` dan `promos`) telah ditebarkan dan bibit isian barisan roti seperti *Bika Ambon*, *Kue Ku*, hingga *Promo Diskon Lebaran* secara riil hidup dan menempati singgasananya ke Tabel penyimpanan Supabase.

## 3. Komunikasi Jaringan Tanpa Halangan (REST API Implementation)
Halaman Front-End tidak lagi menatap kekosongan dengan data paten:
*   **Menu Katalog:** Tampilan visual rotinya kini membentang indah langsung menggunakan pemanggilan asinkron yang melayang dari peladen. (Coba lihat betapa ajaibnya file `data/products.js` yang berubah memaki fungsi `fetch()`).
*   **Halaman Berita & Promo (NewsPromo Page):** Begitu juga dengan poster pamflet katalog diskon gratis ongkir dan buka cabang! Spanduk diskon dilarikan lurus dari Tabel `promos` Supabase awan lalu diurutkan di depan mata Anda. Kecepatan tanpa batas.

## 4. Keamanan Aset Absolut (`/public/assets`)
Sebuah sistem database tidak boleh memuat lokasi absolut memori sistem komputer klien. Kami merapikan seluruh gambar estetis yang sebelumnya terparkir di bilik `src/assets`, menuju ke landasan `public/assets`. Kini gambar berjalan secara independen dan transparan!

> [!TIP]
> Jalankan dua terminal bersamaan (Satu membedah `npm run dev` pada *client*, dan tab lain membedah peladen `node index.js` pada *server*). Lirik antarmuka ajaib situs web d'Bakery Anda yang sejatinya kini sedang bertindak bagai ekosistem bisnis E-Commerce sesungguhnya!
