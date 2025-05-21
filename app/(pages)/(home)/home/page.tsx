
import { auth, currentUser } from '@clerk/nextjs/server';

export default async function Home() {
  

  const user = await currentUser()

  return (
    <div className='h-[90vh] text-blue-900 bg-blue-100 flex justify-center items-center w-[100vw]'>
      <div className='flex-col border-dashed border-b gap-5 shadow-xl text-3xl border-b border-l-8 p-4 border-[#5A74B6FF] w-[70vw] h-full flex justify-center items-center text-blue-700'>
        <h1 className='fixed left-70 top-23 text-[1rem] text-blue-900 opacity-700'>
          [{user ? `Signed in as ${user.firstName}` : 'Loading...'}]
        </h1>
        
        <h1 className='text-[#5A74B6FF]'>WAPP stores</h1>

        <a
          style={{ fontFamily: "sans-serif" }}
          href='/record-payment'
          className='bg-gradient-to-r shadow-xl font-sans rounded-br-2xl from-blue-100 to-blue-300 rounded-tr-2xl p-4 w-full h-15 text-[#475D93FF]'
        >
          Record Payment
        </a>

 <a
          style={{ fontFamily: "sans-serif" }}
          href='/home/view'
          className='bg-gradient-to-r shadow-xl font-sans rounded-br-2xl from-blue-100 to-blue-400 rounded-tr-2xl p-4 w-full h-15 text-[#475D93FF]'
        >
          View Payments
        </a>

        <a
          style={{ fontFamily: "sans-serif" }}
          href='/inventory'
          className='bg-gradient-to-r shadow-xl font-sans rounded-br-2xl from-blue-100 to-blue-500 p-4 rounded-tr-2xl w-full h-15 text-[#40527FFF]'
        >
          Check Inventory
        </a>

        <a
          style={{ fontFamily: "sans-serif" }}
          href='/check-outlet-inventories'
          className='bg-gradient-to-r shadow-xl font-sans rounded-br-2xl from-blue-100 to-blue-600 p-4 rounded-tr-2xl w-full h-15 text-[#2f406b]'
        >
          Check Outlet Inventories
        </a>
      </div>
    </div>
  );
}

