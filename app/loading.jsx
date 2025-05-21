import React from 'react'
import { GiAutoRepair } from 'react-icons/gi'

const Loading = () => {
  return (
   <div className='flex bg-blue-100  justify-center items-center text-blue-700 w-[100vw] h-[90vh]'>
     
                 <div className="text-blue-800 p-8 justify-center border-2 rounded-[30%] m-4  text-3xl border-blue-100  flex-row flex spacing-x-4">
                        <GiAutoRepair className=" mr-1.5 text-3xl animate-button_hinge"/>  
                        Loading </div>
    </div>
  )
}

export default Loading