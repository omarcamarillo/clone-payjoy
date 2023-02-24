//Declaración de variables
const menu = document.getElementById("menu");
const burger = document.getElementById("menu-btn");
burger.addEventListener("click", () =>{
    burger.classList.toggle("icon__menu-active")
    menu.classList.toggle("menu_active")
})
//Header efect
window.onscroll = function(){
    scroll = document.documentElement.scrollTop
    header = document.getElementById("header")
    if(scroll > 20){
        header.classList.add("header_mod")
    }else if(scroll < 20){
        header.classList.remove("header_mod")
    }
}