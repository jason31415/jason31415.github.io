
const appearOptions = {
    threshhold: 1,
    rootMargin: "0px 0px -250px 0px"
};

const faders = document.querySelectorAll('.fade');
const sliders = document.querySelectorAll('.slide');

const appearOnScroll = new IntersectionObserver (
    function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

const slideOnScroll = new IntersectionObserver (
    function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('slide-in');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

sliders.forEach(slider => {
    slideOnScroll.observe(slider);
});


window.onload = () => {
    document.getElementsByClassName('project-page-thumb')[0].classList.add('thumb-transition');
    document.getElementsByClassName('project-page-description')[0].classList.add('description-grow');
};

//resize logo on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("logo-wrap").classList.add('logo-shrink');
  } else {
    document.getElementById("logo-wrap").classList.remove('logo-shrink');
  }
}

//check if menu opened 

var menu_hamburger = document.getElementById("menu-hamburger");
var menu_full = document.getElementsByClassName("full-menu");


function toggleMenu() {
    
    if (menu_hamburger.checked == true) {
        menu_full[0].style.display = "block";
        setTimeout(()=>{
            menu_full[0].classList.add("menu-open");
        },20);
        document.body.style.overflowY = "hidden";
    }
    else {
        
        menu_full[0].classList.remove("menu-open");
        menu_full[0].style.display = "none";
        document.body.style.overflowY = "auto";
    }
}


//test if menu is loaded
if (menu_hamburger) {
    menu_hamburger.addEventListener("click", toggleMenu);
}
