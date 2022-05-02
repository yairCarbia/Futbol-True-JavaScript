//Variables GLOBALES
const contenido = document.querySelector("#contenido");

const nombre = document.querySelector("#nombre");

const telefono = document.querySelector("#telefono");

const canchas = document.querySelector("#cancha");

const fecha = document.querySelector("#fecha");

const hora = document.querySelector("#hora");

const aclaciones = document.querySelector("#aclaracion");

const formulario = document.querySelector("#formulario");

const contenedorTurnos = document.querySelector("#turnos");

let editar;
//OBJ
const turnoObj = {
    name: "",
    tel: "",
    cancha: "",
    dia: "",
    tiempo: "",
    aclaracion: ""

}
//Clases
class Turnos {
    constructor() {
        this.turnoObj = [];
    }
    agregarTurno(turnos) {
        this.turnoObj = [...this.turnoObj, turnos];

    }
    eliminarTurno(id) {
        this.turnoObj = this.turnoObj.filter(turno => turno.id !== id);
    }
    editarTurno(turnoActualizado) {
        this.turnoObj = this.turnoObj.map(turnos => turnos.id === turnoActualizado.id ? turnoActualizado : turnos);
    }
}
class Pantalla {
    alerta(mensaje, tipo) {
        const alerta = document.createElement("div");
        alerta.classList.add("text-center", "alert", "d-block", "col-12", "mt-5", "fs-1")
        if (tipo === "error") {
            alerta.classList.add("alert-danger");
        } else {
            alerta.classList.add("alert-success");
        }
        alerta.textContent = mensaje;

        formulario.appendChild(alerta);


        setTimeout(() => {
            alerta.remove();

        }, 3000)


    }
    mostarTurno({ turnoObj }) {

        this.limpiar();
        turnoObj.forEach(turnoObj => {

            const { name, tel, cancha, dia, tiempo, aclaracion, id } = turnoObj;
            const divTurnos = document.createElement("div");

            divTurnos.classList.add("p-3");




            const nombreH2 = document.createElement("h2");
            nombreH2.classList.add("card-title", "font-weigth-bolder", "fs-1");
            nombreH2.innerHTML = `
            <span class="font-weight-bolder"> Nombre: <span>${name} `;

            const telefonoP = document.createElement("p");
            telefonoP.classList.add("card-title", "font-weigth-bolder");
            telefonoP.innerHTML = `
            <span class="font-weight-bolder"> Telefono: <span>${tel} `;

            const canchaP = document.createElement("p");
            canchaP.classList.add("card-title", "font-weigth-bolder");
            canchaP.innerHTML = `
            <span class="font-weight-bolder"> Cancha nº <span>${cancha} `;

            const diaP = document.createElement("p");
            diaP.classList.add("card-title", "font-weigth-bolder");
            diaP.innerHTML = `
            <span class="font-weight-bolder"> Dia: <span>${dia} `;

            const tiempoP = document.createElement("p");
            tiempoP.classList.add("card-title", "font-weigth-bolder");
            tiempoP.innerHTML = `
            <span class="font-weight-bolder"> Tiempo: <span>${tiempo} `;

            const aclaracionP = document.createElement("p");
            aclaracionP.classList.add("card-title", "font-weigth-bolder");
            aclaracionP.innerHTML = `
            <span class="font-weight-bolder"> Aclaraciones: <span>${aclaracion} `;
            const btnEliminar = document.createElement("button");
            btnEliminar.classList.add("btn", "btn-outline-danger", "mr-2", "btn-lg", "gap-2");
            btnEliminar.innerHTML = `ELIMINAR <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>`;


            btnEliminar.onclick = () => eliminarTurno(id);




            const btnEditar = document.createElement("button");
            btnEditar.classList.add("btn", "btn-outline-primary", "mr-2", "btn-lg", "gap-2");
            btnEditar.innerHTML = `EDITAR <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>`;

            btnEditar.onclick = () => editarTurno(turnoObj);


            divTurnos.appendChild(nombreH2);
            divTurnos.appendChild(telefonoP);
            divTurnos.appendChild(canchaP);
            divTurnos.appendChild(diaP);
            divTurnos.appendChild(tiempoP);
            divTurnos.appendChild(aclaracionP);
            divTurnos.appendChild(btnEliminar);
            divTurnos.appendChild(btnEditar);
            contenedorTurnos.appendChild(divTurnos);

        });

    }
    limpiar() {
        while (contenedorTurnos.firstChild) {
            contenedorTurnos.removeChild(contenedorTurnos.firstChild)
        }
    }
}
const administrador = new Turnos();
const pantalla = new Pantalla();

//Eventos
eventos();
function eventos() {

    nombre.addEventListener("change", datosTurno);
    telefono.addEventListener("change", datosTurno);
    canchas.addEventListener("change", datosTurno);
    fecha.addEventListener("change", datosTurno);
    hora.addEventListener("change", datosTurno);
    aclaciones.addEventListener("change", datosTurno);
    formulario.addEventListener("submit", nuevoTurno);
}


//Funciones

function datosTurno(e) {
    turnoObj[e.target.name] = e.target.value;
    // console.log(turno);
}

function nuevoTurno(e) {

    e.preventDefault();
    const { name, tel, cancha, dia, tiempo, aclaracion } = turnoObj;
    if (name === "" || tel === "" || cancha === "" || dia === "" || tiempo === "" || aclaracion === "") {
        pantalla.alerta("TODOS LOS CAMPOS SON OBLIGATORIOS", "error");

    } else {
        administrador.agregarTurno({ ...turnoObj });
        pantalla.mostarTurno(administrador);


    }
    turnoObj.id = Date.now();
    // administrador.agregarTurno({ ...turnoObj });
    // pantalla.mostarTurno(administrador);

    limpiarObj();

    formulario.reset();

    if (editar === true) {
        administrador.editarTurno({ ...turnoObj });

        pantalla.alerta("EDICION REALIZADA")
        formulario.querySelector("button").textContent = "Crear Turno";
        editar = false;

    } else {

    }



}

function limpiarObj() {
    turnoObj.name = "",
        turnoObj.tel = "",
        turnoObj.cancha = "",
        turnoObj.dia = "",
        turnoObj.tiempo = "",
        turnoObj.aclaracion = ""

}


function eliminarTurno(id) {

    administrador.eliminarTurno(id);
    pantalla.alerta("El turno se elimino correctamente");
    pantalla.mostarTurno(administrador);
}

function editarTurno(turnos) {
    const { name, tel, cancha, dia, tiempo, aclaracion, id } = turnos;
    nombre.value = name;
    telefono.value = tel;
    canchas.value = cancha;
    fecha.value = dia;
    hora.value = tiempo;
    aclaciones.value = aclaracion;

    turnoObj.name = name;
    turnoObj.tel = tel;
    turnoObj.cancha = cancha;
    turnoObj.dia = dia;
    turnoObj.tiempo = tiempo;
    turnoObj.aclaracion = aclaracion;
    turnoObj.id = id;



    formulario.querySelector("button").textContent = "Guardar Cambios";

    editar = true;
}