"use client"

import { useShoppingCart } from '@/context/ShoppingCartContext'
import React from 'react'
import { CartItem } from '@/components'
import { getCartGame } from '@/sanity/sanity-utils'

const page = async () => {

    const {cartItems} = useShoppingCart()
    var total = 0
    for(let i = 0; i < cartItems.length; i++){
      const game = await getCartGame(cartItems[i].id)
      total += game.buy_price*cartItems[i].quantity
    }

  return (
    <div className='mx-64 flex flex-col'>
        <h1 className='text-sky-950 text-5xl mt-36'>Shopping Cart</h1>
        <div className='py-10'>
            {cartItems?.map(async (item) => {
                const game = await getCartGame(item.id)
                return <div className='py-2'>
                <CartItem key={item.id} game = {game} quantity = {item.quantity}/>
                </div>
            })}
        </div>
        <div className='flex justify-between my-8'>
          <h1 className='text-3xl font-extrabold text-sky-950 pb-10'>Total :</h1>
          <h1 className='text-2xl font-extrabold text-sky-950 pb-10'>₹ {total}</h1>
        </div>
    </div>
  )
}

export default page