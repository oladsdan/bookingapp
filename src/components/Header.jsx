import React, {useState} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faBed, faCalendarDays, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'; // used for transferring the date into a readable strings
import { useNavigate } from 'react-router-dom';

const Header = ({type}) => {
    
    function handleOption(name, operation) {
        setOptions((prev) => { return {
            ...prev, [name]: operation === "i" ? options[name] + 1 : options[name]-1

        }})
    }
    
    
    const [openDate, setOpenDate] = useState(false)  
    const [destination, setDestination] = useState("")  

    // used for the react-date-rangge library
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    //this is used for changing the options of the adult children state
    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate() // this is used to redirect our components to others

    const handleSearch = () => {
        navigate("/hotels", {state:{destination, date,options}})

    }


    const active = "border-2 border-solid border-white rounded-[20px]"

    const headerSearchItem = "flex items-center gap-[10px]"

    const optionCounterButton = "w-[30px] h-[30px] border-2 border-solid border-blue text-blue-400"
                    

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

            { type !== "list" &&
                <>
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
                            <input type="text" placeholder="where are you going" className="border-none outline-0 text-gray-400" 
                             onChange={(e) => setDestination(e.target.value)}/>
                        </div>
                        <div className={headerSearchItem}>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                            <FontAwesomeIcon icon={faCalendarDays} className="text-gray-400" />
                            <span onClick={()=>setOpenDate(!openDate)} className="text-gray-400 cursor-pointer">{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {/* we install react-date-range and date-fns */}
                            {openDate && 
                            
                                <DateRange 
                                    editableDateinput={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date} 
                                    className="absolute top-12 z-[2]"
                                    minDate={new Date()}
                                />
                            }
                        </div>
                        <div className={headerSearchItem}>
                            <FontAwesomeIcon icon={faBed} className="text-gray-400" />
                            <span onClick={()=> setOpenOptions(!openOptions)} className="text-gray-400 cursor-pointer">{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                            
                            {openOptions && 
                                <div className="absolute top-10 bg-white text-gray-400 rounded-md shadow-md z-[2]">
                                <div className="optionItem w-52 m-2 flex justify-between items-center">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter flex items-center gap-2 text-xs text-black">
                                        <button className={`${optionCounterButton} disabled:cursor-not-allowed `} 
                                        disabled={options.adult <= 1} onClick={()=> handleOption("adult", "d")}>-</button>
                                        <button className="optionCounterNumber">{options.adult}</button>
                                        <button className={optionCounterButton} onClick={()=> handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem w-52 m-2 flex justify-between items-center">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter flex items-center gap-2 text-xs text-black">
                                        <button className={`${optionCounterButton} disabled:cursor-not-allowed `} onClick={()=> handleOption("children", "d")} 
                                        disabled={options.children <=0 } >-</button>
                                        <button className="optionCounterNumber">{options.children}</button>
                                        <button className={optionCounterButton} onClick={()=> handleOption("children", "i")} >+</button>
                                    </div>
                                </div>
                                <div className="optionItem w-52 m-2 flex justify-between items-center">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter flex items-center gap-2 text-xs text-black">
                                        <button className={`${optionCounterButton} disabled:cursor-not-allowed `} onClick={()=> handleOption("room", "d")}
                                        disabled={options.room <=1 }>-</button>
                                        <button className="optionCounterNumber">{options.room}</button>
                                        <button className={optionCounterButton} onClick={()=> handleOption("room", "i")}>+</button>
                                    </div>
                                </div>

                            </div>
                                
                            }
                            
                        </div>
                        <div className={headerSearchItem}>
                            <button className="bg-blue-500 text-white w-[100px] rounded-lg" onClick={handleSearch}>Search</button>
                        </div>
                    </div>
                    
                
                </>
            }
             
        </div>
        
    </div>
    
  )
}

export default Header 