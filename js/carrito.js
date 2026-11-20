
function mostrarCarrito() {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let contenido = document.getElementById("contenido-carrito");
    let total = 0;

    if (carrito.length === 0) {
        contenido.innerHTML = "<p>Tu carrito está vacío.</p>";
        document.getElementById("total").textContent = "Total: Bs. 0";
        return;
    }

    contenido.innerHTML = "";

    carrito.forEach(producto => {

        let subtotal = producto.precio * producto.cantidad;
        total += subtotal;

        contenido.innerHTML += `
            <div class="carrito-item">
                <div>
                    <h3>${producto.nombre}</h3>
                    <p>Precio: Bs. ${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <p>Subtotal: Bs. ${subtotal}</p>
                </div>
            </div>
        `;
    });

    document.getElementById("total").textContent =
        "Total: Bs. " + total;
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", mostrarCarrito);
