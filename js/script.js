// Credits to Matt Boldt for typed.js 
// https://github.com/mattboldt/typed.js

var project_thumbs = document.getElementsByClassName('project-thumb');
var project_titles = document.getElementsByClassName('project-title');
var curr_project = 0;
var gal_left_btn = document.getElementById('gal-left');
var gal_right_btn = document.getElementById('gal-right');

gal_left_btn.addEventListener("click", galLeft);
gal_right_btn.addEventListener("click", galRight);

// project tags
var typed_arr = ['speculative design | installation', 
                 'R&#38;D | hardware prototype', 
                 'user research | hardware prototype',
                 'architecture',
                 'hardware prototype | robotics',
                 'R&#38;D | hardware prototype'];


var typed = new Typed('#project-tags', {
        strings: [typed_arr[curr_project]],
        typeSpeed: 20,
        backSpeed: 0,
        showCursor: false,
        loop: false,
});

// show first project 
project_thumbs[curr_project].classList.add('project-fade');
project_titles[curr_project].classList.add('title-fade');




//key pressed state
var pressed = false;

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
        if (!pressed) {
            galLeft();
            pressed = true;
            setTimeout(() => {
                pressed = false;
            }, 800);
        }
    }
    else if (e.keyCode == '39') {
       // right arrow
        if (!pressed) {
            galRight();
            pressed = true;
            setTimeout(() => {
                pressed = false;
            }, 800);
        }
    }

}

// move to left project
function galLeft () {
    
    disableButton();
    
    // hide previous project
    setTimeout(() => {
        project_thumbs[curr_project].classList.remove('project-fade');
        project_titles[curr_project].classList.remove('title-fade');
    }, 0);
    
        setTimeout(() => {
            if (curr_project == 0) {
            curr_project = project_thumbs.length - 1;
            } else {
                curr_project -= 1;
            }

            // destroys existing type obj and updates
            typed.destroy();
            typed = new Typed('#project-tags', {
                strings: [typed_arr[curr_project]],
                typeSpeed: 30,
                backSpeed: 0,
                showCursor: false,
                loop: false,
            });

            project_thumbs[curr_project].classList.add('project-fade');
            project_titles[curr_project].classList.add('title-fade');

        }, 200);    
    
    
    
}


    
// move to left project
function galRight () {
    
    disableButton();
    
    // hide previous project
    setTimeout(() => {
        project_thumbs[curr_project].classList.remove('project-fade');
        project_titles[curr_project].classList.remove('title-fade');
    }, 0);
    
    setTimeout(() => {
        if (curr_project == project_thumbs.length - 1) {
        curr_project = 0;
        } else {
            curr_project += 1;
        }
        
        // destroys existing type obj and updates
        typed.destroy();
        typed = new Typed('#project-tags', {
            strings: [typed_arr[curr_project]],
            typeSpeed: 30,
            backSpeed: 0,
            showCursor: false,
            loop: false,
        });
        
        project_thumbs[curr_project].classList.add('project-fade');
        project_titles[curr_project].classList.add('title-fade');
    }, 200);
}


//disables buttons for 1s and reenables
function disableButton () {
    gal_left_btn.removeEventListener("click", galLeft);
    gal_right_btn.removeEventListener("click", galRight);
    
    setTimeout(() => {
        gal_left_btn.addEventListener("click", galLeft);
        gal_right_btn.addEventListener("click", galRight);
    }, 800);
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