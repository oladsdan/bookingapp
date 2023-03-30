import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'; // used for transferring the date into a readable strings

const Header = () => {
    const [openDate, setOpenDate] = useState(false)

    // used for the react-date-rangge library
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);


    const active = "border-2 border-solid border-white rounded-[20px]"

    const headerSearchItem = "flex items-center gap-[10px]"
                    

  return (
    <div className="bg-blue-col text-white flex justify-center relative">
        <div className="w-[100%] max-w-5xl mt-5 mb-[100px]">
            <div className="flex gap-[40px] mb-[50px]">
                <div className={`flex align-center gap-[10px] w-[90px] p-1 ${active} `}>
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="flex align-center gap-[10px]">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="flex align-center gap-[10px]">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car rentals</span>
                </div>
                <div className="flex align-center gap-[10px]">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Attractions</span>
                </div>
                <div className="flex align-center gap-[10px]">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport taxis</span>
                </div>
            </div>
            <h1 className="text-3xl font-bold">A lifetime of discounts? It's Genuius,</h1>
            <p className="my-[20px]">Get rewarded for your travels - unlock instant
                savings of 10% or more with a free iambooking account
            </p>
            <button className="bg-blue-500 text-white font-light border-none p-[10px]">Sign in / Register</button>

            {/* the search components */}
             <div className="h-[30px] bg-white border-[3px] border-solid border-[#febb02] flex 
                    items-center justify-around absolute py-[25px] px-0 rounded-[5px] bottom-[-25px] w-[100%] max-w-5xl">
                <div className={headerSearchItem}>
                    <FontAwesomeIcon icon={faBed} className="text-gray-400" />
                    <input type="text" placeholder="where are you going" className="border-none outline-0 text-gray-400" />
                </div>
                <div className={headerSearchItem}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                    <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
                    <sapn onClick={()=>setOpenDate(!openDate)} className="text-gray-400 cursor-pointer">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</sapn>
                    {/* we install react-date-range and date-fns */}
                    {openDate && 
                    
                        <DateRange 
                            editableDateinput={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date} 
                            className="absolute top-12"
                        />
                    }
                </div>
                <div className={headerSearchItem}>
                    <FontAwesomeIcon icon={faBed} className="text-gray-400" />
                    <span className="text-gray-400 cursor-pointer">2 adults 2 children 1 room</span>
                 </div>
                <div className={headerSearchItem}>
                    <button className="headerbtn">Search</button>
                 </div>
            </div>
             
        </div>
        
    </div>
    
  )
}

export default Header 