let show = true;

const menuSection = document.querySelector(".menuSection");
const menuToggle =  menuSection.querySelector(".menuToggle");

menuToggle.addEventListener("click", () => {    
    menuSection.classList.toggle("on", show);
    show = !show;
})