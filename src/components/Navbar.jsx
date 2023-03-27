import React from 'react'

const Navbar = () => {
  return (
    <div className="h-[50px] bg-blue-col flex justify-center ">
        <div className="w-[100%] max-w-5xl text-white flex justify-between " >
            <span className="font-[500]">iambooking</span>
            <div className="navitems">
                <button className="ml-[20px] border-none py-1.5 px-[10px] text-[#003580] bg-white ">Register</button>
                <button className="ml-[20px] border-none py-1.5 px-[10px] text-[#003580] bg-white">Login</button>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar