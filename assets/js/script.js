document.getElementById('openLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

document.getElementById('buttonLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

document.getElementById('rateLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

const headings = document.querySelectorAll('.heading');
function nextHeading() {
    const active = document.querySelector('.heading.active');
    const next = active.nextElementSibling || headings[0];
    active.classList.remove('active');
    next.classList.add('active');
}
setInterval(nextHeading, 3000);

function showVideo() {
    const playVideo = document.getElementById("playVideo");
    const video = document.getElementById("youtubeVideo");
    
    playVideo.classList.add("active");
    video.src += "&autoplay=1";
}
function closeVideo() {
    const playVideo = document.getElementById("playVideo");
    const video = document.getElementById("youtubeVideo");

    playVideo.classList.remove("active");
    video.src = video.src.replace("&autoplay=1", "");
}

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".playBtn");
    const closeButton = document.querySelector(".closeBtn");
    const videoPopup = document.querySelector(".video-popup");
    const youtubeVideo = document.getElementById("youtubeVideo");

    playButton.addEventListener("click", () => {
        videoPopup.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
        videoPopup.classList.remove("active");
        youtubeVideo.src = youtubeVideo.src; 
    });
});

function buttonPlay() {
    const playVideo = document.getElementById("bookingVideo");
    const video = document.getElementById("youtubeBooking");

    playVideo.classList.add("active");
    video.src += "&autoplay=1";
}

function buttonClose() {
    const playVideo = document.getElementById("bookingVideo");
    const video = document.getElementById("youtubeBooking");

    playVideo.classList.remove("active");
    video.src = video.src.replace("&autoplay=1", "");
}

document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".playBtn");
    const closeButton = document.querySelector(".closeBtn");
    const videoPopup = document.getElementById("bookingVideo");
    const youtubeVideo = document.getElementById("youtubeBooking");

    playButton.addEventListener("click", () => {
        videoPopup.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
        videoPopup.classList.remove("active");
        youtubeVideo.src = youtubeVideo.src; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            const url = card.getAttribute("data-url");
            if (url) {
                window.open(url, "_blank");
            }
        });
    });
});