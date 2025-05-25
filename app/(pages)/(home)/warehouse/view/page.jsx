"use client";

import React, { useEffect, useState } from 'react';

function StudentList() {
    const [Payments, setPayments] = useState([]);

    useEffect(() => {
        async function fetchPayments() {
            try {
                const response = await fetch('/warehousestorage');
                const data = await response.json(); 
                setPayments(data); // Set the array of Payments 
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchPayments();
    }, []);

    return (
       <div className='flex h-fit justify-center items-center text-blue-950 opacity-90'>
         <div className="mt-30 w-[70vw] flex-cols justify-center items-center text-4xl">
            <h1 className='underline font-bold font-serif ' style={{fontFamily:""}}>Payment Records</h1>
            <ul>
                {Payments.map(payment => (
                    <li className='animate-slide_r1 border p-5 border-blue-700 m-6 text-2xl text-blue-700 rounded-2xl flex flex-col' key={payment.itemID && payment.quantity}> {/* Adjust based on your keys */}
                       <h1  className='text-blue-900'> Customer Name: {payment.customer}</h1> 
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

export default StudentList;