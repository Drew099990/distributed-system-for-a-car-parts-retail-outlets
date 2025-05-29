import React from 'react';
import Image from 'next/image';

import img from "../../assets/engine1.png";
import img2 from "../../assets/engine2.png";
import img3 from "../../assets/transission convertor2.png";
import img4 from "../../assets/radiator1.png";
import img5 from "../../assets/radiator2.png";
import img6 from "../../assets/tire.png";
import img7 from "../../assets/tire2.png";
import img8 from "../../assets/tire3.png";
import { BiInfoCircle } from 'react-icons/bi';
import { FaAddressCard } from 'react-icons/fa';
import { FaCartFlatbed } from 'react-icons/fa6';
import { CiMoneyBill } from 'react-icons/ci';

const Item = ({ title, imageSrc }) => (
  <div className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'>
    <h2 className='text-xl font-semibold border-b-2 m-2 border-blue-300'>{title}</h2>
    <div className='flex flex-col items-center justify-center'>
      <Image src={imageSrc} alt={title} width={220} height={200} className='mb-2 rounded-2xl' />
      <form className='flex flex-col '>
        <label>Price:</label>
        <input type='text' className='m-5 bg-blue-200 outline rounded-2xl p-1' placeholder='$444...' />
        <label>Discount Percentage:</label>
        <input type='text' className='m-5 bg-blue-200 outline rounded-2xl p-1 ' placeholder='10..' />
      <button 
             type='submit' 
             className='ring-4 hover:opacity-100 ring-blue-800 m-5 bg-blue-200 outline rounded-2xl p-1 flex opacity-85   justify-center items-center gap-2 ' 
             placeholder='10..'>Set <CiMoneyBill className='text-2xl opacity-80'/></button>
          </form>
    </div>
  </div>
);

const Pricer = () => {
  return (
    <div className='h-full text-blue-900 mt-20 flex justify-center flex-wrap gap-9 items-center bg-blue-100'>
      
      <h1 className='text-2xl font-bold font-sans animate-bounce'> Quick update </h1>
      
      <Item title="Toyota camry XSe 900 engine" imageSrc={img} />
      <Item title="Ford mutang gt engine" imageSrc={img2} />
      <Item title="transimission" imageSrc={img3} />
      <Item title="valeo f67" imageSrc={img4} />
      <Item title="nissen 79g" imageSrc={img5} />
      <Item title="enkei tire" imageSrc={img6} />
      <Item title="michelin 76v tire" imageSrc={img7} />
      <Item title="falken 5c tire" imageSrc={img8} />
       <Item title="falken 5c tire" imageSrc={img8} />


    </div>
  );
}



export default Pricer;