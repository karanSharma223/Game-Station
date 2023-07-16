import React from 'react'


type Genre = {
    items: string[]
}

const GenreTab = ({items}: Genre) => {

  

  return (
    <div className='flex flex-row gap-3 items-center'>
        <h1 className='font-extrabold text-lg'>Genre:</h1>
        {items.map((item) => (
            <h1 id={item} className='bg-blue-100 text-sky-950 rounded-lg p-1 font-semibold border-solid border-[2px] text-lg border-sky-500'>{item}</h1>
        ))}
    </div>
  )
}

export default GenreTab