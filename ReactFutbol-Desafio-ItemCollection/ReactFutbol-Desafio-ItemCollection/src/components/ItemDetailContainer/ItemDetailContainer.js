import { useEffect, useState } from "react"
import { Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"
export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const docRef = doc(db, "productos", itemId)

        getDoc(docRef)
            .then((doc) => {
                setItem({ id: doc.id, ...doc.data() })
            })
            .finally(() => { setLoading(false) })

    }, [itemId])

    return (
        <section className="container my-5">

            {
                loading
                    ? <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    : <ItemDetail item={item} />
            }

        </section>
    )
}