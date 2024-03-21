/** @format */
import GraphQlClientProvider from '@/app/dashboard/graphqlClient-provider';
import SideNav from '../ui/dashboard/sidenav';
export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		// <div className='flex h-full flex-col md:flex-row md:overflow-hidden gap-8 bg-orange-500'>
		<div className=' flex  flex-col md:flex-row h-svh gap-x-4 '>
			<div className='w-full flex-none md:w-64 '>
				<SideNav />
			</div>
			<GraphQlClientProvider>
				<div className='container size-min w-[100%] flex p-4 mb-4'>{children}</div>
			</GraphQlClientProvider>
		</div>
	);
}
