document.addEventListener("DOMContentLoaded", function () {

    /* ===== MOBILE NAV TOGGLE ===== */
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    /* ===== CERTIFICATE MODAL ===== */
    const certModal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");

    if (certModal && modalImg) {
        certModal.addEventListener("click", () => {
            certModal.classList.remove("active");
        });
    }

    /* ===== SHOW MORE CERTIFICATES ===== */
    const toggleBtn = document.getElementById("toggleCertBtn");
    const extraCerts = document.querySelectorAll(".extra-cert");

    if (toggleBtn) {
        let showMore = false;

        toggleBtn.addEventListener("click", () => {
            showMore = !showMore;

            extraCerts.forEach(cert => {
                cert.style.display = showMore ? "block" : "none";
            });

            toggleBtn.textContent = showMore ? "Show Less" : "Show More";
        });
    }

    /* ===== LIVE TIME ===== */
    function updateTime() {
        const timeElement = document.getElementById("time");
        if (!timeElement) return;

        const now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        const ampm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;

        timeElement.textContent = `${hours}:${minutes} ${ampm}`;
    }

    updateTime();
    setInterval(updateTime, 60000);

    /* ===== CONTACT FORM ===== */
    const form = document.getElementById("contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Message sent successfully!");
        });
    }

    const roles = [
        "Full Stack Developer ",
        "Python Developer ",
        "Software Developer ",
        "Database Developer "
    ];

    const roleElement = document.getElementById("dynamic-role");

    if (!roleElement) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentRole = roles[roleIndex];

        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex--);
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex++);
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 1500;
            isDeleting = true;
        }
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();

});
/* ===== OPEN CERTIFICATE (GLOBAL FUNCTION) ===== */

function openCert(img) {
    const certModal = document.getElementById("certModal");
    const modalImg = document.getElementById("modalImg");

    if (certModal && modalImg) {
        modalImg.src = img.src;
        certModal.classList.add("active");
    }
}

