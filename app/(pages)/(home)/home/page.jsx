import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { FaCartFlatbed } from 'react-icons/fa6';
import { IoReceiptOutline } from 'react-icons/io5';
import { MdOutlineInventory2, MdOutlinePayments, MdPayment, MdPayments } from 'react-icons/md';

export default async function Home() {
  const user = await currentUser();

  return (
    <div className='flex justify-center items-center h-screen w-full bg-[#2f406b] text-blue-900'>
      <div className=' animate-slide_u1 flex-col gap-5 border-8 border-double border-[#8c96af] shadow-xl p-6 w-11/12 max-w-3xl flex justify-center items-center'>
        <h1 className='text-blue-200 opacity-700 mb-4'>
          [{user ? `Signed in as ${user.id}` : 'Loading...'}]
        </h1>
        
        <h1 className='text-blue-100 text-2xl mb-5 '>WAPP Stores</h1>

        <NavButton href='/payment' label='Record Payment' icon={<MdPayment />}/>
        <NavButton href='/home/view' label='View Payments' icon={<IoReceiptOutline />}/>
        <NavButton href='/outlet_inventory' label='Check Inventory' icon={<MdOutlineInventory2/>} />
        <NavButton href='/order' label= "Quick Restock"  icon={<FaCartFlatbed></FaCartFlatbed>}/>
      </div>
    </div>
  );
}

const NavButton = ({ href, label ,icon}) => (
  <a
    href={href}
    className='flex items-center justify-start gap-2 bg-gradient-to-r from-blue-100 to-blue-300 shadow-xl rounded-2xl p-4 w-full text-[#475D93FF] hover:from-blue-200 hover:to-blue-400 transition duration-200'
    aria-label={label}
  >
   {icon} {label}
  </a>
);