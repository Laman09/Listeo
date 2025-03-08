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

// window.onload = () => {
//     const headings = document.querySelectorAll('h1');

//     setTimeout(() => {
//       headings[0].classList.add('show');
//     }, 1000);
  
//     setTimeout(() => {
//       headings[1].classList.add('show');
//     }, 2500);
  
//     setTimeout(() => {
//       headings[2].classList.add('show');
//     }, 4000);
// };