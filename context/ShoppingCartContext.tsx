"use client"


import { ReactNode, createContext, useContext, useState } from "react";

type ProviderProps = {
    children : ReactNode
}

type CartItem = {
    id : string,
    quantity : number 
}

type ShoppingCartContext = {
    openCart :() => void,
    closeCart :() => void,
    getQuantity : (id: string) => number,
    incrementQuantity : (id : string) => void,
    decrementQuantity : (id: string) => void,
    removeFromCart : (id:string) => void,
    cartItems : CartItem[],
    totalItems : number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
  }

export function ShoppingCartProvider ({children}:ProviderProps){

    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [isOpen, setIsOpen] = useState(false)

    function openCart (){       
        setIsOpen(true)
    }

    function closeCart (){
        setIsOpen(false)
    }

    function getQuantity (id : string){
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function incrementQuantity (id : string){
        console.log("button pressed");
        setCartItems(currItems => {
            if (currItems.find(item => item.id === id) == null){
                return [...currItems,{id: id, quantity: 1}]
            }else{
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity + 1}
                    }
                    else
                        return item
                })
            }
        })
    }

    function decrementQuantity(id: string){
        setCartItems(currItems => {
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }
            else {
                return currItems.map(item => {
                    if(item.id === id){
                        return {...item, quantity: item.quantity - 1}
                    }
                    else{
                        return item
                    }
                })
            }
        })
    }

    function removeFromCart(id: string){
        setCartItems(currItems => {
            return currItems.filter(item => item.id !== id)
        })
    }

    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0)

    
    
    return (
    <ShoppingCartContext.Provider value = {{openCart, closeCart, getQuantity, incrementQuantity, decrementQuantity, removeFromCart, cartItems, totalItems}}>
        {children}
    </ShoppingCartContext.Provider>
    )
        
}

