import CartWidget from "../cartWidget/CartWidget";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {

    const navigate = useNavigate()

    return (
        <div className="flex justify-between items-center px-8 py-2 bg-gray-800 w-full" >
           <div className="flex items-center w-full">
              <h1 className="mr-9 ml-8  text-white" onClick={()=> navigate('/')}>Fenix</h1>
              <nav className="flex space-x-4">
                <Link to='/category/mochila' className="hover:text-blue-500 px-8 py-8">Mochilas</Link>
                <Link to='/category/cartera' className="hover:text-blue-500 px-8 py-8">Carteras</Link>
                <Link to='/category/billetera' className="hover:text-blue-500 px-8 py-8">Billeteras</Link>
             </nav>
            </div> 
            <div className="ml-8 mr-8"> 
                <CartWidget />
            </div>
        </div>
    )
}
export default NavBar;