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

function cargarProductos(){

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML = `<img src="${producto.imagen}" class="card-img-top prodImg" alt="producto1">
                    <div class="card-body text-center prodDet">
                        <h5 class="card-title">${producto.titulo}</h5>
                        <p class="card-text">${producto.precio}</p>
                        <a href="#" class="btn btn-primary agregar" id="${producto.id}">Agregar al carrito</a>
                    </div>` ;

        contenedorProductos.append(div);
    })
}

cargarProductos();


