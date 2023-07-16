import { Carousel, CustomButton } from '@/components'
import { getPS4Games, getPS5Games } from '@/sanity/sanity-utils'
import Image from 'next/image'
import React from 'react'
import {Link} from 'react-scroll';



const page = async () => {

    const ps4games = await getPS4Games()
    const ps5games = await getPS5Games()

    

    function handleScroll(){

    }

  return (
    <div className='flex flex-col'>
        <div className='hero pt-20 '>
            <div className = 'flex-1 pt-10 padding-x'>
                <h1 className='hero__title'>Explore the latest and popular — 
                    <span className='bg-gradient-to-r from-ps-blue via-sky-300 to-purple-600 bg-clip-text text-transparent'> Playstation Games </span>
                </h1>

                <p className='hero__subtitle'>Buy and Sell used video game discs effortlessly at best prices!</p>

                <CustomButton 
                title = "Explore Games"
                ContainerStyles='bg-primary-blue text-white rounded-full mt-10'
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src = "/PS-hero.png" alt = "hero" fill className='object-contain' />
                </div>
                <div className='hero__image-overlay'/>
            
            </div>
            
        </div>

        <div className='mt-6 padding-x padding-y max-width' id = 'discover'>
        
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Playstation 4 Games</h1>
          <p>Explore the PS4 games you might like</p>
        </div>
        
        <div>
          <Carousel games={ps4games}/>  
        </div>

        <div className='home__text-container mt-32'>
          <h1 className='text-4xl font-extrabold'>Playstation 5 Games</h1>
          <p>Explore the PS5 games you might like</p>
        </div>
        
        <div>
          <Carousel games={ps5games}/>  
        </div>
        
      </div>
    </div>
  )
}

export default page