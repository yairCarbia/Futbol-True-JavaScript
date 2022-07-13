import Item from "../Item/Item"
import "./ItemList.scss"


const ItemList = ({ items }) => {

    return (
        <div>
            <h2 className="bg-black mb-5 text-center text-light">Nuestro productos</h2>

            <div className="container bg-black">
                <div className="grid">


                    {
                        items.map((item) => <Item key={item.id} item={item} />)
                    }



                </div>

            </div>


        </div>
    )
}

export default ItemList