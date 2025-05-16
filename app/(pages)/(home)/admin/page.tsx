import React from 'react'

const AdminPanel = () => {
  return (
    <div className='h-[90vh] text-blue-700 bg-blue-100 flex justify-center items-center w-[100vw]'>
        <div className='flex-col border-dashed border-b gap-5 shadow-xl text-3xl border-b border-l-8 p-4  border-[#5A74B6FF] w-[70vw] h-full flex justify-center items-center text-blue-700 '>
<h1 className=' text-[#5A74B6FF]'>WAPP Admin </h1>

<a href='7' className='bg-gradient-to-r shadow-xl font-sans rounded-br-2xl from-blue-100 to-blue-300 rounded-tr-2xl p-4 w-full h-15 text-[#5A74B6FF]' >record payment</a>


<a href='7' className='bg-gradient-to-r shadow-xl font-sans rounded-br-2xl from-blue-100 to-blue-400 p-4  rounded-tr-2xl w-full h-15 text-[#546CA7FF]'>check warehouse inventory</a>


<a href='7' className='bg-gradient-to-r shadow-xl font-sans rounded-br-2xl from-blue-100 to-blue-500 p-4 rounded-tr-2xl  w-full h-15 text-[#475D93FF]'>check outlet invemtories</a>

<a href='7' className='bg-gradient-to-r shadow-xl font-sans rounded-br-2xl from-blue-100 to-blue-600 p-4 rounded-tr-2xl  w-full h-15 text-[#415484FF]'>view finacial summaries</a>



        </div>
    </div>
  )
}

export default AdminPanel