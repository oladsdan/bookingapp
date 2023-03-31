import React from 'react'
import Feature from '../components/Featured/Feature'
import FeaturedData from '../components/Data/FeaturedData'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header />
        <div className='mt-12 flex items-center flex-col justify-center gap-8'>
          <div className="flex flex-row gap-5 justify-between items-center w-[100%] max-w-5xl ">
            {
              FeaturedData.map((feature) => (
                <Feature key={feature.id} images={feature.images} country={feature.country} countryprop={feature.countryProperties} /> 
                
              ))
              
            }
          </div>
          <h1 className="w-[1024px] text-[20px] font-bold">Browse by property type</h1>
        </div>
    </div>
  )
}

export default Home