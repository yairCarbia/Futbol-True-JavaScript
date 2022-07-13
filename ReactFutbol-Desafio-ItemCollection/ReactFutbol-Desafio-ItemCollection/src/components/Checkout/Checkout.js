import React, { useContext, useState } from 'react'
import { CarContext } from '../../context/CarContext'
import { Navigate } from 'react-router-dom'
import { collection, addDoc, getDocs, writeBatch, query, where, documentId } from 'firebase/firestore'
import { db } from '../../firebase/config'
import "yup-phone"
import Formik2 from '../Formik2/Formik2'



const Checkout = () => {




    const { carrito, totalidad } = useContext(CarContext)
    const [orderId, setOrder] = useState(null)


    const handdleSubmit = async (value) => {


        const orden = {
            comprador: value,
            items: carrito.map(({ id, cantidad, precio, nombre }) => ({ id, cantidad, precio, nombre })),
            total: totalidad()

        }
        const batch = writeBatch(db)
        const prodRef = collection(db, "productos")
        const orderRef = collection(db, "orders")
        const consulta = query(prodRef, where(documentId(), "in", carrito.map(el => el.id)))
        const itemsSinStock = [];
        const productos = await getDocs(consulta)
        productos.docs.forEach((doc) => {
            const itemUpdate = carrito.find(el => el.id === doc.id)

            if (doc.data().stock - itemUpdate.cantidad >= 0) {
                batch.update(doc.ref, {
                    stock: doc.data().stock - itemUpdate.cantidad
                })
            } else { itemsSinStock.push(itemUpdate) }
        })
        if (itemsSinStock.length === 0) {
            addDoc(orderRef, orden)
                .then((doc) => {
                    batch.commit()
                    setOrder(doc.id);

                })

        } else {
            alert("Items sin stock!!!")
        }

    }


    if (orderId) {
        return (
            <div className='container my-5'>
                <h2 className='text-light'>Gracias por la compra</h2>
                <p className="text-light">Su orden de compra es:<span className='color2'> {orderId}</span> </p>
            </div>
        )
    }
    if (carrito.length === 0) {
        return <Navigate to="/" />
    }
    return (
        <div className='container my-2'>
            <h1>Checkout!</h1>

            <Formik2


                initialValues={{
                    nombre: "",
                    email: "",
                    telefono: "",
                    direcion: ""
                }}

                handdleSubmit={handdleSubmit}


            />



        </div>
    )
}

export default Checkout


