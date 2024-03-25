/** @format */
'use client';
import GraphQlClientProvider from '@/app/dashboard/graphqlClient-provider';
import SideNav from '../ui/dashboard/sidenav';
import { SelectedCountryContext } from '../ui/dashboard/selectedCountry';
import { SelectedCountryProvider } from '../ui/dashboard/selectedCountry';
import React, { useContext } from 'react';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SelectedCountryProvider>
			<GraphQlClientProvider>
				<div className=' flex  flex-col md:flex-row h-svh gap-x-4 mb-auto'>
					<div className='w-full flex-none md:w-64 '>
						<SideNav />
					</div>
					<div className='container size-min w-[100%] flex p-4 mb-4'>{children}</div>
				</div>
			</GraphQlClientProvider>
		</SelectedCountryProvider>
	);
}
