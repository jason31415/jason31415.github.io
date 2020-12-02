
// Only use animations if browser is chrome

if (window.chrome !== null && typeof window.chrome !== "undefined") {
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


}


// Reveal all content if viewing on Safari

else {
    const faders = document.querySelectorAll('.fade');
    const sliders = document.querySelectorAll('.slide');
    faders.forEach(fader => {
        fader.classList.add('appear');
    });
    sliders.forEach(slider => {
        slider.classList.add('slide-in');
    });
}

    
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
};

