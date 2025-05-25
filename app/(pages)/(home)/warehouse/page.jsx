
import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { IoReceiptOutline } from 'react-icons/io5';
import { MdOutlineInventory2, MdPayment } from 'react-icons/md';

export default async function Warehouse() {
  const user = await currentUser();

  return (
    <div className='flex justify-center items-center h-screen w-full bg-[#2f406b] text-blue-900'>
      <div className='flex-col gap-5 border-b border-[#8c96af] border-8 border-double shadow-xl p-6 w-11/12 max-w-3xl flex justify-center items-center'>
        <h1 className='text-blue-100 opacity-700 mb-4'>
          [{user ? `Signed in as ${user.firstName}` : 'Loading...'}]
        </h1>
        
        <h1 className='text-blue-100 text-2xl my-5'>WAPP Warehouse</h1>

        <NavButton href='/payment2' icon={<MdPayment />} label='Record Payment' />
        <NavButton href='/warehouse/view' icon={<IoReceiptOutline />} label='View Payments' />
        <NavButton href='/inventory' icon={<MdOutlineInventory2 />} label='Check Inventory' />
      </div>
    </div>
  );
}

const NavButton = ({ href, icon, label }) => (
  <a
    href={href}
    className='flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-300 shadow-xl rounded-2xl p-4 w-full text-[#475D93FF] hover:from-blue-200 hover:to-blue-400 transition duration-200'
    aria-label={label}
  >
    {icon}
    {label}
  </a>
);