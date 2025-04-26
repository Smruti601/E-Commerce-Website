import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarosel from '../../components/HomeSectionCarousel/HomeSectionCarosel'
const Homepage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
          <HomeSectionCarosel/>
          <HomeSectionCarosel/>
        </div>
    </div>
  )
}

export default Homepage