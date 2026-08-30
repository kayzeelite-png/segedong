// ================= MENU MOBILE =================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// ================= CLOSE MENU =================

document.querySelectorAll("#navMenu a").forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("open");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= FAVORITE =================

let favorites = 0;

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

const favoriteCount =
    document.getElementById("favoriteCount");

favoriteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const icon = button.querySelector("i");

        if (!button.classList.contains("active")) {

            button.classList.add("active");

            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");

            button.innerHTML =
                '<i class="fa-solid fa-heart"></i> Difavoritkan';

            favorites++;

        } else {

            button.classList.remove("active");

            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");

            button.innerHTML =
                '<i class="fa-regular fa-heart"></i> Favorit';

            favorites--;

        }

        favoriteCount.textContent = favorites;

    });

});


// ================= BACK TO TOP =================

const backTop =
    document.getElementById("backTop");

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});

backTop.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ================= SHARE =================

function shareWebsite() {

    if (navigator.share) {

        navigator.share({
            title: "Desa Segedong",
            text: "Jelajahi Portal Desa Segedong",
            url: window.location.href
        });

    } else {

        navigator.clipboard.writeText(
            window.location.href
        );

        alert("Link website berhasil disalin!");

    }

}


// ================= ACTIVE NAV =================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll("#navMenu a");

window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }

    });

});
