

//Variables 

let carrito = [];

const selectBotines = document.getElementById("selectBotines");


const selectPelota = document.getElementById("selectPelota");


const tienda = document.querySelector("#tienda-futbol")

const carritoCompra = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#items");

const contenedorProductos = document.querySelector("#contenedor_productos");

const vaciarBtn = document.querySelector("#eliminar");

const total = document.querySelector("#total");



selectBotines.addEventListener("change", () => {
    selectBotines.value == "all" ? mostrarProductos(stockProductos) : mostrarProductos(stockProductos.filter(element => element.talle == selectBotines.value));
    //OPTIMIZADO
    // if (selectBotines.value=="all"){
    //    mostrarProductos(stockProductos);
    // }else{
    //     mostrarProductos(stockProductos.filter(element=>element.talle==selectBotines.value));
    // }
})
selectPelota.addEventListener("change", () => {
    if (selectPelota.value == "all") {
        mostrarProductos(stockProductos);
    } else {
        mostrarProductos(stockProductos.filter(element => element.talle == selectPelota.value));
    }
})







function agregarCarrito(id) {
    let encontrar = carrito.find(item => item.id == id)
    if (encontrar) {
        encontrar.cantidad = encontrar.cantidad + 1;
        document.getElementById(`und${encontrar.id}`).innerHTML = `
        
        <p id="und${encontrar.id}">  Und:${encontrar.cantidad} </p>
        `;
        actualizarCarrito();
    } else {
        let producto = stockProductos.find(element => element.id === id);
        producto.cantidad = 1;
        //  console.log(carrito.push(producto));
        //OPTIMIZADO
        let carr = [...carrito, producto];


        mostrarCarrito(producto);

        actualizarCarrito();
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function mostrarCarrito(producto) {

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>
                <img src="${producto.img}" width="60px">
            </td>
            <td>
               ${producto.nombre}
            </td>
            <td>
               $${producto.precio * producto.cantidad}
            </td>
            <td>
             <p id="und${producto.id}">  Und:${producto.cantidad} </p>
            </td>
        
            <td>
            <button type="button" class="btn btn-danger" id="eliminar${producto.id}">ELIMINAR</button>
         </td>
            
            `;
    contenedorCarrito.appendChild(row);

    let btnDelete = document.querySelector(`#eliminar${producto.id}`);
    btnDelete.addEventListener("click", () => {
        //Adicion Libreria
        Swal
            .fire({
                heigth: 600,

                showClass: {
                    popup: 'animate__animated animate__backInLeft'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutRightBig'
                },
                background: " url(/img/7.jpg)",
                position: 'center',
                title: "Desea...",
                text: "¿Eliminar?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar",
            })
            .then(resultado => {
                if (resultado.value) {
                    if (producto.cantidad == 1) {
                        btnDelete.parentElement.parentElement.remove();
                        carrito = carrito.filter(element => element.id != producto.id);
                        actualizarCarrito();
                        localStorage.setItem("carrito", JSON.stringify(carrito));

                    }
                    else {
                        producto.cantidad = producto.cantidad - 1;
                        document.getElementById(`und${producto.id}`).innerHTML = `
                        
                        <p id="und${producto.id}">  Und:${producto.cantidad} </p>
                        `;
                        actualizarCarrito();
                        localStorage.setItem("carrito", JSON.stringify(carrito));
                    }
                    console.log("*se elimina la venta*");
                } else {
                    // Dijeron que no
                    console.log("*NO se elimina la venta*");
                }
            });
        //     if(producto.cantidad==1){
        //     btnDelete.parentElement.parentElement.remove(); 
        //     carrito= carrito.filter(element =>element.id != producto.id );
        //     actualizarCarrito(); 
        //     localStorage.setItem("carrito",JSON.stringify(carrito));  

        // }
        //     else{
        //         producto.cantidad=producto.cantidad-1;
        //         document.getElementById(`und${producto.id}`).innerHTML=`

        //         <p id="und${producto.id}">  Und:${producto.cantidad} </p>
        //         `;
        //         actualizarCarrito(); 
        //         localStorage.setItem("carrito",JSON.stringify(carrito));
        //     }


    })

}


function actualizarCarrito() {

    total.innerText = carrito.reduce((acc, el) => acc + (el.precio * el.cantidad), 0);
}



function obtenerLocarStorage() {
    let obtener = JSON.parse(localStorage.getItem("carrito"));
    if (obtener) {
        obtener.forEach(element => {
            mostrarCarrito(element);
            carrito.push(element);
            actualizarCarrito();
        })
    }
}


obtenerLocarStorage();




mostrarHTML();

function mostrarHTML() {
    fetch("../Base/datos.json").then(respuesta => respuesta.json()).then(datos => {
        datos.forEach(element => {
            let div = document.createElement("div");
            // div.classList.add("contenedor_tienda_pelotas container_tienda");       
            div.innerHTML += `
                       
                        <div class="contenedor_tienda_producto card extra ancla container_pelota--penalty">
                           
                            <img src="${element.img}" alt="adidas" class="container_imgs">
                            <h3 id="penalty">${element.nombre}</h3>
                           
                            <h4>${element.precio}</h4>
                            <h5>TALLE:${element.talle}</h5>
                            <a id="agregar${element.id}" class="ancla" href="#"> <button class="boton ancla container_canchas_boton agregar"
                                    type="button" href="#" data-id="1">
                                    Comprar</button></a>
                            </p>
                        </div>
                        `;
            tienda.appendChild(div);
            let btnAdd = document.querySelector(`#agregar${element.id}`);
            btnAdd.addEventListener("click", () => {
                agregarCarrito(element.id);
                //Adicion libreria
                Swal.fire({
                    heigth: 600,

                    showClass: {
                        popup: 'animate__animated animate__backInLeft'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutRightBig'
                    },
                    background: " url(/img/7.jpg)",
                    position: 'center',
                    icon: 'success',
                    title: 'PRODUCTO AGREGADO CORRECTAMENTE',
                    showConfirmButton: false,
                    timer: 1500
                })

            })




        })
    })

}


























































