import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const  [products, setProducts] = useState([]);

    const {categoryId} = useParams()

    useEffect(() => {
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
        .then(result => {
            setProducts(result)
        })
    }, [categoryId])
    
    return (
        <div className="max-w-7xl mx-auto p-4 flex justify-center">
            <h1 className="text-3xl font-bold mb-4">{greeting}</h1>
            <div className="grid grid-cols-2 gap-4">
                <ItemList products={products}/>
            </div>
        </div>
    )
}
export default ItemListContainer;