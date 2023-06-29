import React from 'react'
import carrito from '../../icons/carrito.ico'

function CartWidget() {
    return (
        <>
        <div className='cart'>
            <img className='icon-carrito' src={carrito} alt='Icono_Carrito'></img>
            <p className='contadorCarrito'>0</p>                     
        </div>
        </>
    )
}

export default CartWidget