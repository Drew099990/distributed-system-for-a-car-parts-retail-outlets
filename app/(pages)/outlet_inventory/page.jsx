import Image from 'next/image';
import React from 'react';
import img from "../../assets/engine1.png";
import img2 from "../../assets/engine2.png";
import img3 from "../../assets/tire.png";
import img4 from "../../assets/tire2.png";
import img5 from "../../assets/tire3.png";
import img6 from "../../assets/tc.png";
import img7 from "../../assets/radiator1.png";
import img8 from "../../assets/radiator2.png";

const ItemCard = ({ imgSrc, title, altText,price ,count}) => (
<div className='animate-slide_u1 flex flex-col mb-8 mt-5 border-2 hover:text-[#4f8774] rounded-2xl m-6 border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'>
  <h1 className=' font-bold flex justify-center opacity-90 text-2xl outline-2 outline-blue-400 rounded-2xl shadow-2xl font-serif'>Count: {count}</h1>
    <Image className='rounded-2xl ' src={imgSrc} alt={altText} width={200} height={200} />
    <h3 className='text-lg'>{title}</h3>
    <h4>{price}</h4>
  </div>
);

const Inventory = () => {
  return (
    <div className='flex  justify-center items-start h-full w-full bg-blue-100 p-4 '>
      <div className='text-blue-800 w-[60vw] m-10 flex flex-col'>
         <h1 className=' font-bold mb-5 mt-20 flex justify-end opacity-70 text-5xl outline-2 outline-blue-400 rounded-2xl shadow-2xl font-serif px-2'> Outlet</h1>

        <Section title="Engines">
          <ItemCard count="1" imgSrc={img} title="Toyota camry XSe 900 engine" price="k3500" altText="Engine 1" />
          <ItemCard count="3" imgSrc={img2} title="Ford mutang gt engine" price="k4000" altText="Engine 2" />
        </Section>

     
        <Section title="Tires">
          <ItemCard count="55" imgSrc={img3} title="enkei tire" price="k500" altText="Tire 1" />
          <ItemCard count="44" imgSrc={img4} title="michelin 76v tire" price="k400" altText="Tire 2" />
          <ItemCard count="6" imgSrc={img5} title="falken 5c tire" price="k450" altText="Tire 3" />
        </Section>

        <Section title="Transimission Convertors">
          <ItemCard count="20" imgSrc={img6} title="Transmission Converter" price="k2000" altText="Radiator 1" />
        </Section>

           <Section title="Radiators">
          <ItemCard count="1" imgSrc={img7} title="valeo f67" price="k2000" altText="Radiator 1" />
   <ItemCard count="8" imgSrc={img8} title="nissen 79g" price="k2000" altText="Radiator 1" />
              
       
        </Section>
        
         

      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className='flex flex-row mb-8 hover:text-2xl'>
    
    <h2 className='text-2xl font-bold font-sans border-b-2 m-2 border-blue-300 opacity-80 underline underline-offset-2'>{title}</h2>
    <div className='flex flex-row justify-center'>
      {children}
    </div>
  </div>
);

export default Inventory;