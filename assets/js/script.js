//docs click: new tab
document.getElementById('docsLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//button click: new tab
document.getElementById('buttonLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//rating click: new tab
document.getElementById('rateLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//button buy: new tab
document.getElementById('buyLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//headings visibility
const headings = document.querySelectorAll('.heading');
function nextHeading() {
    const active = document.querySelector('.heading.active');
    const next = active.nextElementSibling || headings[0];
    active.classList.remove('active');
    next.classList.add('active');
}
setInterval(nextHeading, 3000);

//intro video opening
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

//booking video opening
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

//navbar scrolling
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

//card click: new tab
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

function openPopup() {
    document.getElementById("popup").style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
}