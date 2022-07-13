import React from 'react'
import { Formik } from 'formik'
import * as Yup from "yup"
import "yup-phone"

const Formik2 = ({ initialValues, handdleSubmit, validationSchema }) => {
    const schema = Yup.object().shape({
        nombre: Yup.string().required("El Campo nombre es invalido")
            .min(4, "El nombre es demasiado corto, vuelve a intentar!")
            .max(30, "El nombre  sobrepaso el maximo de caracteres, reducelo!"),
        email: Yup.string().required("El campo Email es invalido")
            .email("Formato de email erroneo,vuelve a intentar!"),
        telefono: Yup.string().phone("Numero invalido").required("El numero es incorrecto"),
        direcion: Yup.string().required("El Campo es invalido")
            .min(4, "El nombre es demasiado corto, vuelve a intentar!")
            .max(30, "El nombre  sobrepaso el maximo de caracteres, reducelo!"),
    })
    return (
        <>
            <Formik
                initialValues={{
                    nombre: "",
                    email: "",
                    telefono: "",
                    direcion: ""
                }}

                onSubmit={handdleSubmit}

                validationSchema={schema}
            >
                {
                    (formik) => (
                        <form onSubmit={formik.handleSubmit}>
                            <input
                                value={formik.values.nombre}
                                name="nombre"
                                onChange={formik.handleChange}
                                type={"text"}
                                placeholder={"Nombre"}
                                className="form-control my-2"
                            />
                            {
                                (formik.errors.nombre && <p className='alert alert-danger'>{formik.errors.nombre}</p>)
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
                                (formik.errors.email && <p className='alert alert-danger'>{formik.errors.email}</p>)
                            }
                            <input
                                value={formik.values.telefono}
                                name="telefono"
                                onChange={formik.handleChange}
                                type={"tel"}
                                placeholder={"Telefono"}
                                className="form-control my-2"
                            />
                            {
                                (formik.errors.telefono && <p className='alert alert-danger'>{formik.errors.telefono}</p>)
                            }
                            <input
                                value={formik.values.direcion}
                                name="direcion"
                                onChange={formik.handleChange}
                                type={"text"}
                                placeholder={"Direcion"}
                                className="form-control my-2"
                            />
                            {
                                (formik.errors.direcion && <p className='alert alert-danger'>{formik.errors.direcion}</p>)
                            }
                            <button className='boton2' onSubmit={handdleSubmit}>Enviar</button>
                        </form>
                    )
                }


            </Formik>
        </>
    )
}

export default Formik2