
import "./ItemListContainer.scss"
import { Spinner } from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { useProd } from "./useProd"

export const ItemListContainer = () => {

    const { items, loading } = useProd()

    return (
        <section className="container bg-black my-5">

            {
                loading
                    ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    : <ItemList items={items} />
            }

        </section>
    )
}