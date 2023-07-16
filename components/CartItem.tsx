"use client"

import { getCartGame } from '@/sanity/sanity-utils'
import Image from 'next/image'
import { useParams } from "next/navigation";
import React from 'react'
import CustomButton from './CustomButton'
import { useShoppingCart } from '@/context/ShoppingCartContext'
import { Stack } from 'react-bootstrap'
import { ProductCard, ProductCardProps } from '@/types';
import Product from './Product';

type Props = {
    game : ProductCard,
    quantity : number
}


const CartItem = ({game,quantity}: Props) => {

    
    const {removeFromCart, incrementQuantity, decrementQuantity, cartItems} = useShoppingCart()
    
    
  return (
    <div className='flex justify-center items-start'>
        <Image src={game.image} alt="game cover" width={150} height={150}/>
        <div className='flex flex-col px-10 grow'>
            <h1 className='text-3xl font-extrabold text-sky-950 pb-10'>{game.name}</h1>
            <h1 className='text-xl font-semibold text-sky-950 pb-10' >₹ {game.buy_price}</h1>
            <div className='flex items-center '>
                
                <span className='text-xl text-sky-950'>x{(cartItems.find(item => item.id === game._id)?.quantity)}</span>
                
            </div>
            
        </div>
        <div>
            <span className='text-xl text-sky-950 font-semibold' >₹ {game.buy_price*quantity}</span>
        </div>
    </div>
  )
}

export default CartItem