// SIDEBAR - OPEN AND CLOSE

let menuOpenBtn = document.querySelector(".nav .bx-menu");

let closeOpenBtn = document.querySelector(".nav__menu .bx-x");

let navLinks = document.querySelector(".nav__menu");

menuOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left = "0";
});

closeOpenBtn.addEventListener("click", ()=>{
    navLinks.style.left = "-100%";
});

// SUBMENU - OPEN AND CLOSE

let oszkoleDropdown = document.querySelector(".oszkole-dropdown");
oszkoleDropdown.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-oszkole");
});

let dlauczniaDropdown = document.querySelector(".dlaucznia-dropdown");
dlauczniaDropdown.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-dlaucznia");
});

let dlarodzicaDropdown = document.querySelector(".dlarodzica-dropdown");  
dlarodzicaDropdown.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-dlarodzica");
});

let dlakandydataDropdown = document.querySelector(".dlakandydata-dropdown");  
dlakandydataDropdown.addEventListener("click", ()=>{
    navLinks.classList.toggle("show-dlakandydata");
});

