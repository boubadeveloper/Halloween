'use strict';
// preloader
const preloader = document.querySelector("[data-preloader]");
window.addEventListener("load",function ()
{
    preloader.classList.add("loaded");
})


// mobile navbar


const[navToggler, navbar] = [
    document.querySelector("[data-nav-toggler]"),
    document.querySelector("[data-navbar]")
];

const toggleNav = function ()
{
    navbar.classList.toggle("active");
    this.classList.toggle("active");
}
navToggler.addEventListener("click", toggleNav)