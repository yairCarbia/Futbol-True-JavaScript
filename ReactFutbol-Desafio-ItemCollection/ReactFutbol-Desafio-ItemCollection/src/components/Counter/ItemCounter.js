import React from 'react'
import "./ItemCounter.scss"

const ItemCount = ({ max, setContador, contador, handdleAgregar }) => {


    const suma = () => {
        contador < max && setContador(contador + 1);
    }
    const reset = () => {
        setContador(1);
    }
    const resta = () => {
        contador > 1 && setContador(contador - 1)

    }


    return (
        <div className='d-flex cont'>


            <h3 className="text-light my-4 ">Cantidad: <span className='color2'>{contador}</span></h3>
            <div className='d-flex botones'>
                <button className='boton1 text-light' onClick={suma}>+1</button>
                <button className='boton1 text-light ms-1' onClick={reset}>Reset</button>
                <button className='boton1 text-light ms-1' onClick={resta}>-1</button>
                <button href="cart" onClick={handdleAgregar} className="boton1  text-light ">Agregar al Carrito</button>
            </div>



        </div>
    )
}

export default ItemCount