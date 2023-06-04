// SIDEBAR - OPEN AND CLOSE

let menuOpenBtn = document.querySelector(".navbar .bx-menu");

let closeOpenBtn = document.querySelector(".nav-links .bx-x");

let navLinks = document.querySelector(".nav-links");

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left = "-100%";
});

// SUBMENU - OPEN AND CLOSE

let oszkoleArrow = document.querySelector(".oszkole-arrow");
oszkoleArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-oszkole");
});

let dlauczniaArrow = document.querySelector(".dlaucznia-arrow");
dlauczniaArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-dlaucznia");
});

let dlarodzicaArrow = document.querySelector(".dlarodzica-arrow");  
dlarodzicaArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-dlarodzica");
});

let dlakandydataArrow = document.querySelector(".dlakandydata-arrow");  
dlakandydataArrow.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-dlakandydata");
});

