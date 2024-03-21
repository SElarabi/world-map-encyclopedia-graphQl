/** @format */

import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from '@/app/ui/dashboard/nav-links';

export default function SideNav() {
	return (
		<div className='flex  md:flex-col px-3 py-4 md:space-x-0 md:space-y-2 bg-slate-500'>
			{/* <div className='mb-2  h-20 items-end justify-start rounded-md bg-blue-200 p-4 md:h-40 bg-cover bg-center relative'>
				</div> */}
			<NavLinks />
			<div className='  w-full text-stone-50 rounded-md bg-blue-900 md:block'>
				TEST
			</div>
			<button className='flex h-[48px] w-full  items-center justify-center gap-2 rounded-md bg-black p-3 text-sm font-medium hover:bg-slate-500 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3'>
				<PowerIcon className='w-6' />

				<div className=' hidden md:block'>Sign Out</div>
			</button>
		</div>
		// </div>
	);
}
