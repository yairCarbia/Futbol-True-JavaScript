import React from 'react'
import { Link } from "react-router-dom"
import ItemCounter from "../Counter/ItemCounter"

const Detail = ({ item,
    handdleAgregar,
    setCantidad,
    estaEnCarrito,
    cantidad }) => {
    return (
        <>
            <h2 className="text-light text-center m-3">Has seleccionadado el producto, <span className="color2">{item.nombre} !</span> </h2>

            <h4 className="text-light text-center"> Su precio es de:<span className="color2"> ${item.precio}</span></h4>
            <div className="d-flex container">

                <img className="container_img2 mb-3 " src={item.img} alt={item.nombre} />


                {
                    estaEnCarrito(item.id)
                        ? <div className="cf text-center"><Link to="/cart" className="boton finalizar text-center m-2">Finalizar compra</Link>
                            <Link to="/" className="boton finalizar">Seguir comprando</Link>
                        </div>
                        : <ItemCounter
                            max={item.stock}
                            contador={cantidad}
                            setContador={setCantidad}
                            handdleAgregar={handdleAgregar}

                        />

                }


            </div>
        </>
    )
}

export default Detail