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


document.querySelectorAll(".activity-slider").forEach(slider => {

    const photos = slider.querySelectorAll(".activity-photo");
    const dots = slider.querySelectorAll(".activity-dot");

    function show(index) {

        photos.forEach(img => img.classList.remove("active"));
        dots.forEach(dot => dot.classList.remove("active"));

        photos[index].classList.add("active");
        dots[index].classList.add("active");
    }

    dots.forEach((dot, index) => {
        dot.addEventListener("click", e => {
            e.stopPropagation();
            show(index);
        });
    });

});