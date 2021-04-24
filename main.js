// Carousel
let activeSlide = 0;
let switchInterval = setInterval(changeSlideAuto, 5000);

let slides = document.getElementsByClassName("slide");
let indicators = document.getElementsByClassName("fa-circle");
let employees = document.getElementsByClassName("carousel-employee");

function selectSlide(selectedSlideIndex) {
    for (let i = 0; i < slides.length; i++) {
        if (slides[i].className == "slide active") {
            activeSlide = i;
        }
    }

    removeSlide(activeSlide);
    showSlide(selectedSlideIndex);

    clearInterval(switchInterval);
    switchInterval = setInterval(changeSlideAuto, 5000);
    
    return activeSlide = selectedSlideIndex;
}

function showSlide(i) { 
    slides[i].classList.add("active");
    employees[i].classList.add("active");
    indicators[i].className = "fas fa-circle";
}

function removeSlide(i) {
    slides[i].classList.remove("active");
    employees[i].classList.remove("active");
    indicators[i].className = "far fa-circle";
}

function changeSlideAuto() {
    removeSlide(activeSlide);
    if (activeSlide == slides.length - 1) {
        activeSlide = 0;
    } else {
        activeSlide++;
    }
    showSlide(activeSlide);
}


// Navigation menu

let expandMenuIndicator = true;
let scrollPixels = 250;
if (window.matchMedia("(max-width: 700px)").matches) {
    scrollPixels = 50;
}

window.onscroll = function () {
    if (expandMenuIndicator) {
        expandMenu();
    }
    if (document.body.scrollTop > scrollPixels || document.documentElement.scrollTop > scrollPixels) {
        addBackgroundColor();
    } else {
        removeBackgroundColor();
    }
};

function addBackgroundColor() {
    document.getElementsByTagName("header")[0].style.backgroundColor = "#2a2a2a";
    document.getElementsByTagName("header")[0].style.boxShadow = "0 2px 4px 0 rgba(0,0,0,0.25)";
}

function removeBackgroundColor() {
    document.getElementsByTagName("header")[0].style.backgroundColor = "";
    document.getElementsByTagName("header")[0].style.boxShadow = "";
}

// Responsive menu

function expandMenu() {
    if (document.getElementsByTagName("nav")[0].className === "") {
        document.getElementsByTagName("nav")[0].classList.add("responsive");
        addBackgroundColor();
        return expandMenuIndicator = true;
    } else {
        document.getElementsByTagName("nav")[0].classList.remove("responsive");
        if (window.scrollY < scrollPixels) {
            removeBackgroundColor();
        }
        return expandMenuIndicator = false;
    }
}