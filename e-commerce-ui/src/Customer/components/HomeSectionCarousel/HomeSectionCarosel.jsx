import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeCarousel/HomeSectionCard';

const HomeSectionCarousel = () => {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 4 },
    };

    const items = [1, 2, 3, 4, 5].map((item, index) => (
        <HomeSectionCard key={index} />
    ));

    return (
        <div className=" relative px-4 lg:px-8 ">
            <div className='relative p-5'>
                <AliceCarousel
                    animationType="fadeout"
                    animationDuration={800}
                    disableButtonsControls
                    infinite
                    mouseTracking
                    autoPlay
                    autoPlayInterval={2000}
                    autoPlayStrategy="none"
                    items={items}
                    responsive={responsive}
                />
            </div>
        </div>
    );
};

export default HomeSectionCarousel;
