function toggleMenu() {
    //targeting these two elements
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")

    //when we click it it adds or removes the open class
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}