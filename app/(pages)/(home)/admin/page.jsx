import { currentUser } from '@clerk/nextjs/server';
import { FaMoneyBill1Wave } from 'react-icons/fa6';
import { IoReceiptOutline } from 'react-icons/io5';
import { MdInventory2, MdOutlineInventory2, MdPayment } from 'react-icons/md';

async function AdminPanel() {
    const user = await currentUser();

    return (
        <div className='flex  justify-center items-center h-screen w-full bg-[#2f406b] text-blue-700'>
            <div className='animate-slide_u1 flex-col gap-5 rounded-2xl border-2 border-double border-[#8c96af] shadow-xl p-6 w-11/12 max-w-3xl flex justify-center items-center'>
                <h1 className='text-blue-100 opacity-700 mb-4'>
                    {user ? `[Signed in as ${user.firstName}]` : '[Loading...]'}
                </h1>
                <h1 className='text-blue-100 text-2xl mb-5'>WAPP Admin</h1>
               <NavButton href='/check-outlet-inventories' icon={<FaMoneyBill1Wave />} label='prices and discounts' />
                <NavButton href='/payment' icon={<MdPayment />} label='Record Payment' />
                <NavButton href='/inventory' icon={<MdOutlineInventory2 />} label='Check Warehouse Inventory' />
                <NavButton href='/inventory' icon={<MdInventory2 />} label='Check Outlet Inventories' />
                <NavButton href='/summary' icon={<IoReceiptOutline />} label='View Financial Summaries' />
            </div>
        </div>
    );
}

const NavButton = ({ href, icon, label }) => (
    <a
        href={href}
        className='flex items-center gap-2 bg-gradient-to-r from-blue-100 to-blue-300 shadow-xl rounded-2xl p-4 w-full text-[#5A74B6FF] hover:from-blue-200 hover:to-blue-400 transition duration-200'
        aria-label={label}
    >
        {icon}
        {label}
    </a>
);

export default AdminPanel;