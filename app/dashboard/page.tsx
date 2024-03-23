/** @format */
'use client';
// import Image from 'next/image';
// import { ListGroupItem, ListGroup } from 'reactstrap';
import React, { useState, useContext, useEffect } from 'react';
import CountryInfo from '../ui/dashboard/countryInfo';
import { useQuery, gql } from '@apollo/client';
import { SelectedCountryContext } from '../ui/dashboard/selectedCountry';
import { GET_COUNTRIES } from '@/app/lib/queries';
export default function Page() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);
	const { selectedCountry } = useContext(SelectedCountryContext);
	const [country, setCountry] = useState(selectedCountry);

	console.log('selectedCountry selectionList :', country);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	return (
		<div>
			<CountryInfo />
		</div>
	);
}
// let country = selectedCountry;
// let languagesMapping = new Map<string, string>();

// if (country.languages) {
// 	Object.entries(country.languages).forEach(([key, value]) => {
// 		languagesMapping.set(key, value);
// 	});
// }
// if (!selectedCountry) {
// 	return <p>No country selected</p>;
// }

// <div className=' container size-max flex  flex-col w-[100%] h-svh px-1 py-4  md:px-2 bg-green-300'>
// 	{!country.name.common ? (
// 		<div className='grid grid-cols-4 h-full grid-flow-row-dense   gap-4 p-3 '>
// 			{/* title official name and native  */}
// 			<div className='bg-sky-600  col-span-4 flex  items-center justify-center '>
// 				<h1 className='display-4 underline'>{country.name.official}</h1>
// 			</div>
// 			{/* Infos and details */}
// 			<div className=' flex flex-col row-span-12 col-span-4  p-3'>
// 				<div className=' grid grid-row-2    p-3 gap-2 place-content-center text-center'>
// 					<Image
// 						src='https://flagcdn.com/ma.svg'
// 						width={300}
// 						height={300}
// 						alt='National flag'
// 					/>
// 					{/* </div> */}
// 					<h1 className='display-4'>{country.name.common}</h1>
// 				</div>

// 				{/* </div> */}
// 				<div className=' flex flex-col-4 h-full'>
// 					{/* coatOfArms */}
// 					<div className=' row-span-6 '>
// 						<div className='    p-3 gap-2 place-content-center '>
// 							{/* <div className='grid   basis-1/4 bg-amber-200'> */}
// 							<Image
// 								src=' https://mainfacts.com/media/images/coats_of_arms/ma.svg'
// 								width={150}
// 								height={150}
// 								alt='coatOfArms'
// 							/>
// 							{/* </div> */}
// 						</div>
// 					</div>
// 					{/* country IFOS */}
// 					<div className='container flex flex-row-2 flex-col  p-8 gap-8 indent-8'>
// 						{/* <div className='bg-black text-white p-4 '> */}
// 						<ListGroup className='fs-5'>
// 							<ListGroupItem>Capital :{country.capital}</ListGroupItem>
// 							<ListGroupItem>Population :{country.population}</ListGroupItem>
// 							<ListGroupItem>
// 								<p>LANGUAGES :</p>
// 								<ul>
// 									{/* Convert object to array of key-value pairs */}
// 									{Array.from(languagesMapping).map(([key, value], index) => (
// 										<li key={index}>
// 											{key} : {value}
// 										</li>
// 									))}
// 								</ul>
// 							</ListGroupItem>
// 							<ListGroupItem>
// 								<p>Currencies</p>
// 								<ul>
// 									<li>
// 										{country.currencies.map((currency, index) => (
// 											<div key={index}>
// 												{currency.name} : ({currency.symbol})
// 											</div>
// 										))}
// 									</li>
// 								</ul>
// 							</ListGroupItem>
// 							<ListGroupItem>Region : {country.region}</ListGroupItem>
// 							<ListGroupItem>
// 								Subregion :{country.subregion} {' :: '}
// 								<a
// 									className="text-black after:content-['_↗']  hover:bg-sky-700"
// 									href={country.googleMaps}
// 									target='_blank'
// 								>
// 									{country.flag} {country.name.common} {'  '} googleMaps{' '}
// 								</a>
// 							</ListGroupItem>
// 						</ListGroup>
// 						{/* </div> */}
// 						{/* <div className='bg-orange-400 h-full'>04</div> */}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	) : (
// 		<></>
// 	)}
// </div>
