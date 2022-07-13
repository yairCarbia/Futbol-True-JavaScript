import './Navbar.scss'
import logo from "../../img/cm.jpeg"
import { Link } from "react-router-dom"
import CarWidget from '../CartWidget/CarWidget'
export const Navbar = () => {

    return (
        <>




            <header className='header'>
                <div className='barra'>
                    <div className="container_header_logo  ">

                        <img src={logo} className="logo" alt='imagen logo' />


                    </div>
                    <nav className="navegacion">
                        <Link to={"/"} className="btn" href="btn">Inicio</Link>
                        <Link to={"/categorias/enduro"} className="btn" href="btn">Enduro</Link>
                        <Link to={"/categorias/deportivo"} className="btn" href="btn">Deportivas</Link>

                        <Link to={"/categorias/varios"} className="btn" href="btn">Varios</Link>

                        <CarWidget className="cart btn" />
                    </nav></div>

            </header>








        </>

    )
}

export default Navbar