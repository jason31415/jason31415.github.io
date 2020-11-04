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
    
    
        //document.querySelector((this.getAttribute).concat("-img-", this.indexOf)).style.display = "block"});




