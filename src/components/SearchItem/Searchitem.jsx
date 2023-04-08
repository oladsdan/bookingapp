import React from 'react'
import { images8 } from '../../assets/images'

const Searchitem = () => {
  return (
    <div className="border-[1px] border-solid border-gray-400 p-2 rounded flex justify-between gap-5 mb-5">
        <img src={images8} alt="" className="w-[200px] h-[200px] object-cover  " />
        <div className="flex flex-col gap-2 flex-[2]">
            <h1 className="text-xl text-blue-600 font-bold">Tower Street Apartments</h1>
            <span className="text-[12px]">500m from center</span>
            <span className='text-[12px] text-white bg-[#008009] w-max p-1 rounded'>Free airport taxi</span>
            <span className='text-[12px] font-bold'>
                studio Apartment with Air conditioning
            </span>
            <span className='text-[12px]'>
                Entir Studio . 1 bathroom .21m2 1 full bed
            </span>
            <span className='text-green-500 text-[12px] font-bold'>Free cancellation</span>
            <span className='text-green-700 text-[12px]'>
                you can cancel later, so lock in this great price today!
            </span>
        </div>
        <div className='flex-[1] flex flex-col justify-between'>
            <div className="flex justify-between ">
                <span className="font-medium">Excellent</span>
                <button className="bg-blue-col text-white p-1 font-bold border-0 ">8.9</button>
            </div>
            <div className="text-right flex flex-col gap-1">
                <span className="text-[24px]">$123</span>
                <span className="text-[12px] text-gray-500">Includes taxes and fees</span>
                <button className="bg-blue-500 text-white font-bold py-2 px-1 border-0 rounded-lg">see avalability</button>
            </div>
        </div>
    

    </div>
  )
}

export default Searchitem