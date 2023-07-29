import React, {useState} from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import { useLocation } from 'react-router-dom'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import Searchitem from '../components/SearchItem/Searchitem'

const HotelList = () => {
  
  // locations from the header component in the navigate passing the states
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setoptions] = useState(location.state.options)
  

    //creating 8 search item components

    function eightSearchItem() {
      const searchitem = [];
      for (let i=0; i<8; i++){
        searchitem.push(<Searchitem />)
      }
      return searchitem
    }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="ListContainer flex justify-center mt-[20px]">
        <div className="listWrapper w-[100%] max-w-5xl flex gap-5">
          <div className="listSearch flex-[1] bg-[#febb02] p-2 rounded-[10px] sticky top-2 h-max">
            <h1 className="font-bold text-[20px] text-[#555] mb-2">Search</h1>
            <div className="flex flex-col gap-1 mb-[10px]">
              <label htmlFor='des'>Destination</label>
              <input id='des' type='text' placeholder={destination} className="h-12 border-0 p-1" />
            </div>
             
            <div className="flex flex-col gap-1 mb-[10px]">
              <label htmlFor='des'>Check-in-Date</label>
              <span onClick={()=>setOpenDate(!openDate)}  className="h-12 border-0 bg-white p-1 cursor-pointer"> {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && <DateRange onChange={item => setDate([item.selection])} 
              minDate={new Date()}
              ranges={date}
              />}


            </div>
            <div className="flex flex-col gap-1 mb-[10px]">
              <label>Options</label>
              <div className="p-3">

              <div className="lsoptionitem flex justify-between mb-2 text-[#555] text-[14px] ">
                <span className="lsoptionText">
                  Min price <small>Per night</small>
                </span>
                <input type='number' className="w-12" />
              </div>
              <div className="lsoptionitem flex justify-between mb-2 text-[#555] text-[14px]">
                <span className="lsoptionText">
                  Min price <small>Per night</small>
                </span>
                <input type='number' className="w-12" />
              </div>
              <div className="lsoptionitem flex justify-between mb-2 text-[#555] text-[14px]">
                <span className="lsoptionText">
                  Max price <small>Per night</small>
                </span>
                <input type='number' className="w-12" />
              </div>
              <div className="lsoptionitem flex justify-between mb-2 text-[#555] text-[14px]">
                <span className="lsoptionText">
                  Adult
                </span>
                <input type='number' min={1} placeholder={options.adult} className="w-12" />
              </div>
              <div className="lsoptionitem flex justify-between mb-2 text-[#555] text-[14px]">
                <span className="lsoptionText">
                  Children
                </span>
                <input type='number' min={0} placeholder={options.children} className="w-12" />
              </div>
              <div className="lsoptionitem flex justify-between mb-2 text-[#555] text-[14px]">
                <span className="lsoptionText">
                  Room
                </span>
                <input type='number' min={1} placeholder={options.room} className="w-12"/>
              </div>
              </div>
            </div>
            <button className="p-2 bg-blue-500 text-white rounded w-[100%]">Search</button>
             
          </div>
          <div className="listResult flex-[3]">
            {eightSearchItem()}

          </div>
        </div>
      </div>

    </div>
  )
}

export default HotelList