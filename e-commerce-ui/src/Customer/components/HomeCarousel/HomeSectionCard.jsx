import React from 'react';

function HomeSectionCard() {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img 
          className="object-cover object-top w-full h-full" 
          src="https://imagescdn.allensolly.com/img/app/product/4/493432-3694265.jpg" 
          alt="Home Section"
        />
      </div>
      <p className="text-center text-sm p-2">
        Men Blue Regular Fit Solid Full Sleeves Formal Shirts
      </p>
    </div>
  );
}

export default HomeSectionCard;
