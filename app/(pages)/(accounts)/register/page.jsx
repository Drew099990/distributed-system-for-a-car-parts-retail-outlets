
import Image from 'next/image'
import React from 'react'
import img from "../../../assets/car.jpg"
import img2 from "../../../assets/retail.jpg"
import img3 from "../../../assets/warehouse.jpg"
import img4 from "../../../assets/manager.jpg"



import { GiAutoRepair } from 'react-icons/gi'
import { FaNetworkWired, FaUpload } from 'react-icons/fa'
import { LuPhone } from 'react-icons/lu'
import { FiUpload } from 'react-icons/fi'
import { MdOutlineAttachEmail, MdPerson, MdPersonOutline } from 'react-icons/md'
import { RiLockPasswordLine } from 'react-icons/ri'
const Register = () => {


  return (
  <div className='text-blue-800 flex justify-center items-center h-[90vh]'>
    <div  className='border-[2.3px] rounded-2xl ring-4 shadow-2xl ring-blue-200 w-[60vw] overflow-hidden  h-[72vh] flex mt-15'>
      <Image className='border w-[50%] h-[100%] opacity-90'  
      alt="login"
       src={img}></Image>

      
      <div className='border w-[60vw] h-[72vh]'>

<form className='flex-col flex justify-between p-4'>
     <div className="text-blue-800 justify-center border-2 rounded-[30%] m-4 p-2 text-3xl border-blue-100  flex-row flex spacing-x-4">
      <GiAutoRepair className=" mr-1.5 text-3xl animate-button_hinge"/>  
      WWAP </div>
<label className='spacing-x-4 flex-row flex'><FiUpload className='mx-2'/>upload image: </label >
  <input 
  type="image" 
  placeholder='upload profile picture'
  className='my-2 border-2 rounded-2xl px-4'></input>
  
   <label className='spacing-x-4 flex-row flex' ><MdPersonOutline className='mx-2 w-4.5 h-4.5'/> Full name:</label >
  <input 
  type="text" 
  placeholder='eg. andrew muyunda'
  className='my-2 border-2 rounded-2xl px-4'></input>
  
   <label className='spacing-x-10 flex-row flex' ><LuPhone className='mx-2 '/>Phone number: </label >
  <input 
  placeholder='eg. +260777290515'
  type="number" 
  className='my-2 border-2 rounded-2xl px-4'></input>
  
   <label className='spacing-x-4 flex-row flex' ><MdOutlineAttachEmail className='mx-2'/>Email:</label >
  <input 
  placeholder='eg. andrewmmuyunda777@gmai...'
  type="email" 
  className='my-2 border-2 rounded-2xl px-4'></input>
  
  <label className='spacing-x-4 flex-row flex' ><RiLockPasswordLine className='mx-2'/>Password:</label >
  <input 
  type="password" 
  placeholder='********'
  className='my-2 border-2 rounded-2xl px-4'></input>
  
   <label className='spacing-x-4 flex-row flex' ><FaNetworkWired className='mx-2'/> current postion:</label >
  <select 
  
  className='my-2 border-2 rounded-2xl p-1'>
<option>retail worker</option>
<option>warehouse worker</option>
<option>manager</option>
  </select>
  
  
   
  
  <input 
  type="submit" 
  className=' border-2 rounded-2xl w-[30%] ml-[35%] mt-2 hover:bg-blue-200 duration-300 '></input>
  
</form>

      </div>
    </div>
  </div>
  )
}
export default Register