//menu open start//

const open = document.querySelector('.btnActive');
const close = document.querySelector('.exit');
const tl = gsap.timeline();

tl.to('.menu', {opacity:1, x:0, scale:1, pointerEvents: 'auto', duration:0.5})
tl.to('.stagger', {x:0, opacity:1, stagger:0.2}, "-=.5")
tl.pause();

open.addEventListener('click', () => {
    tl.play();
})

close.addEventListener('click', () => {
    tl.reverse();
})

//menu open end//

//close menu when clicking item start//



//close menu when clicking item end//

//sticky header start//

window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
      document.querySelector(".header").classList.add("sticky");
    }
    else{
      document.querySelector(".header").classList.remove("sticky");
    }
})

//sticky header end//

//hamburger menu start//

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navMenu");
const navLink = document.querySelectorAll(".navLink");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


//hamburger menu end//