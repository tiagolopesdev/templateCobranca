let show = true;

const menuSection = document.querySelector(".menuSection");
const menuToggle =  menuSection.querySelector(".menuToggle");
const bottons = document.querySelector(".bottons");

menuToggle.addEventListener("click", () => { 
    document.body.style.overflow = show ? "hidden" : "initial";
    menuSection.classList.toggle("on", show);
    show = !show;
})