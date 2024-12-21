const productos = [
    {
        id: "regulador",
        titulo: "Regulador YB",
        imagen: "./imagenesDiver/reGulador2.png",
        precio: "3000"

    },
    {
        id: "mascSnorkel",
        titulo: "Luneta Snorkel 2 ",
        imagen: "./imagenesDiver/mascSnork.webp",
        precio: "3000"

    },
    {
        id: "aletas2",
        titulo: "Aletas 2",
        imagen: "./imagenesDiver/aletas2.png",
        precio: "3000"

    },
    {
        id: "neopreno1",
        titulo: "neopreo 1",
        imagen: "./imagenesDiver/traje1.webp",
        precio: "3000"


    },
    {
        id: "aletas3",
        titulo: "Aletas 3",
        imagen: "./imagenesDiver/aletas3.png",
        precio: "3000"


    },
    
    {
        id: "neopreno2",
        titulo: "neopreo 2",
        imagen: "./imagenesDiver/traje4.webp",
        precio: "3000"


    },
    {
        id: "traje3",
        titulo: "traje 3",
        imagen: "./imagenesDiver/traje3.webp",
        precio: "3000"
    },
    {
        id: "lunetaSnorkel",
        titulo: "Luneta y Snorkel",
        imagen: "./imagenesDiver/lunetaySNORK2.png",
        precio: "3000"

    },
    {
        id: "Snorkel",
        titulo: "Snorkel",
        imagen: "./imagenesDiver/snorkel.webp",
        precio: "3000"

    },
    {
        id: "luneta",
        titulo: "Luneta ",
        imagen: "./imagenesDiver/luneta.jpeg",
        precio: "3000"

    },

];

const contenedorProductos = document.querySelector("#contenedorProductos");
let botonesAgregar = document.querySelectorAll(".agregar");
const numerito = document.querySelector("#numerito");


function cargarProductos() {
    
    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top prodImg" alt="producto1">
                    <div class="card-body text-center prodDet">
                        <h5 class="card-title">${producto.titulo}</h5><hr>
                        <p class="card-text">Precio: $${producto.precio}</p>
                        <a href="#" class="btn btn-primary agregar" id="${producto.id}">Agregar al carrito</a>
                    </div>` ;
        contenedorProductos.append(div);
    })
    actualizarBtAgregar();
    //console.log(botonesAgregar);

}
cargarProductos(productos);

function actualizarBtAgregar(){
    botonesAgregar = document.querySelectorAll(".agregar");
    botonesAgregar.forEach(boton =>{
        boton.addEventListener("click", agregarAlCarrito);
    });

}

let productosEnCarrito;

const enCarritoLS = JSON.parse(localStorage.getItem("productosEnCarrito"));
if(enCarritoLS){
    productosEnCarrito = enCarritoLS;
    actualizarNro();
    
} else{
    productosEnCarrito = [];
}


function agregarAlCarrito(e){
    const btnProdId = e.currentTarget.id;
    //console.log(btnProdId);
    const productoAgregado = productos.find(producto => producto.id === btnProdId);
        //console.log(productoAgregado);

    if(productosEnCarrito.some(producto => producto.id == btnProdId)){
        const index = productosEnCarrito.findIndex(producto => producto.id == btnProdId);
        productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNro();

    localStorage.setItem("productosEnCarrito", JSON.stringify(productosEnCarrito));
}

function actualizarNro(){
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
