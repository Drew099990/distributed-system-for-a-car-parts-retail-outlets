import React from 'react'
import { GiAutoRepair } from 'react-icons/gi'

const Payment = () => {
  return (
     <div className='text-blue-800  flex justify-center items-center h-[90vh] '>
   <form className='border border-4  border-[#5A74B6FF] rounded-2xl-2 gap-2 flex-col font-bold italic w-120 h-130 rounded-2xl justify-center flex items-center'>
       <div className="origin-left m-5 border-2 rounded-[30%] p-2 text-3xl border-blue-100 text-blue-100 flex-row flex spacing-x-4"><GiAutoRepair className=" mr-1.5 text-3xl animate-button_hinge"/>  WWAP </div>
            
    <h1 className='text-3xl font-bold underline text-[#6676A2FF]'>record transaction</h1> 

       <label className=' text-[#5A74B6FF]'>Customer name</label>
   <input type='text'className='border rounded-2xl'></input>

      <label className=' text-[#5A74B6FF]'>itemID</label>
   <input type='text'className='border rounded-2xl'></input>

      <label className=' text-[#5A74B6FF]'>quantity</label>
   <input type='text'className='border rounded-2xl'></input>
   
<label className=' text-[#5A74B6FF]'>payment method</label>
      <select className='border rounded-2xl w-50 h-7 text-2xs text-[#5A74B6FF] pl-4'>
<option>cash</option>
<option>card</option>
<option>mobile money</option>

      </select>
   
   <button className='border-3 rounded-2xl p-2 text-[#5A74B6FF] border-[#5A74B6FF]'> save transaction</button>
    </form>

   </div>
  )
}

export default Payment