import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({category, name, description, img, price, stock}) => {

    return(
        <div className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg">
        <h4 className="text-lg font-bold mb-2">{category}</h4>
        <h3 className="text-2xl font-semibold mb-2">{name}</h3>
        <img className="w-full mb-4" src={img} alt={name} />
        <p className="text-gray-700">${price}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <ItemCount stock={stock} />
    </div>
    )
}

export default ItemDetail