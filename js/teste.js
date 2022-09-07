let showOptions = true;

const menuSection = document.querySelector(".menuSection");
const menuToggle =  menuSection.querySelector(".menuToggle");
const bottons = document.querySelector(".bottons");

menuToggle.addEventListener("click", () => { 
    document.body.style.overflow = showOptions ? "hidden" : "initial";
    menuSection.classList.toggle("on", showOptions);
    showOptions = !showOptions;
})

let showSearch = true;

const searchNav = document.querySelector(".searchNav");
const boxSearch = document.querySelector(".boxSearch");
const nameApplication = document.querySelector(".nameApplication");

boxSearch.addEventListener("click", () => {
    //document.body.style.overflow = showSearch ? "hidden" : initial;
    console.log("Click");
    searchNav.classList.toggle("on", showSearch);
    nameApplication.classList.toggle("off", showSearch);
    //showSearch = !showSearch;
})
