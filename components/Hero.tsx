"use client";
import Image from 'next/image';
import React from 'react'
import CustomButton from './CustomButton';

const handleScroll = () => {}

const Hero = () => {
  return (
    <div className='hero pt-20'>
        <div className = 'flex-1 pt-10 padding-x'>
            <h1 className='hero__title'>Buy and Sell video games — 
              <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'> Quickly and Easily</span>
            </h1>

            <p className='hero__subtitle'>Buy and Sell used video game discs effortlessly at best prices!</p>

            <CustomButton 
            title = "Explore Games"
            ContainerStyles='bg-primary-blue text-white rounded-full mt-10'
            HandleClick = {handleScroll}
            />
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src = "/heroBanner.png" alt = "hero" fill className='object-contain' />
            </div>
            <div className='hero__image-overlay'/>
            
        </div>
    </div>
  )
}

export default Hero