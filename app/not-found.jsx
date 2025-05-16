import React from 'react'
import img from "./assets/not.jpg"
import Image from 'next/image'
import { GiAutoRepair } from 'react-icons/gi'
import Link from 'next/link'


const not_found = () => {
  return (
   <div className='flex bg-blue-100  justify-center items-center text-blue-700 w-[100vw] h-[90vh]'>
 <div className='border-2 flex'>
 
  <div className='w-40 h-40 bg-green-300 flex justify-center items-center text-5xl italic font-sans'>404 </div>
    
    <div className="text-blue-800 p-8 justify-center border-2 rounded-[30%] m-4  text-3xl border-blue-100  flex-row flex spacing-x-4">
        <GiAutoRepair className=" mr-1.5 text-3xl animate-button_hinge"/>  
        WWAP </div>

          <Link href="/" className='w-40 h-40 bg-amber-500 flex justify-center items-center text-2xl italic font-sans p-6 underline underline-offset-2 '> <button className="outline p-1 italic">home page</button></Link>
    </div>
      
 </div> 
  )
}

export default not_found