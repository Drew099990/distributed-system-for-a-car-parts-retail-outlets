"use client";
import { useState, useEffect } from 'react';
import React from 'react';

const Summary = () => {
  const [outletPayments, setOutletPayments] = useState([]);
  const [warehousePayments, setWarehousePayments] = useState([]);

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

  useEffect(() => {
    async function fetchWarehousePayments() {
      try {
        const response = await fetch('/warehousestorage');
        if (!response.ok) {
          throw new Error('Failed to fetch data from /warehousestorage');
        }
        const data = await response.json();
        setWarehousePayments(data);
      } catch (error) {
        console.error('Error fetching warehouse data:', error);
      }
    }

    fetchWarehousePayments();
  }, []);

  return (
    <div className='flex justify-around items-start p-4 w-full h-[90vh] bg-blue-100'>
      <div className='text-blue-800 w-[45%] flex flex-col'>
        <h1 className='underline font-bold text-2xl mb-4'>Outlet Payment Records</h1>
        <ul>
          {outletPayments.map(payment => (
            <li className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'
     key={payment.itemID}>
              <h2 className='text-blue-900 text-2xl'>Customer Name: {payment.customer}</h2>
              <p className='text-xs'>Item ID: {payment.itemID}</p>
              <p className='text-xs'>Quantity: {payment.quantity}</p>
              <p className='text-xs'>Method: {payment.method}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='text-blue-800 w-[45%] flex flex-col'>
        <h1 className='underline font-bold text-2xl mb-4'>Warehouse Payment Records</h1>
        <ul>
          {warehousePayments.map(payment => (
            <li className='border p-5 border-blue-700 m-2 text-xl text-blue-700 rounded-2xl flex flex-col' key={payment.itemID}>
              <h2 className='text-blue-900'>Customer Name: {payment.customer}</h2>
              <p className='text-xs'>Item ID: {payment.itemID}</p>
              <p className='text-xs'>Quantity: {payment.quantity}</p>
              <p className='text-xs'>Method: {payment.method}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Summary;