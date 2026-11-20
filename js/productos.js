
function agregarCarrito(id) {

    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    let productos = [
        {
            id: 1,
            nombre: "Alimento para perros",
            precio: 120
        },
        {
            id: 2,
            nombre: "Accesorios para mascotas",
            precio: 50
        },
        {
            id: 3,
            nombre: "Productos veterinarios",
            precio: 80
        }
    ];

    let producto = productos.find(p => p.id === id);

    let existente = carrito.find(p => p.id === id);

    if (existente) {
        existente.cantidad++;
    } else {
        carrito.push({
            ...producto,
            cantidad: 1
        });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto agregado al carrito.");
}
