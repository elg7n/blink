window.onscroll = function () {
    var header = document.querySelector(".navbar-field");
    var sticky = header.offsetTop;
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
AOS.init();

let counter=document.querySelector(".row .row");
let counter_Up=new counterUp(counter);
counter_Up.start();