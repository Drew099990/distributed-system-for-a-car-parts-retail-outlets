import Image from 'next/image'
import React from 'react'
import img from "../../../assets/team.jpg"
import { GiAutoRepair } from 'react-icons/gi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { MdOutlineAttachEmail } from 'react-icons/md'
const Login = () => {
  return (
  <div className='text-blue-800 flex justify-center items-center h-[90vh]'>
    <div className='border-[2.3px] rounded-2xl ring-4 shadow-2xl ring-blue-200 w-[60vw] overflow-hidden  h-[65vh] flex mt-15'>
      <Image className='border w-[50%] h-[100%] opacity-95'  
      alt="login" 
      src={img}></Image>

      
      <div className='border w-[60vw] h-[65vh]'>

<form className='flex-col flex justify-between p-4'>
     <div className="text-blue-800 justify-center border-2 rounded-[30%] m-8 p-2 text-3xl border-blue-100  flex-row flex spacing-x-4">
      <GiAutoRepair className=" mr-1.5 text-3xl animate-button_hinge"/>  
      WWAP </div>

   <label className='spacing-x-4 flex-row flex' ><MdOutlineAttachEmail className='mx-2'/>Email:</label>
  <input 
  placeholder='eg. andrewmmuyunda777@gmai...'
  type="email" 
  className='my-2 border-2 rounded-2xl px-4'></input>
  
  <label className='spacing-x-4 flex-row flex' ><RiLockPasswordLine className='mx-2'/>Password:</label>
  <input 
  type="password" 
  placeholder='********'
  className='my-2 border-2 rounded-2xl px-4'></input>
  
 
   
  
  <input 
  type="submit" 
  className=' border-2 rounded-2xl w-[30%] ml-[35%] mt-2 hover:bg-blue-200 duration-300'></input>
  
</form>

      </div>
    </div>
  </div>
  )
}
export default Login