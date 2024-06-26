let aside = document.querySelector(".aside")
let botones = document.querySelectorAll(".icono")
let botonMenu = document.querySelector(".menu")
let containerGeneral = document.querySelector(".prueba")
let asideLinks = document.querySelectorAll(".indice__link")
let backgroundAside = document.querySelector(".general__container__info")
let x = document.querySelector(".x")
let menuAbierto = false;


botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        aside.classList.toggle("aside__responsive")
        containerGeneral.classList.toggle("contenedor__responsive")
        backgroundAside.classList.toggle("background__aside")

        if (menuAbierto) {
            x.style.display = "none";
            botonMenu.style.display = "block";
        } else {
            x.style.display = "block";
            x.style.borderRadius = "50px"
            botonMenu.style.display = "none";
        }

        menuAbierto = !menuAbierto;
    })
})
asideLinks.forEach((link) => {
    link.addEventListener("click", () => {
        aside.classList.remove("aside__responsive")
        containerGeneral.classList.remove("contenedor__responsive")
        backgroundAside.classList.remove("background__aside")
        menuAbierto= false;
        x.style.display = "none";
        botonMenu.style.display = "block";
    })
})
