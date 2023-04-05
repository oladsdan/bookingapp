import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'

const HotelList = () => {
  
  const location = useLocation()
  console.log(location)

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="ListContainer flex justify-center mt-[20px]">
        <div className="listWrapper w-[100%] max-w-5xl flex gap-5">
          <div className="listSearch flex-[1] bg-[#febb02] p-2 rounded-[10px] sticky top-2 ">
            <h1 className="font-bold text-[20px] text-[#555] mb-2">Search</h1>
            <div className="lsI">
              <label htmlFor='des'>Destination</label>
              <input id='des' type='text' />
            </div>
             
            <div className="lsI">
              <label htmlFor='des'>Check-in-Date</label>
              
            </div>
             
          </div>
          <div className="listResult flex-[3]"></div>
        </div>
      </div>

    </div>
  )
}

export default HotelList