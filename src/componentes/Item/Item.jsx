import { Link } from "react-router-dom"

const Item = ({id, category, name, price, img}) => {

    return (
        <div className="border border-gray-300 rounded-lg shadow-md p-4 m-4 w-80">
            <h2 className="text-lg font-semibold mb-2">{category}</h2>
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <img className="w-full mb-2" src={img} alt={name} />
            <p className="text-gray-700">${price}</p>
            <Link to={`/item/${id}`} className="text-blue-500 hover:underline mt-2 block">Ver Detalle</Link>
        </div>
    )
}

export default Item