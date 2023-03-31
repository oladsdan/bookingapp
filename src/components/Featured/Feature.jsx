import React from 'react'

const Feature = ({images, country, countryprop }) => {
  return (
    
        <div className="featuredItem relative text-white rounded-[10px]  overflow-hidden z-[1] h-[250px]">
            <img src={images}
                 alt=''
                 className='w-[100%] object-cover' />
            <div className="featuredTitles absolute bottom-8 left-5 ">
                <h1 className="text-3xl font-bold">{country}</h1>
                <h1 className="text-xl ">{countryprop} properties</h1>
            </div>
            
        </div>

    
  )
}

export default Feature