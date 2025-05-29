"use client"; 
import { redirect } from 'next/navigation';
import React, { useState } from 'react';
import { GiAutoRepair } from 'react-icons/gi';
import { IoPersonAddOutline } from 'react-icons/io5';
import { MdNumbers } from 'react-icons/md';
import { RiAlignItemLeftLine } from 'react-icons/ri';

const Payment: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const customerName = formdata.get("customer")?.toString() || '';

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch("/warehousestorage", {
        method: "POST",
        body: JSON.stringify({
          customer: customerName,
          itemID: formdata.get("itemID"),
          quantity: formdata.get("quantity"),
          method: formdata.get("method"),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to save transaction');
      }

      setMessage('Transaction recorded successfully!');
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
          setTimeout( redirect("warehouse/view"),5000)
 
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gradient-to-b from-blue-100 to-blue-200'>
      <form 
        onSubmit={submit} 
         className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'
    >
        <div className="flex items-center space-x-2">
          <GiAutoRepair className="text-4xl text-blue-900" />
          <h1 className='text-2xl font-bold text-blue-900'>WWAP</h1>
        </div>
          
        <h2 className='text-xl font-semibold text-gray-700'>Record Transaction</h2> 

        <label className=' text-gray-600 flex gap-2'><IoPersonAddOutline/> Customer Name</label>
        <input 
          name='customer' 
          type='text' 
          className='border bg-blue-200 border-gray-300 rounded-md p-2 w-full' 
          required 
        />

        <label className=' text-gray-600 flex gap-2'><RiAlignItemLeftLine/> Item ID</label>
        <input 
          name='itemID' 
          type='text' 
          className='border bg-blue-200 border-gray-300 rounded-md p-2 w-full' 
          required 
        />

        <label className=' text-gray-600 flex gap-2'><MdNumbers/>Quantity</label>
        <input 
          name='quantity' 
          type='number' 
          className='border bg-blue-200 border-gray-300 rounded-md p-2 w-full' 
          required 
        />

        <label className='block text-gray-600'>Payment Method</label>
        <select 
          name='method' 
          className='border bg-blue-200 border-gray-300 rounded-md p-2 w-full'
        >
          <option value="cash">Cash</option>
          <option value="card">Card</option>
          <option value="mobile money">Mobile Money</option>
        </select>
   
        <button
          type='submit' 
          className='w-full mt-6 bg-blue-800 text-white font-semibold rounded-md p-2 hover:bg-blue-700 transition duration-200'
          disabled={loading}
        >
          {loading ? 'Saving...' : 'Save Transaction'}
        </button>

        {message && <p className='text-center text-green-600'>{message}</p>}
      </form>
    </div>
  );
};

export default Payment;