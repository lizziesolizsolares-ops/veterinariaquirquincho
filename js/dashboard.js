
document.addEventListener("DOMContentLoaded", function() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let totalProductos = 3;

    let totalCarrito = carrito.reduce(
        (suma, producto) => suma + producto.cantidad,
        0
    );

    document.getElementById("totalProductos").textContent =
        totalProductos;

    document.getElementById("totalCarrito").textContent =
        totalCarrito;

});
