// navbar slider function
function navSlide() {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navLinks = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', function () {
        nav.classList.toggle('nav-active');
        navLinks.forEach(function (link, index) {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = "navLinkFade 0.5s ease forwards ".concat(index / 7 + 0.5, "s");
            }
        });
        burger.classList.toggle('toggle');
    });
}
navSlide();
