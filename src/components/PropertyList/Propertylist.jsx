import React from 'react'

const Propertylist = ({images, country, countryprop}) => {
  return (
    <div className="pList">
        <div className="rounded-[10px] overflow-hidden flex-[1] cursor-pointer">
            <img src={images} alt='countrys-images' className="w-[100%] h-[150px] object-cover" />
            <div className="pListTitles">
                <h1 className="text-[16px] font-bold ">{country}</h1>
                <h2>{countryprop} hotels</h2>
            </div>

        </div>

    </div>
  )
}

export default Propertylist