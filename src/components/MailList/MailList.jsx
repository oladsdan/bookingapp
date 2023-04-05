import React from 'react'

const MailList = () => {
  return (
    <div className="w-[100%] mt-12 bg-blue-col text-white flex flex-col items-center gap-5 p-12">
        <h1 className="text-3xl font-bold">Save time, save money!</h1>
        <span className="mailDesc">Sign up and we'll send the best deals to you</span>
        <div className="mailInputcontainer">
            <input type="text" placeholder="your Email" className="w-[300px] h-[50px] p-3 border-0 mr-3 text-black" />
            <button className="h-[50px] w-[100px] bg-blue-500 text-white font-medium rounded ">Subscribe</button>

        </div>
    </div>

  )
}

export default MailList