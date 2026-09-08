
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

let current = 0;

function showSlide(index) {

    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    slides[index].classList.add("active");
    dots[index].classList.add("active");

    current = index;
}

dots.forEach((dot, i) => {

    dot.addEventListener("click", () => {

        showSlide(i);

    });

});

setInterval(() => {

    current++;

    if (current >= slides.length) {
        current = 0;
    }

    showSlide(current);

}, 5000);


/* HAMBURGER */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("show");
    document.body.classList.toggle("menu-open");

    if (menu.classList.contains("show")) {
        hamburger.innerHTML = "✕";
    } else {
        hamburger.innerHTML = "☰";
    }

});

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("show");
        document.body.classList.remove("menu-open");
        hamburger.innerHTML = "☰";

    });

});


/* ==========================
   ACTIVITY MODAL
========================== */

const modal = document.getElementById("activityModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");

document.querySelectorAll(".activity-item").forEach(card => {

    card.addEventListener("click", function () {

        // Ambil foto yang sedang aktif di slider
        const activePhoto = this.querySelector(".activity-photo.active");

        modalImage.src = activePhoto.src;
        modalTitle.textContent = this.dataset.title;
        modalDesc.textContent = this.dataset.desc;

        modal.classList.add("show");

    });

});

document.querySelector(".close-modal").onclick = () => {
    modal.classList.remove("show");
};

modal.onclick = (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
};


/* =========================================
   ACTIVITY PHOTO SLIDER
========================================= */

document.querySelectorAll(".activity-slider").forEach(slider => {

    const photos = slider.querySelectorAll(".activity-photo");
    const dots = slider.querySelectorAll(".activity-dot");

    let current = 0;

    function showActivityPhoto(index) {

        photos.forEach(photo => {
            photo.classList.remove("active");
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        photos[index].classList.add("active");
        dots[index].classList.add("active");

        current = index;
    }

    dots.forEach((dot, index) => {

        dot.addEventListener("click", function (e) {

            // Supaya klik dots tidak membuka modal kegiatan
            e.stopPropagation();

            showActivityPhoto(index);

        });

    });

    // Otomatis berganti foto
    setInterval(() => {

        current++;

        if (current >= photos.length) {
            current = 0;
        }

        showActivityPhoto(current);

    }, 4000);

});


// ===============================
// ABOUT SLIDER
// ===============================
const aboutSlider = document.querySelector(".about-slider");

if (aboutSlider) {
    const photos = aboutSlider.querySelectorAll(".about-photo");
    const dots = aboutSlider.querySelectorAll(".about-dot");

    let currentIndex = 0;
    let aboutTimer;

    function showAbout(index) {
        // Hapus active dari semua foto
        photos.forEach(photo => {
            photo.classList.remove("active");
        });

        // Hapus active dari semua dots
        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        // Aktifkan foto dan dot yang dipilih
        photos[index].classList.add("active");
        dots[index].classList.add("active");

        currentIndex = index;
    }

    // Klik dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function (e) {
            e.preventDefault();
            e.stopPropagation();

            showAbout(index);

            // Reset timer
            clearInterval(aboutTimer);
            startAboutSlider();
        });
    });

    // Auto slide
    function startAboutSlider() {
        aboutTimer = setInterval(() => {
            currentIndex++;

            if (currentIndex >= photos.length) {
                currentIndex = 0;
            }

            showAbout(currentIndex);
        }, 4000);
    }

    // Jalankan slider
    showAbout(0);
    startAboutSlider();
}