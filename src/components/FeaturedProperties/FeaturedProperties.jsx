import React from 'react'
import { images9 } from '../../assets/images'

const FeaturedProperties = () => {
  return (
        <div className="flex-[1] flex flex-col">
            <img src={images9} alt='' className="w-[100%]" />
            <span className='font-bold'>Aparthotel Stare Miasto</span>
            <span className="">Madrid</span>
            <span className="font-medium">Starting from $120</span>
            <div className="fpRating">
                <button className="bg-blue-800 text-white border-0 p-1 mr-2 font-bold">8.9</button>
                <span className="text-[14px]">Excellent</span>
            </div>
        </div>
  )
}

export default FeaturedProperties