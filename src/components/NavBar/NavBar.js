import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

function NavBar() {
    return (
        <div>
        <div className='contenedor'>
            <h2 className='titulo'>Fummofu_Store</h2>
            <nav className="nav">
                <a href="#">Mangas</a>
                <a href="#">Animes</a>
                <a href="#">Series</a>
                <a href="#">Películas</a>
                <a href="#">Promociones</a>
                {<CartWidget/>}
            </nav>            
        </div>
        <ItemListContainer greeting={"Bienvenidos"}/>
        </div>
    )
}

export default NavBar