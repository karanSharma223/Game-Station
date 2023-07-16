import { type } from 'os'
import React from 'react'
import { BsStarFill, BsStarHalf, BsStar} from 'react-icons/bs'

type Rating = {
    rating: number
}

const RatingStars = ({rating} : Rating) => {
    
    const array = Array.from({length: 5}, (e,ind) => {
        let frac = ind + 0.5

        return(
            <span key={ind}>
                {
                    rating >= ind + 1 ? (
                        <BsStarFill className='star-style'/>
                    )
                    : rating >= frac ? (
                        <BsStarHalf className='star-style'/>
                    )
                    :<BsStar className='star-style'/>
                }
            </span>
        );
    })

    return (
      
        <div className=' flex flex-start justify-start gap-px'>
            {array}
        </div>
      
    ) 
}

export default RatingStars