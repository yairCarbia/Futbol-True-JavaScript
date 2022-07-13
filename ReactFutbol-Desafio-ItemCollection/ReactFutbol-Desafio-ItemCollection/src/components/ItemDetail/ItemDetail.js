
import { useContext, useState } from "react"
import "./ItemDetail.scss"
import { CarContext } from "../../context/CarContext"
import Swal from "sweetalert2";
import Detail from "../Detail/Detail"
const ItemDetail = ({ item }) => {
    const [cantidad, setCantidad] = useState(1);
    const { addItem, estaEnCarrito } = useContext(CarContext)




    const handdleAgregar = () => {

        Swal.fire(
            'Agregado!',
            'Este producto se ha agregado correctamente!',
            'success'
        )
        const itemCarrito = {
            ...item,
            cantidad
        }

        addItem(itemCarrito)
    }

    return (
        <>
            <Detail
                item={item}
                handdleAgregar={handdleAgregar}
                cantidad={cantidad}
                setCantidad={setCantidad}
                estaEnCarrito={estaEnCarrito}
            />

        </>

    )
}

export default ItemDetail