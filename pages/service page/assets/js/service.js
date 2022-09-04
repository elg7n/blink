// on load
window.onload = function () {
    window.setTimeout(load, 500);
}

function load() {
    document.querySelector('.loader-wrapper').style.opacity = '0';
    document.querySelector('.loader-wrapper').style.display = 'none';
}
// ----
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
AOS.init();

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

