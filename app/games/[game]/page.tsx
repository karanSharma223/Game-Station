

import { AddToCart, CustomButton,GenreTab,Product,RatingStars,Returns } from '@/components'
import { getGameFromSlug, getSimilarGames } from '@/sanity/sanity-utils'
import React from 'react'
import Image from 'next/image'

import {PortableText} from '@portabletext/react'
import { log } from 'console'



type Props = {
  params: {game: string}
}

const page = async({params}: Props) => {

  
  
  const slug = params.game;
  const game = await getGameFromSlug(slug)
  
  const similarGames = await getSimilarGames(game.genre)
  
  
  
  
  return (
  
    <div>
      <div className='p-28 flex-col gap-5 relative z-0 max-w-[1440px] mx-auto bg-slate-100 rounded-2xl'>
           
            <div className='flex justify-start w-full'>
              <div className='flex justify-center items-center rounded-2xl bg-slate-200 w-[400px] h-[500px] hover:bg-blue-100 transition duration-300 ease-in-out '>
                <Image src={game.image} alt = {game.name} width={350} height={350} className='rounded-2xl'/>
              </div>
              <div className='px-8 flex-col'>
                <div>
                  <h1 className='mt-5 font-extrabold text-5xl text-sky-950'>{game.name}</h1>
                </div>
                <div>
                  <h2 className=' text-xl text-gray-700'>{game.developer}</h2>
                </div>
                <div className='py-3'>
                  <RatingStars rating = {game.rating}/>
                </div>
                <div className='py-3'>
                  <h3><span className='font-extrabold text-lg'>Platforms: </span>{
                    game.platform == "PS4" ?(
                      <span className='text-lg'>PlayStation 4, PlayStation 5</span>
                    ): game.platform == "PS5" ?(
                      <span className='text-lg'>PlayStation 5</span>
                    ): game.platform == "XBOX" ?(
                      <span className='text-lg'>XBOX One, XBOX Series X, XBOX Series S</span>
                    ): game.platform == "XSX" ?(
                      <span className='text-lg'>XBOX Series X, XBOX Series S</span>
                    ): (<span>Not Specified</span>)
                  }</h3>
                </div>
                <div className='py-3'>
                  <GenreTab items = {game.genre}/>
                </div>
                <div className='pt-3 pb-3 flex items-center'>
                  <h1 className='font-extrabold text-4xl text-sky-950'>₹ {game.buy_price}</h1>

                  <AddToCart id = {game._id}/>
                                    
                </div>
                <div>
                  <h1 className='text-xl text-emerald-500'><span className='line-through'>₹ {game.og_price}</span><span className='font-extrabold'> Save {Math.trunc(((game.og_price - game.buy_price)/game.og_price)*100)}%</span></h1>
                </div>
                <div className='py-8 flex items-center'>
                  <h1 className='font-extrabold text-4xl text-sky-950'>₹ {game.sell_price}</h1>
                  <CustomButton title = 'Sell Now' ContainerStyles = "bg-primary-blue text-white rounded-full mx-8" />
                </div>
              </div>
            </div> 
            
            <div className='p-10'>
                <Returns/>
            </div>

            <div className='flex flex-col items-start'>
                <h1 className='mt-5 underline underline-offset-8 font-extrabold text-3xl text-sky-950'>About the Game</h1>
                <div className='mt-5 text-lg'>
                  <PortableText value={game.details}/>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <h1 className='mt-20 underline underline-offset-8 font-extrabold text-3xl text-sky-950' >You may also like</h1>
                <div className='marquee'>
                  <div className='flex justify-center gap-[15px] mt-20 track'>
                      
                        {similarGames.map((item) => (
                          <div>
                            <Product key = {item._id} _id = {item._id} name = {item.name} buy_price={item.buy_price} slug = {item.slug} image={item.image}/>
                          </div>
                        ))}
                      
                  </div>
                </div>
            </div>         
      </div>
    </div>
    
    
  )
}

export default page