// ===== Data contoh beasiswa =====
// Ganti dengan data asli kelompok. Nama file gambar ada di folder gambar/.
const DATA = [
  { id: 1, nama: "Beasiswa Karti Unggulan",   instansi: "PT ABDH",                jenjang: "S1", pendanaan: "Fully Funded", lokasi: "Dalam Negeri", bidang: "Teknik",              status: "Dibuka",         ipk: "3.00", bahasa: "Tidak wajib", gambar: "gambar/beasiswa-1.jpg" },
  { id: 2, nama: "Beasiswa Prestasi Nusantara", instansi: "Yayasan Cendekia",     jenjang: "S1", pendanaan: "Partial",      lokasi: "Dalam Negeri", bidang: "Ekonomi dan Bisnis",  status: "Dibuka",         ipk: "3.50", bahasa: "Tidak wajib", gambar: "gambar/beasiswa-2.jpg" },
  { id: 3, nama: "Beasiswa Pemimpin Muda",    instansi: "Yayasan Bangun Negeri",  jenjang: "S2", pendanaan: "Fully Funded", lokasi: "Luar Negeri",  bidang: "Sains",               status: "Segera Ditutup", ipk: "3.50", bahasa: "Wajib",       gambar: "gambar/beasiswa-3.jpg" },
  { id: 4, nama: "Beasiswa Riset Terapan",    instansi: "PT Maju Bersama",        jenjang: "S2", pendanaan: "Partial",      lokasi: "Dalam Negeri", bidang: "Teknik",              status: "Dibuka",         ipk: "3.00", bahasa: "Tidak wajib", gambar: null },
  { id: 5, nama: "Beasiswa Doktor Inovasi",   instansi: "Lembaga Riset Nusa",     jenjang: "S3", pendanaan: "Fully Funded", lokasi: "Luar Negeri",  bidang: "Sains",               status: "Dibuka",         ipk: "3.50", bahasa: "Wajib",       gambar: null },
  { id: 6, nama: "Beasiswa Kelas Digital",    instansi: "Yayasan Edukasi Digital", jenjang: "S1", pendanaan: "Uang Saku",    lokasi: "Online",       bidang: "Teknologi Informasi", status: "Ditutup",        ipk: "3.00", bahasa: "Tidak wajib", gambar: null },
];

const GRUP_CHIP = ["jenjang", "pendanaan", "lokasi", "status", "ipk", "bahasa"];

const buatFilterKosong = () => {
  const f = { bidang: "" };
  GRUP_CHIP.forEach((g) => (f[g] = new Set()));
  return f;
};

const salinFilter = (f) => {
  const baru = { bidang: f.bidang };
  GRUP_CHIP.forEach((g) => (baru[g] = new Set(f[g])));
  return baru;
};

// ===== Status halaman =====
const state = {
  kata: "",
  tampilan: "semua",            // "semua" atau "bookmark"
  filter: buatFilterKosong(),   // filter yang sudah diterapkan (tombol Cari)
  tersimpan: new Set(),
};
let pilihan = buatFilterKosong(); // pilihan di panel yang belum diterapkan

// ===== Elemen =====
const $ = (selector) => document.querySelector(selector);
const header = $("#header");
const tombolMenu = $("#tombol-menu");
const menu = $("#menu-samping");
const layarGelap = $("#layar-gelap");
const tombolFilter = $("#tombol-filter");
const panelFilter = $("#panel-filter");
const inputCari = $("#cari");
const selectBidang = $("#bidang");
const daftar = $("#daftar");
const kosong = $("#kosong");
const judul = $("#judul");
const statusHasil = $("#status-hasil");

// ===== Bookmark tersimpan di browser =====
const KUNCI = "beasify-bookmark";

function muatBookmark() {
  try {
    const isi = JSON.parse(localStorage.getItem(KUNCI) || "[]");
    if (Array.isArray(isi)) isi.forEach((id) => state.tersimpan.add(id));
  } catch (e) {
    // Penyimpanan tidak tersedia, bookmark hanya berlaku selama halaman terbuka
  }
}

