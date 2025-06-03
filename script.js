
// Burger Menu 
const burgerOpen = document.getElementById("burger");
const headerOpen =document.querySelector(".section-header");

    burgerOpen.addEventListener("click",() => {
        headerOpen.classList.toggle("open");
    })

// Scroll animations
const homePage = document.querySelector(".container-general");
const imgFirst = document.querySelector(".hero-img2");
const advanteg = document.querySelector(".advanteg");

 

// Scroll header fixed
const scrollFixed = () => {

   let centerY = window.scrollY;
   let firstSect = homePage.offsetHeight / 10 ;

    if (centerY >= firstSect ) {
        headerOpen.classList.add("fixed");
    }
    else {
        headerOpen.classList.remove("fixed");
    }

}

window.addEventListener("scroll", () => {
scrollFixed();
})

const sideBar = document.querySelector(".portfolio");
let barOpen = document.querySelector('.aside-bar');


sideBar.addEventListener('click', () => {
    barOpen.classList.toggle("side-open");
})
