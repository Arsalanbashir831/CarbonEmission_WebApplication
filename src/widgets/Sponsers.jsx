import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TableComponent from '../components/Table';
import ProductCard from '../components/ProductCard';

const columns = ['Organization Name', 'Organization Type', 'Primary Organization', 'Postcode/Zip', 'External Id'];

const jsonData = [
  {
    'Organization Name': 'Data 1',
    'Organization Type': 'Data 2',
    'Primary Organization': 'Data 3',
    'Postcode/Zip': 'Data 4',
    'External Id': 'Data 5',
  },
];

const Sponsers = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to show in the carousel at once
    slidesToScroll: 1,
   
  };
  return (
    <>
      <h2 className='text-2xl font-bold border-x-slate-500 '> Eco Friendly Products </h2>
<div className='w-[99%]'>


      <Slider {...settings}>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
      </Slider>
      </div>


      <h2 className='text-2xl font-bold border-x-slate-500 '>List of Eco Friendly Organizations </h2>
      <div className='w-[99%]'>
      <Slider {...settings}>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
        <div className="px-2">
          <ProductCard />
        </div>
      </Slider>
      </div>
    </>
  );
}

export default Sponsers;
