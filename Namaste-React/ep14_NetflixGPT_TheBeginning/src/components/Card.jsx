import React from 'react'
import { POSTER_IMAGE_API } from '../utils/constants'

const Card = ({poster}) => {
  return (
    <div className='ml-2 w-40 z-20 cursor-pointer'>
        <img alt="movie_poster" src={POSTER_IMAGE_API + poster} className='object-cover h-54' />
    </div>
  )
}

export default Card;