import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav>
            <Link to='/'>
                <h3>Ecommerce</h3>
            </Link>
            <div>
                <NavLink to={`/category/mangas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Mangas</NavLink>
                <NavLink to={`/category/series`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Series</NavLink>
                <NavLink to={`/category/peliculas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Películas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

// function NavBar() {
//     return (
//         <div>
//         <div className='contenedor'>
//             <h2 className='titulo'>Fummofu_Store</h2>
//             <nav className="nav">
//                 <a href="#">Mangas</a>
//                 <a href="#">Animes</a>
//                 <a href="#">Series</a>
//                 <a href="#">Películas</a>
//                 <a href="#">Promociones</a>
//                 {<CartWidget/>}
//             </nav>            
//         </div>
//         <ItemListContainer greeting={"Bienvenidos"}/>
//         </div>
//     )
// }

export default NavBar