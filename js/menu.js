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


    
        //document.querySelector((this.getAttribute).concat("-img-", this.indexOf)).style.display = "block"});



//resize logo on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("logo-wrap").classList.add('logo-shrink');
  } else {
    document.getElementById("logo-wrap").classList.remove('logo-shrink');
  }
}
