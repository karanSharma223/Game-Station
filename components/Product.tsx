import { ProductCardProps } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Product = ({_id, name, buy_price, slug, image}: ProductCardProps) => {
  return (
    <div className='mx-1 p-3 max-w-[282px] max-h-[500px] min-w-[282px] transform transition duration-500 hover:scale-95 bg-slate-200 rounded-2xl' >
        <Link href = {`/games/${slug}`} key={_id} className='flex flex-col align-middle' style={{textDecoration: 'none'}}>
            <Image src={image} alt={name} width={250} height={250} className='bg-slate-200 rounded-2xl'/>
            <h2 className='font-extrabold text-xl text-sky-950 overflow-hidden'>{name}</h2>
            <h3 className='text-lg font-bold text-sky-950'>Rs {buy_price}</h3>
        </Link>
    </div>
  )
}

export default Product
