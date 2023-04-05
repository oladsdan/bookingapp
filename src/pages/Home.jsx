import React from 'react'
import Feature from '../components/Featured/Feature'
import FeaturedData from '../components/Data/FeaturedData'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Propertylist from '../components/PropertyList/Propertylist'
import FeaturedProperties from '../components/FeaturedProperties/FeaturedProperties'
import MailList from '../components/MailList/MailList'
import Footer from '../components/Footer/footer'




const Home = () => {

  function propertiesloop(){
    const lopx = [];
    for (let i = 1; i < 5; i++) {
      lopx.push(<FeaturedProperties/>)
    }
    return lopx
  }

  function Footerloop(){
    const foot =[];
    for (let i =0; i < 5; i++){
      foot.push(<Footer />)
    }
    return foot
  }

  
  const Featurez = FeaturedData.map((feature) => {
    // feature.id <=3 ? <Feature key={feature.id} images={feature.images} country={feature.country} countryprop={feature.countryProperties} /> : "none"
    
    
    if (feature.id <=3){
      return<>
        <Feature key={feature.id} images={feature.images} country={feature.country} countryprop={feature.countryProperties} /> 
      </>
 
    } else{}

  })

  const Properties = FeaturedData.map((properties)=> {
    if(properties.id >3) {
      return <>
        <Propertylist key={properties.id} images={properties.images} country={properties.country} countryprop={properties.countryProperties} />
      </>
    } else{}

  })

  return (
    <div>
        <Navbar/>
        <Header />
        <div className='mt-12 flex items-center flex-col justify-center gap-8'>
          <div className="flex flex-row gap-5 justify-between items-center w-[100%] max-w-5xl ">
            {
              Featurez
            }
          </div>
          <h1 className="w-[1024px] text-[20px] font-bold">Browse by property type</h1>
          <div className="w-100%] max-w-5xl flex justify-between gap-8">
            {
              Properties
            }

          </div>
          <h1 className="w-[1024px] text-[20px] font-bold">Homes guests love</h1>
          <div className="w-[100%] max-w-5xl flex justify-between gap-5">
            {propertiesloop()}
          </div>
          <MailList />
          <div className="w-[100%] max-w-5xl text-[12px]">
            <div className='flex w-[100%] justify-between mb-12'>
              {Footerloop()}
            </div>
            <div className=''>Copyright @ 2022 iambooking </div>
            
          </div>
        
        </div>
    </div>
  )
}

export default Home