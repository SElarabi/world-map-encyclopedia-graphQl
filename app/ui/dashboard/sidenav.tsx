/** @format */
'use client';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { GetAllCountries } from './selectionList';

export default function SideNav() {
	return (
		<div className='flex  md:flex-col px-3 py-4 md:space-x-0 md:space-y-2'>
			<NavLinks />
			<GetAllCountries />
		</div>
		// </div>
	);
}