function simpanBookmark() {
  try {
    localStorage.setItem(KUNCI, JSON.stringify([...state.tersimpan]));
  } catch (e) {
    // Diabaikan
  }
}

// ===== Menampilkan kartu =====
function cocokFilter(item) {
  const f = state.filter;
  const cocokChip = GRUP_CHIP.every((g) => f[g].size === 0 || f[g].has(item[g]));
  const cocokBidang = !f.bidang || item.bidang === f.bidang;
  return cocokChip && cocokBidang;
}

function cocokKata(item) {
  const kata = state.kata.trim().toLowerCase();
  if (!kata) return true;
  return [item.nama, item.instansi, item.jenjang, item.bidang]
    .join(" ")
    .toLowerCase()
    .includes(kata);
}

function buatIkonBookmark() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("aria-hidden", "true");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", "M6 3h12v18l-6-4.5L6 21z");
  svg.appendChild(path);
  return svg;
}

function buatTeks(tag, kelas, teks) {
  const el = document.createElement(tag);
  if (kelas) el.className = kelas;
  el.textContent = teks;
  return el;
}

function buatKartu(item) {
  const kartu = document.createElement("article");
  kartu.className = "kartu";

  const foto = document.createElement("div");
  foto.className = "foto";
  if (item.gambar) {
    const img = document.createElement("img");
    img.src = item.gambar;
    img.alt = "Foto " + item.nama;
    img.loading = "lazy";
    foto.appendChild(img);
  }

  const tombol = document.createElement("button");
  tombol.type = "button";
  tombol.className = "bookmark";
  const tersimpan = state.tersimpan.has(item.id);
  tombol.setAttribute("aria-pressed", String(tersimpan));
  tombol.setAttribute("aria-label", "Simpan " + item.nama);
  tombol.appendChild(buatIkonBookmark());
  tombol.addEventListener("click", () => ubahBookmark(item.id, tombol));
  foto.appendChild(tombol);

  kartu.append(
    foto,
    buatTeks("h2", "", item.nama),
    buatTeks("p", "", "Instansi " + item.instansi),
    buatTeks("p", "", "Jenjang " + item.jenjang),
    buatTeks("p", "pendanaan", item.pendanaan)
  );
  return kartu;
}

function render() {
  const hasil = DATA.filter(
    (item) =>
      (state.tampilan === "semua" || state.tersimpan.has(item.id)) &&
      cocokKata(item) &&
      cocokFilter(item)
  );

  daftar.replaceChildren(...hasil.map(buatKartu));

  // Judul halaman: terlihat hanya di tampilan bookmark
  const diBookmark = state.tampilan === "bookmark";
  judul.textContent = diBookmark ? "Bookmark List" : "Daftar beasiswa";
  judul.classList.toggle("sr-only", !diBookmark);

  // Pesan kosong
  const adaPenyaring = state.kata.trim() !== "" || filterAktif();
  kosong.hidden = hasil.length > 0;
  if (hasil.length === 0) {
    if (diBookmark && !adaPenyaring) {
      $("#kosong-judul").textContent = "Belum Ada Bookmark";
      $("#kosong-teks").textContent = "Tekan ikon bookmark pada kartu beasiswa untuk menyimpannya di sini.";
    } else {
      $("#kosong-judul").textContent = "Data Tidak Ditemukan";
      $("#kosong-teks").textContent = "Tidak ada beasiswa yang cocok. Coba ubah kata kunci atau filter.";
    }
  }

  tombolFilter.classList.toggle("aktif", filterAktif());
  statusHasil.textContent = hasil.length + " beasiswa ditampilkan";
}

function filterAktif() {
  const f = state.filter;
  return f.bidang !== "" || GRUP_CHIP.some((g) => f[g].size > 0);
}

