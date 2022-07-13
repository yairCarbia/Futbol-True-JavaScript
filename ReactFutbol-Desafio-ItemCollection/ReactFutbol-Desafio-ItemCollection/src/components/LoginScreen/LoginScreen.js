import React, { useState } from 'react'
import { useEffect } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { Formik } from 'formik'
import * as Yup from "yup"
import "./LoginScreen.scss"

const schema = Yup.object().shape({
    usuario: Yup.string().required("El Campo nombre es invalido")
        .min(4, "El nombre es demasiado corto, vuelve a intentar!")
        .max(30, "El nombre  sobrepaso el maximo de caracteres, reducelo!"),
    email: Yup.string().required("El campo email es invalido")
        .email("Formato de email erroneo,vuelve a intentar!"),

    password: Yup.string().required("Campo requerido"),

})

const LoginScreen = () => {
    const { login } = useAuthContext()
    const [estado, setEstado] = useState(false);



    const handdleSubmit = (values) => {

        login(values)
    }
    useEffect(() => {

        setEstado(true);

    }, [estado])




    return (
        <>

            <div className='login__container'>

                <div className='p-3  login__container--form'>
                    <h1 className='fw-bold '>Login Carbia Motors</h1>
                    <h2 className='fw-bold '>Inicia sesion </h2>
                    <Formik
                        initialValues={{
                            nombre: "",
                            email: "",
                            password: ""
                        }}

                        onSubmit={handdleSubmit}

                        validationSchema={schema}
                    >
                        {
                            (formik) => (
                                <form onSubmit={formik.handleSubmit}>
                                    <input
                                        value={formik.values.usuario}
                                        name="usuario"
                                        onChange={formik.handleChange}
                                        type={"text"}
                                        placeholder={"Usuario"}
                                        className="form-control my-2"
                                    />
                                    {
                                        (formik.errors.nombre && <p className='alert alert-danger fw-bold '>{formik.errors.usuario}</p>)
                                    }
                                    <input
                                        value={formik.values.email}
                                        name="email"
                                        onChange={formik.handleChange}
                                        type={"email "}
                                        placeholder={"Email"}
                                        className="form-control my-2"
                                    />
                                    {
                                        (formik.errors.email && <p className='alert alert-danger fw-bold '>{formik.errors.email}</p>)
                                    }
                                    <input
                                        value={formik.values.password}
                                        name="password"
                                        onChange={formik.handleChange}
                                        type={"text"}
                                        placeholder={"Contraseña"}
                                        className="form-control my-2"
                                    />
                                    {
                                        (formik.errors.password && <p className='alert alert-danger fw-bold  ' >{formik.errors.password}</p>)
                                    }

                                    <button className='boton2' onSubmit={handdleSubmit} type={"submit"}>Ingresar</button>

                                </form>
                            )
                        }


                    </Formik>



                </div>
            </div>





        </>


    )
}

export default LoginScreen