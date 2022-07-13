
import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CarContext = createContext()

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    const addItem = item => {
        setCarrito([...carrito, item])
    }
    const estaEnCarrito = (id) => {
        return carrito.some((prod) => prod.id === id)
    }

    const totalidad = () => {
        return carrito.reduce((acc, prod) => acc += (prod.precio * prod.cantidad), 0)
    }
    const totalCantidad = () => {
        return carrito.reduce((acc, prod) => acc += prod.cantidad, 0)
    }
    const vaciarCarrito = () => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Deseas eliminar el carrito?',
            text: "No vas a poder revertir esta accion!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, eliminar!',
            cancelButtonText: 'No, cancelar!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Eliminado!',
                    'Tu carrito ha sido eliminado',
                    'success'
                )
                return setCarrito([]);
            } else if (

                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelado',
                    'Tu carrito esta a salvo :)',
                    'error'
                )
            }
        })



    }
    const eliminarItem = (id) => {
        return setCarrito(carrito.filter((prod) => prod.id !== id))
    }
    return (

        <CarContext.Provider value={{ carrito, addItem, estaEnCarrito, totalidad, totalCantidad, vaciarCarrito, eliminarItem }}>

            {children}
        </CarContext.Provider>
    )
}