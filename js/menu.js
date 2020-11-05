//check if menu opened 
document.getElementById("menu-hamburger").addEventListener("click", toggleMenu);

function toggleMenu() {
    
    if (document.getElementById("menu-hamburger").checked == true) {
        document.getElementsByClassName("full-menu")[0].style.display = "block";
        setTimeout(()=>{
            document.getElementsByClassName("full-menu")[0].classList.add("menu-open");
        },20);
        document.body.style.overflowY = "hidden";
    }
    else {
        
        document.getElementsByClassName("full-menu")[0].classList.remove("menu-open");
        document.getElementsByClassName("full-menu")[0].style.display = "none";
        document.body.style.overflowY = "auto";
    }
}
    
        //document.querySelector((this.getAttribute).concat("-img-", this.indexOf)).style.display = "block"});




