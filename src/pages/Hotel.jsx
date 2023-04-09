import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocation } from '@fortawesome/free-solid-svg-icons'
import { images1, images2, images3, images4, images5, images6 } from '../assets/images'
import MailList from '../components/MailList/MailList'
import Footer from '../components/Footer/footer'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [openSlider, setopenSlider] = useState(false)

  function Footerloop(){
    const foot =[];
    for (let i =0; i < 5; i++){
      foot.push(<Footer />)
    }
    return foot
  }


  const photos = [
    {
      src: images1
    },
    {
      src: images2
    },
    {
      src: images3
    },
    {
      src: images4
    },
    {
      src: images5
    },
    {
      src: images6
    }
  ]

  const handleOpen = (idx) => {
    setSlideNumber(idx);
    setopenSlider(true);

  }
  const handleMove = (direction) => {
    let newSlideNumber;
    
    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1;

    } else {
        newSlideNumber = slideNumber ===5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  
  }


  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className="flex items-center flex-col mt-5 relative">
        {openSlider && <div className="sticky top-0 left-0 w-[100%] h-[100vh]  z-[999] flex items-center">
              <FontAwesomeIcon icon={faCircleXmark} onClick={()=>setopenSlider(false)} className="absolute top-5 right-5 text-[30px] text-gray-400 cursor-pointer" />
              <FontAwesomeIcon onClick={()=>handleMove("l")} icon={faCircleArrowLeft} className="m-5 text-3xl text-gray-400 cursor-pointer"  />
                <div className="w-[100%] h-[100%] flex justify-center items-center">
                  <img src={photos[slideNumber].src} alt="" className='w-[80%] h-[80vh]' />

                </div>
              <FontAwesomeIcon onClick={()=>handleMove("r")} icon={faCircleArrowRight} className="m-5 text-3xl text-gray-400 cursor-pointer" />
        </div>}
        <div className="w-[100%] max-w-[1024px] flex flex-col gap-2 relative">
          <button className="absolute top-2 right-0 border-0 py-2 px-2 bg-blue-500 font-bold rounded text-white">Reserve or Book Now</button>
          <h1 className="text-[24px]">Grand Hotel</h1>
          <div className="text-[12px] flex items-center gap-2">
            <FontAwesomeIcon icon={faLocation} />
            <span>Elton st 125 New York</span>
          </div>
          <span className="text-blue-500 font-medium">
            Excellent location - 500m form center
          </span>
          <span className="text-green-500 font-medium">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="flex flex-wrap justify-between">
            {photos.map((photo, idx) => (
              <div className="w-[33%]">
                <img onClick={()=>handleOpen(idx)} src={photo.src} alt="" className="w-[100%] object-cover"/>
              </div>
            ))}

          </div>
          <div className="flex justify-between gap-5 mt-5">
            <div className="flex-[3]">
              <h1 className='font-bold text-xl'>Stay in the heart of Lagos</h1>
              <p className='text-[14px] mt-5'>Lorem ipsum dolor sit amet consectetur 
               elit. Atque unde eum fugiat nostrum delectus. Iusto blanditiis deserunt
                nemo sunt. Dolorum nam pariatur hic sint ipsum quam adipisci assumenda aspernatur
                 quaerat necessitatibus cumque enim nobis distinctio voluptatum eos illum cupiditate 
                 in ea delectus veniam sequi, maxime, magni blanditiis. Ab id similique quaerat
                  repudiandae doloremque asperiores officiis distinctio accusantium neque dolorum 
                  labore autem sint in, illum nisi ipsa molestiae facilis alias expedita! Suscipit sint aliquid earum sed, alias explicabo
                    neque omnis perferendis eum saepe eius voluptate impedit dicta enim temporibus
                     facilis laboriosam aspernatur. Cupiditate, sapiente iste. Ut tempora ea minima et 
                     corporis expedita aliquid, quis neque sapiente totam ipsam earum ex voluptates 
                      
                           </p>
            </div>
            <div className="flex-[1] bg-blue-100 flex flex-col p-5 gap-5">
              <h1 className="text-[18px] text-[#555] font-bold">Perfect for a 9-night stay!</h1>
              <span className="text-sm">
                Located in the real heart of lagos, this propety has an
                excellent location score of 9.8
              </span>
              <h2 className="font-light">
                <b>$945</b> (9 nights)
              </h2>
              <button className="border-0 py-2 px-2 bg-blue-500 font-bold rounded text-white">Reserve or Book Now!</button>
            </div>
          </div>
          
        </div>
        <MailList />
        <div className='flex w-[100%] justify-around mb-12  px-6'>
              {Footerloop()}
        </div>
        <div className='absolute  text-gray-500 font-medium left-[10px] bottom-2'>Copyright @ 2022 iambooking </div>
      </div>
      
    </div>
  )
}

export default Hotel