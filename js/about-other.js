const images = document.getElementsByTagName("img");
for (let image of images) {
  image.addEventListener("load", fadeImg);
  image.style.opacity = "0";
}

function fadeImg () {
    console.log("yolo");
  this.style.transition = "opacity 1s";
  this.style.opacity = "1";
}
//check if menu opened 
document.getElementById("menu-hamburger").addEventListener("click", toggleMenu);

function toggleMenu() {
    
    if (document.getElementById("menu-hamburger").checked == true) {
        document.getElementsByClassName("full-menu")[0].style.display = "block";
        setTimeout(()=>{
            document.getElementsByClassName("full-menu")[0].classList.add("menu-open");
        },20);
        
    }
    else {
        document.getElementsByClassName("full-menu")[0].classList.remove("menu-open");
        document.getElementsByClassName("full-menu")[0].style.display = "none";
    }
}