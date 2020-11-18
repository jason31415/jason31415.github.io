
// fade in images after they load

// unable to check background image loadtime for now, implement later on
/*
const images = document.getElementsByClassName("other-test-thumb");
for (let image of images) {
  image.addEventListener("load", fadeImg);
  image.style.opacity = "0";
    console.log("lmao");
}

function fadeImg () {
    console.log("yolo");
    this.style.transition = "opacity 1s";
    this.style.opacity = "1";
}
*/

// reveal project when hovering over title

Array.from(document.getElementsByClassName("other-test-entry")).forEach((entry) => {
    Array.from(entry.getElementsByClassName("other-test-proj")).forEach((entry_proj_item) => {
        entry_proj_item.addEventListener("mouseover", () => {
            let str1 = "#";
            let str2 = entry_proj_item.id.concat("-img");
            entry.querySelector(str1.concat(str2)).classList.add("other-img-fade");
            let str3 = "div.other-test-container:not\(#";
            entry.querySelectorAll(str3.concat(str2, "\)")).forEach((entry_img)=> {
                entry_img.classList.remove("other-img-fade");
            });
        })
    }) 
});
    


//resize logo on scroll
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
    document.getElementById("logo-wrap").classList.add('logo-shrink');
  } else {
    document.getElementById("logo-wrap").classList.remove('logo-shrink');
  }
}