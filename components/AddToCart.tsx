"use client"

import React from 'react'
import CustomButton from './CustomButton'
import { useShoppingCart } from '@/context/ShoppingCartContext'

type Props = {
    id: string
}

const AddToCart = ({id}: Props) => {

    const {getQuantity, incrementQuantity, decrementQuantity, removeFromCart} = useShoppingCart();
    const quantity = getQuantity(id)
  return (
    <div>
        {quantity === 0 ? (
            <div>
            <CustomButton title = 'Add to Cart' ContainerStyles = "bg-primary-blue text-white rounded-full mx-8" 
            HandleClick = {() => incrementQuantity(id)}/>
            
            </div>
        ): 
        <div className='flex items-center mx-8'>
        <CustomButton title = '-' ContainerStyles='w-[40px] h-[48px] bg-primary-blue text-white rounded-full mr-4 text-lg'
        HandleClick = {() => decrementQuantity(id)}/>
        <span className='text-2xl text-sky-950'>{quantity}</span>
        <CustomButton title = '+' ContainerStyles='w-[40px] h-[48px] bg-primary-blue text-white rounded-full ml-4 text-lg'
        HandleClick = {() => incrementQuantity(id)}/>
        </div>}
    </div>
  )
}

export default AddToCart