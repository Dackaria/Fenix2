import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
   const [product, setProduct] = useState(null)

    const {itemId} =  useParams()  

   useEffect(() => {
    getProductsById(itemId)
    .then(result => {
        setProduct(result)
    })
   }, [])

    return (
        <div className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Detalle del Producto</h1>
        {product ? <ItemDetail {...product}/> : <p>Cargando...</p>}
    </div>
    )
}

export default ItemDetailContainer