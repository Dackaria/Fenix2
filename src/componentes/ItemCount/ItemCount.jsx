import { useState } from "react"


const ItemCount =({initial=1, onAdd, stock}) => {
    
    const  [count, setCount] = useState(initial)
    
    const decrement = () => {
        if (count > 1) {
            setCount(prevCount=> prevCount - 1 )
        }
    }

    const  increment = () =>{
        if (count  < stock){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div className="flex items-center">
        <button className="px-3 py-1 bg-gray-200 rounded-md mr-2" onClick={decrement}>-</button>
        <h3 className="text-xl font-semibold">{count}</h3>
        <button className="px-3 py-1 bg-gray-200 rounded-md ml-2 mr-2" onClick={increment}>+</button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount;