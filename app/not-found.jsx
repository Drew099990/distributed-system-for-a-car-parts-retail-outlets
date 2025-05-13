import React from 'react'
import img from "./assets/not.jpg"
import Image from 'next/image'


const not_found = () => {
  return (
   <div>
     <Image  className='w-full' alt="page not found" src={img}></Image>
   </div>
  )
}

export default not_found