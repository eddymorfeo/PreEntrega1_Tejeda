
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/components/NavBar/NavBar";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path = '/' element={<ItemListContainer/>}/>
          <Route path = '/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path = '/item/:itemId' element={<ItemDetailContainer/>}/>
          <Route path = '*' element={<h1>404 NOT FOUND</h1>}/>
          {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} />
          <ItemDetailContainer /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
