import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarouselData';
import 'react-alice-carousel/lib/alice-carousel.css';


function MainCarousel() {

    const items = mainCarouselData.map((item) => <img className='cursor-pointer' role="Presentation" src={item.image} alt=""/>)

  return (

    // const navigate 
    
    <AliceCarousel
      animationType="fadeout"
      animationDuration={800}
      disableButtonsControls
      infinite
      items={items}
      mouseTracking
      autoPlay
      autoPlayInterval={1000}
    />
  );
}

export default MainCarousel;