function ubahBookmark(id, tombol) {
  if (state.tersimpan.has(id)) state.tersimpan.delete(id);
  else state.tersimpan.add(id);
  simpanBookmark();

  if (state.tampilan === "bookmark") {
    render(); // kartu yang tidak disimpan lagi hilang dari daftar
  } else {
    tombol.setAttribute("aria-pressed", String(state.tersimpan.has(id)));
  }
}

// ===== Menu samping (interaksi 1) =====
function aturTinggiHeader() {
  document.documentElement.style.setProperty("--tinggi-header", header.offsetHeight + "px");
}

function bukaMenu() {
  aturTinggiHeader();
  tutupFilter();
  menu.classList.add("terbuka");
  layarGelap.classList.add("terbuka");
  tombolMenu.setAttribute("aria-expanded", "true");
  tombolMenu.setAttribute("aria-label", "Tutup menu");
  menu.querySelector("button").focus();
}

function tutupMenu(kembaliFokus = true) {
  if (!menu.classList.contains("terbuka")) return;
  menu.classList.remove("terbuka");
  layarGelap.classList.remove("terbuka");
  tombolMenu.setAttribute("aria-expanded", "false");
  tombolMenu.setAttribute("aria-label", "Buka menu");
  if (kembaliFokus) tombolMenu.focus();
}

tombolMenu.addEventListener("click", () => {
  menu.classList.contains("terbuka") ? tutupMenu() : bukaMenu();
});

layarGelap.addEventListener("click", () => tutupMenu());

menu.addEventListener("click", (event) => {
  const tombol = event.target.closest("button[data-aksi]");
  if (!tombol) return;

  const aksi = tombol.dataset.aksi;
  if (aksi === "home") state.tampilan = "semua";
  if (aksi === "bookmark") state.tampilan = "bookmark";
  // "belum": halaman Status apply dan Settings belum dibuat, menu hanya ditutup

  tutupMenu(false);
  render();
});

// ===== Filter (interaksi 2) =====
function bukaFilter() {
  tutupMenu(false);
  panelFilter.hidden = false;
  tombolFilter.setAttribute("aria-expanded", "true");
  tombolFilter.setAttribute("aria-label", "Tutup filter");
}

function tutupFilter() {
  if (panelFilter.hidden) return;
  panelFilter.hidden = true;
  tombolFilter.setAttribute("aria-expanded", "false");
  tombolFilter.setAttribute("aria-label", "Buka filter");
}

tombolFilter.addEventListener("click", () => {
  panelFilter.hidden ? bukaFilter() : tutupFilter();
});

// Pilih atau batalkan pilihan chip
panelFilter.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;

  const grup = chip.dataset.grup;
  const nilai = chip.dataset.nilai;
  if (pilihan[grup].has(nilai)) pilihan[grup].delete(nilai);
  else pilihan[grup].add(nilai);
  chip.setAttribute("aria-pressed", String(pilihan[grup].has(nilai)));
});

selectBidang.addEventListener("change", () => {
  pilihan.bidang = selectBidang.value;
});

$("#tombol-terapkan").addEventListener("click", () => {
  state.filter = salinFilter(pilihan);
  tutupFilter();
  tombolFilter.focus();
  render();
});

$("#tombol-reset").addEventListener("click", () => {
  pilihan = buatFilterKosong();
  state.filter = buatFilterKosong();
  selectBidang.value = "";
  panelFilter.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-pressed", "false"));
  render();
});

// ===== Pencarian =====
inputCari.addEventListener("input", () => {
  state.kata = inputCari.value;
  render();
});

// ===== Tombol Esc dan ukuran layar =====
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (menu.classList.contains("terbuka")) tutupMenu();
  else if (!panelFilter.hidden) {
    tutupFilter();
    tombolFilter.focus();
  }
});

window.addEventListener("resize", aturTinggiHeader);

// ===== Mulai =====
aturTinggiHeader();
muatBookmark();
render();
