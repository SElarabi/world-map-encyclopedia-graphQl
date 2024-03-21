/** @format */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
	TrophyIcon,
	HomeIcon,
	DocumentIcon,
	ChatBubbleLeftEllipsisIcon,
	CommandLineIcon,
	ComputerDesktopIcon,
	GlobeAltIcon,
	WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [{ name: 'Home', href: '/dashboard', icon: HomeIcon }];

export default function NavLinks() {
	const pathname = usePathname();
	return (
		<>
			{links.map((link) => {
				const LinkIcon = link.icon;
				return (
					<Link
						key={link.name}
						href={link.href}
						className={clsx(
							'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-red-400 p-3 text-sm font-medium hover:bg-slate-500 hover:text-white-600 md:flex-none md:justify-start md:p-2 md:px-3',
							{
								'bg-gray-700 text-black': pathname === link.href,
							}
						)}
					>
						<LinkIcon className='w-6' />
						<p className='hidden md:block'>{link.name}</p>
					</Link>
				);
			})}
		</>
	);
}
