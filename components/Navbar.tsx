import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'
import NavCart from './NavCart'


const Navbar = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='w-[100%] mx-auto flex justify-between bg-blue-400 items-center sm:px-16 px-6 py-4'>
            <div>
              <Link href="/" className='flex justify-center items-center'>
                  <Image src = "/cover.png" alt = "logo" width={200} height={200} className='object-contain rounded-2xl'/>
              </Link>
            </div>
            <div className='flex justify-center items-center'>
              <ul className='flex items-center gap-[6vw]'>
                <li>
                  <Link href = "/playstation" className='text-white hover:text-gray-300 text-xl' style={{textDecoration: 'none'}}>Playstation</Link>
                </li>
                <li>
                  <Link href = "/" className='text-white hover:text-gray-300 text-xl' style={{textDecoration: 'none'}}>XBOX</Link>
                </li>
                <li>
                  <Link href = "/" className='text-white hover:text-gray-300 text-xl' style={{textDecoration: 'none'}}>Nintendo</Link>
                </li>
              </ul>
            </div>
            <div className='flex justify-center items-center'>
              <CustomButton title = 'Sign In' btnType = "button" ContainerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'></CustomButton>
              <Link href = "/cart">
                <NavCart/>
              </Link>
            </div>
        </nav>
    </header>
  )
}

export default Navbar