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