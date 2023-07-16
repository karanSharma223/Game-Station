import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { RiRecycleFill } from 'react-icons/ri'
import {BsFillDiscFill} from 'react-icons/bs'
const Returns = () => {
  return (
    
    <div className='mt-5 flex justify-between items-center'>
        <div className='w-60 h-60 bg-slate-200 rounded-2xl border-solid border-blue-400 border-4 flex flex-col  items-center'>
            <LiaShippingFastSolid className='text-6xl mt-10  text-sky-950'/>
            <h1 className='font-extrabold mt-6 text-xl text-center text-sky-950'>Free shipping on all orders</h1>
        </div>
        <div className='w-60 h-60 bg-slate-200 rounded-2xl border-solid border-blue-400 border-4 flex flex-col  items-center'>
            <RiRecycleFill className='text-6xl mt-10 text-sky-950'/>
            <h1 className='font-extrabold mt-6 text-xl text-center text-sky-950'>Buy - Play - Sell</h1> 
        </div>
        <div className='w-60 h-60 bg-slate-200 rounded-2xl border-solid border-blue-400 border-4 flex flex-col  items-center'>
            <BsFillDiscFill className='text-6xl mt-10 text-sky-950'/>
            <h1 className='font-extrabold mt-6 text-xl text-center text-sky-950'>Secure and Good Condition Disc</h1>
        </div>
    </div>
  )
}

export default Returns