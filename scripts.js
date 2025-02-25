document.addEventListener("DOMContentLoaded", function () {
    let mapa = document.querySelector(".imgtitulo");

    mapa.addEventListener("mouseover", function () {
        this.style.opacity = "0.7"; // Hace la imagen semi-transparente
        console.log("Estás explorando el mapa de El Salvador.");
    });

    mapa.addEventListener("mouseout", function () {
        this.style.opacity = "1"; // Vuelve a la opacidad normal
    });
});



document.addEventListener("DOMContentLoaded", function () {
    let destinos = document.querySelectorAll(".destino");

    destinos.forEach(function (destino) {
        destino.addEventListener("click", function () {
            let nombre = this.querySelector("h3").innerText;
            let descripcion = this.querySelector("p").innerText;
            alert(`Has seleccionado: ${nombre}\nDescripción: ${descripcion}`);
        });
    });
});
