
import logo from "../../img/cm.jpeg"
import "./Footer.scss"
import { AiFillLinkedin } from "react-icons/ai"
import { BsGithub } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { AiOutlineWhatsApp } from "react-icons/ai"
const Footer = () => {

    return (
        <footer className=" ">
            <div className='barra'>
                <div className="container_header_logo  ">

                    <img src={logo} className="logo" alt="img loco" />


                </div>
                <div >
                    <h3 className="redes">Nuestras redes !</h3>
                    <nav className="navegacion">
                        <a href="https://www.linkedin.com/in/carbiayair/" className="btn" ><AiFillLinkedin /></a>
                        <a href="https://github.com/yairCarbia" className="btn"><BsGithub /></a>
                        <a href="#ig" className="btn" ><AiFillInstagram /></a>
                        <a href="#wpp" className="btn"><AiOutlineWhatsApp /></a>

                    </nav></div>
            </div>


        </footer>
    )
}

export default Footer