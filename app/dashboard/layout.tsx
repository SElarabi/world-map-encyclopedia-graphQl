/** @format */
'use client';
import GraphQlClientProvider from '@/app/dashboard/graphqlClient-provider';
import SideNav from '../ui/dashboard/sidenav';
import { SelectedCountryProvider } from '../ui/dashboard/selectedCountry';
import { Suspense } from 'react';
import Loading from './ loading';

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SelectedCountryProvider>
			<GraphQlClientProvider>
				<div className=' flex  flex-col md:flex-row  gap-x-2 mb-auto '>
					<div className='w-full flex-none md:w-64 '>
						<SideNav />
					</div>
					<Suspense fallback={<Loading />}>
						<div className=' w-[100%]  p-2 mb-2'>{children}</div>
					</Suspense>
				</div>
			</GraphQlClientProvider>
		</SelectedCountryProvider>
	);
}
