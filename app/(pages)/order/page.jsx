"use client"

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
import { FaBuyNLarge, FaCartFlatbed } from 'react-icons/fa6';
import { redirect } from 'next/navigation';



const Item = ({ title, imageSrc ,call ,id }) => {
  return (
    <div className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'>
      <h2 className='text-xl font-bold font-sans border-b-2 m-2 border-blue-300'>{title}</h2>
      <div className='flex flex-col items-center justify-center'>
        <Image src={imageSrc} alt={title} width={220} height={200} className='mb-2 rounded-2xl' />
        <form className='flex flex-col ' onSubmit={call}>
          <label>itemID:</label>
          <input name='itemID' type='text' readOnly
          className='m-5 bg-blue-200 outline rounded-2xl p-1 opacity-80 h-5 bg-gray-300 pl-2' value={id} />
          <label>Quantity:</label>
          <input name='quantity' type='number' required
          className='m-5 bg-blue-200 outline rounded-2xl p-1' placeholder='10...' />

         
          <button 
          type='submit' 
          className='ring-4 ring-blue-700 m-5 bg-blue-200 outline rounded-2xl p-1 flex justify-center items-center gap-2 ' 
          placeholder='10..'>Order <FaCartFlatbed className='text-2xl opacity-80'></FaCartFlatbed></button>
        </form>
      </div>
    </div>
  );
};

const Order = () => {



  const submit = async (e) => {
    
    
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
 
    try {
      const response = await fetch("/makeOrder", {
        method: "POST",
        body: JSON.stringify({
          itemID: formdata.get("itemID"),
          quantity: formdata.get("quantity")

       
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

    } catch (error) {
      setMessage(`Error: ${error.message}`);

    
  }

}

  return (
    <div className='h-full text-blue-900 mt-20 flex justify-center flex-wrap gap-8 items-center bg-blue-100'>
      
      <h1 className='text-2xl font-bold font-sans animate-bounce'> Order </h1>
      
      <Item title="Toyota camry XSe 900 engine" imageSrc={img} 
      call={() =>submit(this)}   id="11"/>
      <Item title="Ford mutang gt engine" imageSrc={img2} 
      id="22"
      call={() => submit(this)}   />
      <Item title="transimission" imageSrc={img3} 
      call={() => submit(this)} 
      id="33" />
      <Item title="valeo f67" imageSrc={img4} 
      call={() => () => submit(this)} id="44" />
      <Item title="nissen 79g" imageSrc={img5} 
      call={() => submit(this)} id="55"/>
      <Item title="enkei tire" imageSrc={img6} 
      call={() => submit(this)} id="66" />
      <Item title="michelin 76v tire" imageSrc={img7} 
      call={() => submit(this)} id="77"/>
      <Item title="falken 5c tire" imageSrc={img8} 
      call={() => submit(this)} id="88" />
       <Item title="falken 5c tire" imageSrc={img8} 
       call={() => submit(this)} id="99" />

  <div className=" hover:before:content-['request_is_processed_in_2_to_3_days_on_average🛠']
hover:before:text-[0.87rem]
hover:before:px-4
hover:before:border-2
hover:text-blue-200
hover:before:border-blue-500
hover:before:rounded-2xl
hover:before:text-read-800 font-bold font-sans hover:bg-blue-950 hover:text-blue-200 rounded-2xl   mt-50 z-30 fixed top-0 right-8 text-2xl opacity-80 text-blue-800 justify-center items-center flex">
   <BiInfoCircle />

  </div>
    </div>
  );
}



export default Order;