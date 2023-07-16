"use client"
import { useState } from 'react'
import Image from 'next/image'
import React from 'react'
import { SearchGameProps } from '@/types'
import {Combobox,Transition} from '@headlessui/react'

const SearchGame = ({gameTitle, setGameTitle} : SearchGameProps) => {
  
  const [query, setQuery] = useState('');

  return (
    <div className='search-game'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image src = "/search_bar_logo.png" alt = "search_bar_logo" width={25} height={25} className='ml-4'/>
          </Combobox.Button>

          <Combobox.Input
            className= "search-game__input"
            placeholder='God of War'
            displayValue={(gameTitle: string) => gameTitle}
            onChange={(e) => (setQuery(e.target.value))}
          />
        </div>
      </Combobox>
    </div>
  )
}

export default SearchGame