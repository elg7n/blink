
// on load
window.onload = function () {
    window.setTimeout(load, 500);
}

function load() {
    document.querySelector('.loader-wrapper').style.opacity = '0';
    document.querySelector('.loader-wrapper').style.display = 'none';
}

window.onscroll = function () {
    var header = document.querySelector(".navbar-field");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    var scrollUp = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollUp.style.display = "flex";
    } else {
        scrollUp.style.display = "none";
    }
    scrollUp.addEventListener("click", function () {
        window.pageYOffset = 0;
    })
};

AOS.init();

let counter = document.querySelector(".row .row");
let counter_Up = new counterUp(counter);
counter_Up.start();
counter_Up.update();

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items: 2,
    responsive: {
        600: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }
});
// hamburger open/close
let navbarToggler = document.querySelector(".mobile-menu-btn");
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
});


//  up/down arrow for hamburger dropdown
let transforms=document.querySelectorAll("a.dd-menu");

transforms.forEach(transform => {
    transform.addEventListener("click",function(){
        
        if(!transform.classList.contains("collapsed")){

            transform.style.setProperty('--transform','180deg')
        }
        if(transform.classList.contains("collapsed")){
            transform.style.setProperty('--transform','0deg')
        }
        
    })
});