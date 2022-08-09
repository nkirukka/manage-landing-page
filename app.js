const menu = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    menu.classList.toggle("active");
})
