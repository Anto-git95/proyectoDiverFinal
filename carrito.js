const enCarrito = JSON.parse(localStorage.getItem("productosEnCarrito"));

const carritoVacio = document.querySelector("#emptyCarrito");
const carritoCargado = document.querySelector("#carritoCargado");
const carritoComprado = document.querySelector("#carritoComprado")
const carritoAcciones = document.querySelector("#carritoAcciones")

if (enCarrito){

    carritoVacio.classList.add("disabled");
    carritoCargado.classList.remove("disbaled");
    carritoAcciones.classList.remove("disbaled");
    carritoComprado.classList.add("disabled");    

    carritoCargado.innerHTML = "";

    enCarrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("productosCarrito");
        div.innerHTML = `<div class="itemProducto">
                <img class="imgItem"src="${producto.imagen}" alt="">
                <div class="tituloProd">
                    <small>${producto.titulo}</small>
                    <h3>Aletas 1</h3>
                </div>
                <div class="cantidadProd">
                    <small>${producto.cantidad}</small>
                    <p>1</p>
                </div>
                <div class="precioProd">
                    <small>Precio</small>
                    <p>${producto.precio}</p>
                </div>
                <div class="subtotal">
                    <small>Subtotal</small>
                    <p> ${producto.precio * producto.cantidad}</p>
                </div>
                <button class="eliminarProd" id="${producto.id}" ><i class="bi bi-trash3"></i></button>
            </div>`;
            carritoCargado.append(div);

        })


} else {

    carritoVacio.classList.remove("disabled");

}
