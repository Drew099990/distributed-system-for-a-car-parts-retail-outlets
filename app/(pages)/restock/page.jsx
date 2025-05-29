"use client";

import React, { useEffect, useState } from 'react';

function Restock() {
    const [Payments, setPayments] = useState([]);

    useEffect(() => {
        async function fetchPayments() {
            try {
                const response = await fetch('/makeOrder');
                const data = await response.json(); 
                setPayments(data); // Set the array of Payments 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchPayments();
    }, []);

   async function dispatch(){
    try {
        const response = await fetch('/makeOrder', {
            method: 'DELETE',
        });

        if (!response.ok) {
            throw new Error('Failed to delete records');
        }

        const data = await response.json();
        console.log(data.message); // Handle success message
    } catch (error) {
        console.error(error); // Handle error
    
}
    }
    return (


       <div className='flex h-fit justify-center items-center text-blue-950 opacity-90 bg-blue-100'>
         <div className="mt-30 w-[70vw] flex-cols justify-center items-center text-4xl">
            <h1 className='underline font-bold font-serif '
             style={{fontFamily:""}}>Pending requests</h1>
            <ul>
                {Payments.map(payment => (
                    <li 
                    className='flex flex-col  animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'
                   key={payment.id}> 
                       <h1  className='text-blue-900 text-2xl'> Restock request</h1> 
                       <p className='text-xs'>Item ID: {payment.itemID}</p>
                       <p  className='text-xs'>Quantity: {payment.quantity}</p>
                       <p  className='text-xs'>, Date: {payment.created_at}</p>
                    </li>
                ))}
            </ul>
            <button 
            onClick={dispatch}
            className='text-2xl bg-blue-900 mt-6 rounded-xl px-2 text-blue-100 ring-4 ring-blue-200 m-3'>dispatch</button>
        </div>
       </div>
    );
}

export default Restock;