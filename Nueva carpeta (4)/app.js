//Variables 

let carrito = [];

const selectBotines=document.getElementById("selectBotines");


const selectPelota=document.getElementById("selectPelota");


const tienda = document.querySelector("#tienda-futbol")

const carritoCompra = document.querySelector("#carrito");

const contenedorCarrito = document.querySelector("#items");

const contenedorProductos = document.querySelector("#contenedor_productos");

const vaciarBtn = document.querySelector("#eliminar");

const total= document.querySelector("#total");



selectBotines.addEventListener("change",()=>{
    if (selectBotines.value=="all"){
       mostrarProductos(stockProductos);
    }else{
        mostrarProductos(stockProductos.filter(element=>element.talle==selectBotines.value));
    }
})
selectPelota.addEventListener("change",()=>{
    if (selectPelota.value=="all"){
       mostrarProductos(stockProductos);
    }else{
        mostrarProductos(stockProductos.filter(element=>element.talle==selectPelota.value));
    }
})



mostrarProductos(stockProductos);
function mostrarProductos(array){
     
                //  contenedorProductos.innerHTML="";
    
    
      array.forEach(element => {
        
        let div = document.createElement("div");
        // div.classList.add("contenedor_tienda_pelotas container_tienda");       
        div.innerHTML += `
               
                <div class="contenedor_tienda_producto card extra ancla container_pelota--penalty">
                    <h3 id="penalty">${element.nombre}</h3>
                    <img src="${element.img}" alt="adidas" class="container_imgs">
                    <h4>${element.precio}</h4>
                    <h5>TALLE:${element.talle}</h5>
                    <a id="agregar${element.id}" class="ancla" href="#"> <button class="boton ancla container_canchas_boton agregar"
                            type="button" href="#" data-id="1">
                            Comprar</button></a>
                    </p>
                </div>
                `;
                tienda.appendChild(div);
            
        let btnAdd=document.querySelector(`#agregar${element.id}`);
     btnAdd.addEventListener("click",()=>{
         agregarCarrito(element.id);
     })
            
            });
} 



function agregarCarrito(id){
    let encontrar = carrito.find(item => item.id==id)
    if(encontrar){
        encontrar.cantidad=encontrar.cantidad+1;
        document.getElementById(`und${encontrar.id}`).innerHTML=`
        
        <p id="und${encontrar.id}">  Und:${encontrar.cantidad} </p>
        `;
        actualizarCarrito(); 
    }else{
        let producto = stockProductos.find(element => element.id === id);
        producto.cantidad=1;
     carrito.push(producto);
     mostrarCarrito(producto);    
     actualizarCarrito();  
    }
   localStorage.setItem("carrito",JSON.stringify(carrito));
}

function mostrarCarrito(producto){
   
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

    let btnDelete   =document.querySelector(`#eliminar${producto.id}`);
    btnDelete.addEventListener("click",()=>{
      if(producto.cantidad==1){
        btnDelete.parentElement.parentElement.remove(); 
        carrito= carrito.filter(element =>element.id != producto.id );
        actualizarCarrito(); 
        localStorage.setItem("carrito",JSON.stringify(carrito));  
    }
        else{
            producto.cantidad=producto.cantidad-1;
            document.getElementById(`und${producto.id}`).innerHTML=`
            
            <p id="und${producto.id}">  Und:${producto.cantidad} </p>
            `;
            actualizarCarrito(); 
            localStorage.setItem("carrito",JSON.stringify(carrito));
        }
          
    })
}
    

function actualizarCarrito(){

    total.innerText=carrito.reduce((acc,el)=>acc+(el.precio*el.cantidad),0);
}



function obtenerLocarStorage(){
let obtener =JSON.parse(localStorage.getItem("carrito"));
if (obtener){
    obtener.forEach(element=>{
    mostrarCarrito(element);
    carrito.push(el);
   actualizarCarrito();
    })
}
}


obtenerLocarStorage();
































































// eventos();
// function eventos() {
//     contenedorProductos.addEventListener("click", agregarProducto);
//     carritoCompra.addEventListener("click", eliminarProducto);
// }
// //Funciones

// function agregarProducto(e) {
//     if (e.target.classList.contains("agregar")) {
//         const productoSeleccionado = e.target.parentElement.parentElement;
//         datosProducto(productoSeleccionado);
//         // console.log("Desde el boton");
//         console.log(productoSeleccionado);
//     }
// }

// function datosProducto(productoSeleccionado) {

//     const producto = {

//         img: productoSeleccionado.querySelector("img").src,
//         nombre: productoSeleccionado.querySelector("h3").textContent,
//         precio: productoSeleccionado.querySelector("h4").textContent,
//         id: productoSeleccionado.querySelector("button").getAttribute("data-id"),
//         cantidad: 1


//     }

//     const encontrarProducto = carrito.some(productoSeleccionado => productoSeleccionado.id === producto.id);
//     console.log(encontrarProducto);
//     if (encontrarProducto) {
//         const productosMap = carrito.map(productoSeleccionado => {
//             if (productoSeleccionado.id === producto.id) {
//                 productoSeleccionado.cantidad++;
//                 return productoSeleccionado;
//             } else {
//                 return productoSeleccionado;
//             }
//         })
//     } else {
//         limpiar();
//         carrito.push(producto);
//     }


//     agregarCarrito();
// }

// function agregarCarrito() {
//     limpiar();
//     carrito.forEach(productoSeleccionado => {
//         const row = document.createElement("tr");
//         row.innerHTML = `
//         <td>
//             <img src="${productoSeleccionado.img}" width="60px">
//         </td>
//         <td>
//            ${productoSeleccionado.nombre}
//         </td>
//         <td>
//            ${productoSeleccionado.precio}
//         </td>
//         <td>
//            ${productoSeleccionado.cantidad}
//         </td>
    
//         <td>
//         <button type="button" class="btn btn-danger" data-id="${productoSeleccionado.id}">ELIMINAR</button>
//      </td>
        
//         `;
//         contenedorCarrito.appendChild(row);
//     });

// }

// function eliminarProducto(e, productoSeleccionado) {

//     if (e.target.contains(`data-id="${productoSeleccionado.id}"`)) {
//         const productoEliminar = e.target.getAttribute("data-id");
//         carrito = carrito.filter(productoSeleccionado => productoSeleccionado.id !== productoEliminar);

//         agregarCarrito();
//     } else if (productoSeleccionado.cantidad > 1) {
//         productoSeleccionado.cantidad = - 1;
//         agregarCarrito();
//     }

// }

// function limpiar() {
//     while (contenedorCarrito.firstChild) {
//         contenedorCarrito.removeChild(contenedorCarrito.firstChild);
//     }
// }