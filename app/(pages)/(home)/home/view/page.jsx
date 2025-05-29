"use client";

import React, { useEffect, useState } from 'react';

function PaymentList() {
    const [Payments, setPayments] = useState([]);

    useEffect(() => {
        async function fetchPayments() {
            try {
                const response = await fetch('/outlet');
                const data = await response.json(); 
                setPayments(data); // Set the array of Payments directly
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchPayments();
    }, []);

    return (
       <div className='flex justify-center items-center text-blue-950 opacity-90 bg-blue-100'>
         <div className="mt-30 w-[70vw] flex-cols justify-center items-center text-4xl">
            <h1 className='underline font-bold font-serif ' style={{}}>Payment Records</h1>
            <ul>
                {Payments.map(payment => (
                    <li  className='flex flex-col animate-slide_u1 mb-8 mt-5 border-2 rounded-2xl border-blue-600 opacity-80 shadow-blue-900 hover:scale-110 duration-300 transition ring-neutral-200 p-4 ring-4 shadow-2xl'
     key={payment.itemID && Math.random()}> {/* Adjust based on your keys */}
                       <h1  className='text-blue-900 text-2xl'> Customer Name: {payment.customer}</h1> 
                       <p className='text-xs'>Item ID: {payment.itemID}</p>
                       <p  className='text-xs'>Quantity: {payment.quantity}</p>
                       <p  className='text-xs'>, Method: {payment.method}</p>
                    </li>
                ))}
            </ul>
        </div>
       </div>
    );
}

export default PaymentList;