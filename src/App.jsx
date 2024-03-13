import './App.css'
import ItemCount from './componentes/ItemCount/ItemCount'
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/itemListContainer/itemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer greeting= {'Bienvenidos'}/>}/>
            <Route path="/item/:itemId" element={<ItemDetailContainer />}/>
            <Route path="/ItemCount" element= {<ItemCount/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          </Routes>
    </BrowserRouter>
     </>
  )
}

export default App
