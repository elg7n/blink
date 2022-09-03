window.onscroll = function () {
    
    var scrollUp = document.querySelector(".scroll-top");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        scrollUp.style.display = "flex";
    } else {
        scrollUp.style.display = "none";
    }
    scrollUp.addEventListener("click",function(){
        window.pageYOffset=0;
    })
};

// hamburger open/close
let navbarToggler = document.querySelector(".mobile-menu-btn");
navbarToggler.addEventListener('click', function () {
    navbarToggler.classList.toggle("active");
});