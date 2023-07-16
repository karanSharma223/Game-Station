


import { Hero,SearchBar,Product,Carousel} from '@/components'


import { getCartGame, getLatestGames, getPopularGames } from '@/sanity/sanity-utils'
import React from 'react'

async function Home(){

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true
  };
  
  const popularGames = await getPopularGames();
  const latestGames = await getLatestGames();
  const id = await getCartGame(popularGames[0]._id)
  console.log(id._id)
  
  return (
    <main className='overflow-hidden'>
      <Hero/>

      

      <div className='mt-6 padding-x padding-y max-width' id = 'discover'>
        
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Popular Games</h1>
          <p>Explore the best selling games you might like</p>
        </div>
        
        <div>
          <Carousel games={popularGames}/>  
        </div>

        <div className='home__text-container mt-32'>
          <h1 className='text-4xl font-extrabold'>Latest Games</h1>
          <p>Explore the Latest games you might like</p>
        </div>
        
        <div>
          <Carousel games={latestGames}/>  
        </div>
        
      </div>


    </main>
  )
  
}
export default Home