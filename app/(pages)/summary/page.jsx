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
    <div className='flex bg-blue-100 justify-around items-start p-4 w-full h-fit '>
      <div className='text-blue-800 w-[45%] flex flex-col mt-20 border p-5  rounded-2xl'>
        <h1 className='underline font-bold text-2xl mb-4  text-blue-900 opacity-80'>Outlet paymment summary</h1>
        <ul>
          {outletPayments.map(payment => (
            <li className='border p-5 border-blue-700 m-2 text-xl text-blue-700 rounded-2xl flex flex-col' key={payment.itemID && payment.customer}>
              <h2 className='text-blue-900'>Customer Name: {payment.customer}</h2>
              <p className='text-xs'>Item ID: {payment.itemID}</p>
              <p className='text-xs'>Quantity: {payment.quantity}</p>
              <p className='text-xs'>Method: {payment.method}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className='text-blue-800 w-[45%] flex flex-col mt-20 border p-5 rounded-2xl'>
        <h1 className='underline font-bold text-2xl mb-4 text-blue-900 opacity-80'>Warehouse Payment summary</h1>
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