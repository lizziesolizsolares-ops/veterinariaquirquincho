
document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    alert(
        "Mensaje registrado correctamente.\n" +
        "Nombre: " + nombre + "\n" +
        "Teléfono: " + telefono + "\n" +
        "Correo: " + correo + "\n" +
        "Consulta: " + mensaje
    );

    this.reset();
});
