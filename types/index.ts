import { MouseEventHandler } from 'react';
import { PortableTextBlock } from 'sanity';

export interface CustomButtonProps{
    title : string;
    ContainerStyles? : string;
    HandleClick? : any;
    btnType? : "button" | "submit"
}

export interface SearchGameProps{
    gameTitle: string;
    setGameTitle: (gameTitle: string) => void;
}

export interface ProductCardProps{
    _id: string,
    name: string,
    buy_price: number,
    slug: string,
    image: string,
     
}

export type ProductCard = {
    _id: string,
    name: string,
    buy_price: number,
    slug: string,
    image: string
   
}

export type Product = {
    _id: string,
    name: string,
    sell_price: number,
    slug: string,
    image: string,
    buy_price: number,
    details: PortableTextBlock[],
    platform: string,
    developer: string,
    og_price: number,
    genre: string[],
    rating: number
}