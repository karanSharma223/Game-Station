"use client"

import React from 'react'
import Link from 'next/link'
import {BsFillCartFill} from 'react-icons/bs'
import { useShoppingCart } from '@/context/ShoppingCartContext'

const NavCart = () => {

    const {totalItems, openCart} = useShoppingCart()
  return (
    
        <button onClick={() => openCart()} className='ml-10  bg-white rounded-full p-2 hover:bg-slate-200 relative'>
            <BsFillCartFill className='text-primary-blue text-2xl '/>
            <div className='rounded-full bg-red-700 absolute p-1 px-2 text-xs text-white right-px' >{totalItems}</div>
        </button>
    
  )
}

export default NavCart