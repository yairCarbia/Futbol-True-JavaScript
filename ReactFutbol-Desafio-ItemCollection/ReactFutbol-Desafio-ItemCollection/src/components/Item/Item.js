import { Link } from "react-router-dom"
import "./Item.scss"


const Item = ({ item }) => {

    return (
        <div className="card bg-dark d-grid">
            <h2 className="text-light">{item.nombre}</h2>
            <img className="rounded-circle imagen" src={item.img} alt="imagen producto" />
            <p>{item.desc}</p>
            <h4 className="text-light">Precio: ${item.precio}</h4>
            <div className="contenedor ">
                <Link to={`/item/${item.id}`}>
                    <button className="btn btn-dark btn-lg boton text-light">Mas informacion</button>

                </Link>
            </div>



        </div>
    )
}

export default Item