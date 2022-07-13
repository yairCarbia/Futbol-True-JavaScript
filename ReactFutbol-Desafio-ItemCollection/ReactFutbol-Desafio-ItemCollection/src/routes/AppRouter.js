import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext';
import Privadas from './Privadas';
import Publicas from './Publicas';
const AppRouter = () => {
    const { auth } = useAuthContext()


    return (
        <div>
            <BrowserRouter>



                {
                    auth.logIn ? <Privadas /> : <Publicas />
                }


            </BrowserRouter>
        </div>
    )
}

export default AppRouter