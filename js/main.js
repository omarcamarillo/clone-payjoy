//Declaración de variables
const menu = document.getElementById("menu");
const burger = document.getElementById("menu-btn");
burger.addEventListener("click", () =>{
    burger.classList.toggle("icon__menu-active")
    menu.classList.toggle("menu_active")
})