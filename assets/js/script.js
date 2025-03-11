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

//rate span link: new tab
document.getElementById('spanRate').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//rentImg link: new tab
document.getElementById('rentalLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//serviceImg link: new tab
document.getElementById('serviceLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//eventImg link: new tab
document.getElementById('eventLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//classifiedImg link: new tab
document.getElementById('classifiedLink').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});

//slideImages link: new tab
document.getElementById('slideLink1').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});
document.getElementById('slideLink2').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});
document.getElementById('slideLink3').addEventListener('click', function(e) {
    e.preventDefault();
    const href = this.getAttribute('href');
    window.open(href, '_blank');
});
document.getElementById('slideLink4').addEventListener('click', function(e) {
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

//service video opening
function btnPlay() {
    const playVideo = document.getElementById("serviceVideo");
    const video = document.getElementById("youtubeService");

    playVideo.classList.add("active");
    video.src = video.src.replace("&autoplay=1", "");
}
function btnClose() {
    const playVideo = document.getElementById("serviceVideo");
    const video = document.getElementById("youtubeService");

    playVideo.classList.remove("active");
}

//front-end video opening
function videoPlay() {
    const playVideo = document.getElementById("frontEndVideo");
    const video = document.getElementById("youtubeFrontEnd");

    playVideo.classList.add("active");
    video.src = video.src.replace("&autoplay=1", "");
}
function videoClose() {
    const playVideo = document.getElementById("frontEndVideo");
    const video = document.getElementById("youtubeFrontEnd");

    playVideo.classList.remove("active");
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

//service cards transition on scroll
document.addEventListener("scroll", function () {
    let serviceCards = document.querySelector(".serviceCards");
    let position = serviceCards.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (position < windowHeight - 50) {
        serviceCards.classList.add("show");
    }
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

//nav links scrolling fixed
// window.addEventListener("scroll", function () {
//     const navbar = document.querySelector(".navLink");
//     const linkDiv = document.querySelector(".links");
//     const sectionTop = linkDiv.offsetTop;
//     const scrollPosition = window.scrollY;

//     if (scrollPosition >= sectionTop) {
//         navbar.classList.add("fixed-nav");
//     } else {
//         navbar.classList.remove("fixed-nav");
//     }
// });

//carusel-slider
$(document).ready(function () {
    let currentIndex = 0;
    let totalItems = $(".carousel-inner .item").length;

    function showSlide(index) {
        $(".carousel-inner .item").removeClass("active").eq(index).addClass("active");
        $(".carousel-indicators li").removeClass("active").eq(index).addClass("active");
    }

    $(".carousel-indicators li").each(function (index) {
        $(this).attr("data-slide", index);
    });

    $(".carousel-indicators li").click(function () {
        currentIndex = $(this).data("slide");
        showSlide(currentIndex);
    });
    setInterval(function () {
        currentIndex = (currentIndex + 1) % totalItems;
        showSlide(currentIndex);
    }, 3000);
    
    showSlide(0);
});

//monetization scroll
document.addEventListener("scroll", function () {
    let monMidCards = document.querySelector(".monetization .middle");
    let position = monMidCards.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    if (position < windowHeight - 50) {
        monMidCards.classList.add("show");
    }
});
 