/* changing the scroll bar while scrolling   */

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

/*    // script for nav menu  */

const menu = document.querySelector(".nav_menu");
const menuBtn = document.querySelector("#menu-btn");
const closebar = document.querySelector("#close-btn");


menuBtn.addEventListener('click', () => {
    // console.log("clicked")
    menu.style.display = "flex";
    closebar.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//  close bar menu

closebar.addEventListener('click', () => {
    menu.style.display = "none";
    closebar.style.display = "none";
    menuBtn.style.display = "inline-block";

   
})