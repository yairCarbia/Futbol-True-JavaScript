import React from 'react'
import { Navbar } from '../components/Navbar/Navbar'
import Carrito from "../components/cart/Carrito"
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { Routes, Route } from 'react-router-dom'
import Footer from '../components/Footer/Footer';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer';
import Checkout from '../components/Checkout/Checkout';

const Privadas = () => {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/tienda' element={<ItemListContainer />} />
                <Route path='/categorias/:categoryId' element={<ItemListContainer />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />} />

                <Route path="/cart" element={<Carrito />} />

                <Route path='/*' element={<ItemListContainer />} />

            </Routes>

            <Footer />
        </>
    )
}

export default Privadas