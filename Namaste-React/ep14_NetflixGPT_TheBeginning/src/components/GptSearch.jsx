import React from 'react'
import SearchBarGpt from './SearchBarGpt'
import GptMovieSuggestions from './GptMovieSuggestions'


const GptSearch = () => {
  return (
    <div>
        <div>
            <SearchBarGpt />
        </div>
        <div>
            <GptMovieSuggestions />
        </div>
    </div>
  )
}

export default GptSearch