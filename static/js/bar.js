var open = document.getElementById('hamburger');
var changeIcon = true;


// navbar onclick
open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    // toggle class
    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    // toggle fontaweosme icon
    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});