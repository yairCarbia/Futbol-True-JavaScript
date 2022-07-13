import React, { useContext } from 'react'
import { BsCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CarContext } from '../../context/CarContext'
import "./CartWidget.scss"
const CarWidget = () => {

    const { carrito, totalCantidad } = useContext(CarContext)
    if (carrito.length === 0) {
        return (< Link to="/cart" className='widget' >
            <BsCartCheckFill />

        </Link >)

    }


    return (
        <Link to="/cart" className='widget'>
            <BsCartCheckFill />
            <span>{totalCantidad()}</span>
        </Link>
    )
}
export default CarWidget
