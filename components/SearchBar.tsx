"use client"
import { useState } from 'react'
import React from 'react'
import SearchGame from './SearchGame'

const SearchBar = () => {

    const [gameTitle, setGameTitle] = useState("");

    const handleSearch = () => {}
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <SearchGame
                gameTitle = {gameTitle}
                setGameTitle = {setGameTitle}
            />
        </form>
    )
}

export default SearchBar