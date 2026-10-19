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

// ==========================================================================
// LOGIKA VALIDASI LOGIN (PENDAFTAR & MITRA)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- Login Pendaftar ---
    const loginPendaftarForm = document.getElementById('loginPendaftarForm');
    if (loginPendaftarForm) {
        loginPendaftarForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const errorMsg = document.getElementById('error-message');

            if (!email || !password) {
                errorMsg.textContent = 'Email dan Password tidak boleh kosong!';
                errorMsg.style.display = 'block';
                return;
            }

            errorMsg.style.display = 'none';
            alert('Login Pendaftar Berhasil!');
            window.location.href = 'index.html'; // Pindah ke halaman utama
        });
    }

    // --- Login Mitra ---
    const loginMitraForm = document.getElementById('loginMitraForm');
    if (loginMitraForm) {
        loginMitraForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('emailMitra').value.trim();
            const password = document.getElementById('passwordMitra').value.trim();
            const errorMsg = document.getElementById('error-message-mitra');

            if (!email || !password) {
                errorMsg.textContent = 'Email dan Password Mitra tidak boleh kosong!';
                errorMsg.style.display = 'block';
                return;
            }

            errorMsg.style.display = 'none';
            alert('Login Mitra Berhasil!');
            window.location.href = 'dashboard-mitra.html'; // Pindah ke dashboard mitra
        });
    }

    // --- Button Google Simulation ---
    const btnGoogle = document.getElementById('btnGoogle');
    if (btnGoogle) {
        btnGoogle.addEventListener('click', () => {
            alert('Simulasi Login Google Berhasil!');
            window.location.href = 'index.html';
        });
    }

    const btnGoogleMitra = document.getElementById('btnGoogleMitra');
    if (btnGoogleMitra) {
        btnGoogleMitra.addEventListener('click', () => {
            alert('Simulasi Login Google Mitra Berhasil!');
            window.location.href = 'dashboard-mitra.html';
        });
    }
});