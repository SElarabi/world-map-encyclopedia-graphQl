/** @format */

import type { Metadata } from 'next';
import { inter } from '@/app/ui/dashboard/fonts';
import '@/app/globals.css';

export const metadata: Metadata = {
	title: 'WORLD MAP ENCYCLOPEDIA',
	description:
		'Provides information about countries capital,flags,population,language, ...etc',
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<link
					href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'
					rel='stylesheet'
					integrity='sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65'
					crossOrigin='anonymous'
				></link>
			</head>
			<body
				className={`${inter.className} antialiased gap-x-4 flex flex-col min-h-[100vh] justify-between`}
			>
				{children}

				{/* <!-- Footer -->*/}
				<footer className='text-white bg-gray-900 mt-auto'>
					<div className='container'>
						<p className='text-center mb-0'>Copyright &copy; 2024 S.E.Larabi</p>
					</div>
				</footer>
				{/* <script
					src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'
					integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4'
					crossOrigin='anonymous'
					async
				></script> */}
				<script
					src='https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js'
					crossOrigin='anonymous'
					async
				></script>

				<script
					src='https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js'
					crossOrigin='anonymous'
					async
				></script>

				<script
					src='https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js'
					crossOrigin='anonymous'
					async
				></script>
			</body>
		</html>
	);
}
