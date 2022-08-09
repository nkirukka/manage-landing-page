const menu = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const slide = document.querySelector("#slide");


burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    // overlay.classList.toggle("active");
})
// slide.addEventListener("click", (e) => {
//     e.preventDefault();
//     return false
// })
