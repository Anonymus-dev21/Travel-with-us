let aside = document.querySelector(".aside")
let botonMenu= document.querySelector(".icono")
let containerGeneral = document.querySelector(".prueba")
let asideLinks= document.querySelectorAll(".indice__link")
let backgroundAside = document.querySelector(".general__container__info")

botonMenu.addEventListener("click", () => {
    aside.classList.toggle("aside__responsive")
    containerGeneral.classList.toggle("contenedor__responsive")
    backgroundAside.classList.toggle("background__aside")
    asideLinks.forEach((link) => {
        link.addEventListener("click", () => {
            aside.classList.remove("aside__responsive")
            containerGeneral.classList.remove("contenedor__responsive")
            backgroundAside.classList.remove("background__aside")
        })
    })
})