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