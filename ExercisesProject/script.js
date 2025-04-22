/*function mostrarCorreo(){

    // Obtén el valor del input
    const correo = document.getElementById("Correo").value;

    // Muestra el valor en el output
    const output = document.getElementById("confirmacion");
    confirmacion.textContent = correo;

};
*/

function mostrarCorreo() {
    const correo = document.getElementById("correo").value;
    const output = document.getElementById("confirmacion");

    // Expresión regular para validar el correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(correo)) {
        output.textContent = "El correo es válido: " + correo;
        output.style.color = "green";
        output.style.backgroundColor = "lightgreen";
        output.style.border = "2px solid green";
    } else {
        output.textContent = "El correo no es válido";
        output.style.color = "red";
        output.style.backgroundColor = "lightyellow";
        output.style.border = "2px solid red";
    }

    document.getElementById("correo").value = "";
};


function cambiarFondo() {
    const icono = document.getElementById("BotonTema");

    // Alterna el color de fondo
    if (document.body.style.background === "grey") {
        document.body.style.background = "linear-gradient(to right, lightblue, pink)";
    } else {
        document.body.style.background = "grey";
    }

    // Alterna entre los íconos
    if (icono.classList.contains("fa-toggle-on")) {
        icono.classList.remove("fa-toggle-on");
        icono.classList.add("fa-toggle-off");
    } else {
        icono.classList.remove("fa-toggle-off");
        icono.classList.add("fa-toggle-on");
    }
}
