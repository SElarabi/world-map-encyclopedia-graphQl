/** @format */
'use client';
import { PowerIcon } from '@heroicons/react/24/outline';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { GetAllCountries } from './selectionList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function SideNav() {
	return (
		<div className='flex h-full flex-col px-3 py-4 md:px-2'>
			<div className='flex grow flex-col justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
				<NavLinks />
				<div className=' h-auto w-full grow rounded-md  md:block'>
					<GetAllCountries />
				</div>
				<div className='hidden sm:block'>
					<a
						href=' '
						className='text-blue-600 visited:text-purple-600 ...'
					>
						<FontAwesomeIcon icon={faGithub} />
						GitHub Repository
					</a>
				</div>
			</div>
		</div>
	);
}
