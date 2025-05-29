"use client";
import { useState, useEffect } from 'react';
import React from 'react';

const Summary = () => {
  const [outletPayments, setOutletPayments] = useState([]);
  const [warehousePayments, setWarehousePayments] = useState([]);


  useEffect(() => {
    async function fetchWarehousePayments() {
      try {
        const response2 = await fetch('/warehousestorage');
      
        const data = await response2.json();
        setWarehousePayments(data);
      } catch (error) {
        console.error('Error fetching warehouse data:', error);
      }
    }

    fetchWarehousePayments();
  }, []);

  useEffect(() => {
    async function fetchOutletPayments() {
      try {
        const response = await fetch('/outlet');
        if (!response.ok) {
          throw new Error('Failed to fetch data from /outlet');
        }
        const data = await response.json();
        setOutletPayments(data);
      } catch (error) {
        console.error('Error fetching outlet data:', error);
      }
    }

    fetchOutletPayments();
  }, []);


  return (
    <div className='flex bg-blue-100 justify-around items-start p-4 w-full h-fit '>
      <div className='text-blue-800 w-[45%] flex flex-col mt-20 border p-5  rounded-2xl'>
        <h1 className='underline font-bold text-2xl mb-4  text-blue-900 opacity-80 font-serif'>Outlet summary</h1>
        <ul>
          {outletPayments.map(payment => (
            <li  className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'
             key={payment.itemID &&Math.random()}>
              <h2 className='text-blue-900'>Customer Name: {payment.customer}</h2>
              <p className='text-xs'>Item ID: {payment.itemID}</p>
              <p className='text-xs'>Quantity: {payment.quantity}</p>
              <p className='text-xs'>Method: {payment.method}</p>
            </li>
          ))}
          
        </ul>
        <div  className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'
             >
              <h2 className='text-blue-900'>Current Stock count: 200</h2>

            </div>
      </div>

      <div className='text-blue-800 w-[45%] flex flex-col mt-20 border p-5 rounded-2xl'>
        <h1 className='underline font-bold text-2xl mb-4 text-blue-900 opacity-80 font-serif'>Warehouse summary</h1>
        <ul>
          {warehousePayments.map(payment => (
            <li  className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl' key={payment.itemID &&Math.random()}>
              <h2 className='text-blue-900'>Customer Name: {payment.customer}</h2>
              <p className='text-xs'>Item ID: {payment.itemID}</p>
              <p className='text-xs'>Quantity: {payment.quantity}</p>
              <p className='text-xs'>Method: {payment.method}</p>
            </li>
          ))}
        </ul>
        <div  className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'
             >
              <h2 className='text-blue-900'>Current Stock count: 812</h2>

            </div>

      </div>
      
    </div>
  );
};

export default Summary;
