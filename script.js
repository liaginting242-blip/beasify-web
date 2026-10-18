// Pop-up modal Beasify
const modal = document.getElementById("modal");

// Buka pop-up saat tombol dengan atribut data-open-modal diklik
document.querySelectorAll("[data-open-modal]").forEach((tombol) => {
  tombol.addEventListener("click", () => modal.showModal());
});

// Tutup pop-up lewat tombol dengan atribut data-close-modal
document.querySelectorAll("[data-close-modal]").forEach((tombol) => {
  tombol.addEventListener("click", () => modal.close());
});

// Tutup pop-up saat area gelap di luar kotak diklik
modal.addEventListener("click", (event) => {
  if (event.target === modal) modal.close();
});

// Tombol Esc menutup pop-up otomatis (bawaan elemen <dialog>)
