"use client"

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ProductCard } from '@/types';
import React from 'react'
import Product from './Product';
import { type } from 'os';
import { BsFillArrowRightSquareFill,BsFillArrowLeftSquareFill } from 'react-icons/bs'

type Game = {
    games : ProductCard[]
    
}



const Carousel = ({games}: Game) => {

    function NextArrow(props: { className: any; style: any; onClick: any; }) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          ><BsFillArrowRightSquareFill style={{ ...style, color: "78C1F3", fontSize: "30px" }} /></div>
        );
      }
    function PrevArrow(props: { className: any; style: any; onClick: any; }) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            onClick={onClick}
          ><BsFillArrowLeftSquareFill style={{ ...style, color: "78C1F3", fontSize: "30px"  }} /></div>
        );
    }

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        
        nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined}/>,
        prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined}/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


  return (
    <div className='my-8 mx-5' >
         <Slider {...settings} >
            {games.map((game) => (
            <div key={game._id} >
              <Product _id = {game._id} name = {game.name} buy_price={game.buy_price} slug = {game.slug} image={game.image}/>
            </div>
            ))}
         </Slider>
    </div>
  )
}

export default Carousel