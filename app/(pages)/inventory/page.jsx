import Image from 'next/image';
import React from 'react';
import img from "../../assets/engine1.png";
import img2 from "../../assets/engine2.png";
import img3 from "../../assets/tire.png";
import img4 from "../../assets/tire2.png";
import img5 from "../../assets/tire3.png";
import img6 from "../../assets/tc.png";

const ItemCard = ({ imgSrc, title, altText }) => (
  <div className='flex flex-col w-[20vw] opacity-90 bg-blue-900 text-white border-2 p-4 rounded-2xl border-blue-900 justify-around items-center mx-2'>
    <Image className='rounded-2xl ' src={imgSrc} alt={altText} width={200} height={200} />
    <h3 className='text-lg'>{title}</h3>
  </div>
);

const Inventory = () => {
  return (
    <div className='flex justify-center items-start h-full w-full'>
      <div className='text-blue-800 w-[60vw] m-10 flex flex-col'>
        <h1 className='text-2xl font-bold mb-4'>Inventory</h1>

        <Section title="Engines">
          <ItemCard imgSrc={img} title="Engine 1" altText="Engine 1" />
          <ItemCard imgSrc={img2} title="Engine 2" altText="Engine 2" />
        </Section>

        <Section title="Tires">
          <ItemCard imgSrc={img3} title="Tire 1" altText="Tire 1" />
          <ItemCard imgSrc={img4} title="Tire 2" altText="Tire 2" />
          <ItemCard imgSrc={img5} title="Tire 3" altText="Tire 3" />
        </Section>

        <Section title="Radiators">
          <ItemCard imgSrc={img6} title="Transmission Converter" altText="Radiator 1" />
        </Section>
        
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className='flex flex-col mb-8'>
    <h2 className='text-xl font-semibold border-b-2 m-2 border-blue-300'>{title}</h2>
    <div className='flex flex-row justify-center'>
      {children}
    </div>
  </div>
);

export default Inventory;