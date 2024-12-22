let enCarrito = localStorage.getItem("productosEnCarrito");
enCarrito = JSON.parse(enCarrito);


const carritoVacio = document.querySelector("#emptyCarrito");
const carritoCargado = document.querySelector("#carritoCargado");
const carritoComprado = document.querySelector("#carritoComprado");
const carritoAcciones = document.querySelector("#carritoAcciones");
let botonesEliminar = document.querySelectorAll(".eliminarProd");
const btnVaciar = document.querySelector("#btnVaciar");

function cargarProductosenCarrito (){
    if (enCarrito && enCarrito.length > 0) {

        carritoVacio.classList.add("disabled");
        carritoCargado.classList.remove("disabled");
        carritoAcciones.classList.remove("disabled");
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
            });
    } else {    
        carritoVacio.classList.remove("disabled");
        carritoCargado.classList.add("disabled");
        carritoAcciones.classList.add("disabled");
        carritoComprado.classList.add("disabled");   
        }
    actualizarBtEliminar();
}

cargarProductosenCarrito ();

function actualizarBtEliminar(){
    botonesEliminar = document.querySelectorAll(".eliminarProd");
    botonesEliminar.forEach(btn =>{
        btn.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito (e){
    const idBtn = e.currentTarget.id;
    const index = enCarrito.findIndex(producto => producto.id === idBtn);
    enCarrito.splice(index, 1);
    console.log(enCarrito);
    cargarProductosenCarrito();

    localStorage.setItem("prodEnCarrito", JSON.stringify(enCarrito));
}

btnVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito (e){
    enCarrito.length = 0;
    localStorage.setItem("prodEnCarrito", JSON.stringify(enCarrito));
    cargarProductosenCarrito();
}
