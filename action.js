let aside = document.querySelector(".aside")
let botones = document.querySelectorAll(".icono")
let botonMenu = document.querySelector(".menu")
let asideLinks = document.querySelectorAll(".indice__link")
let x = document.querySelector(".x")
let menuAbierto = false;


botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        aside.classList.toggle("aside__responsive")

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
        menuAbierto= false;
        x.style.display = "none";
        botonMenu.style.display = "block";
    })
})
