/** @format */
'use client';
import Image from 'next/image';
import { ListGroupItem, ListGroup } from 'reactstrap';
import React, { useState, useContext, useEffect } from 'react';

import { SelectedCountryContext } from '../ui/dashboard/selectedCountry';

export default function Page() {
	const { selectedCountry, defaultCountry } = useContext(SelectedCountryContext);
	const [country, setCountry] = useState(selectedCountry);
	const [mapRef, setMapRef] = useState(defaultCountry.maps.googleMaps);

	useEffect(() => {
		console.log('selectedCountry page :', selectedCountry.name.common);
		setMapRef(selectedCountry.maps.googleMaps);
		setCountry(selectedCountry);
		console.log('${country.googleMaps} :', selectedCountry.maps.googleMaps);
		console.log('country native name :', selectedCountry.name.nativeName);
	}, [selectedCountry]);

	let languagesMapping = new Map<string, string>();
	if (country.languages) {
		Object.entries(country.languages).forEach(([key, value]) => {
			languagesMapping.set(key, value);
		});
	}

	let currenciesMapping = new Map<string, string>();
	if (country.currencies) {
		Object.entries(country.currencies).forEach(([key, value]) => {
			currenciesMapping.set(key, value);
		});
	}
	let nativeNamesMapping = new Map<string, string>();
	let nativeNamesArray = [String()];
	if (country.name.nativeName) {
		Object.entries(country.name.nativeName).forEach(([key, value]) => {
			nativeNamesMapping.set(key, value);
			nativeNamesArray = Array.from(nativeNamesMapping.values());
			console.log(
				'First element:',
				nativeNamesArray[0]?.common,
				nativeNamesArray[0]?.official
			);
		});
	}

	return (
		<div className=' container size-max flex  flex-col w-[100%] h-svh px-1   md:px-2 '>
			{country ? (
				<div className=' grid grid-cols-4 h-svh grid-flow-row-dense   gap-4 p-3 '>
					{/* title official name and native  */}
					<div className='shadow-2xl  col-span-4 flex-row items-center text-center '>
						<div>
							<h1 className='display-6 '>{country.name.official}</h1>
						</div>
						<div>
							<h1 className='display-6 '>{nativeNamesArray[0]?.official}</h1>
						</div>
					</div>
					{/* Infos and details */}
					<div className=' flex flex-col row-span-12 col-span-4  '>
						{/* flg */}
						<div className='  grid grid-row-2 grid-flow-col place-content-center text-center '>
							<div className='grid    bg-amber-200'>
								<img
									className='shadow-2xl border-2 '
									src={
										country && country.flags && country.flags.svg
											? `${selectedCountry.flags.svg}`
											: `${defaultCountry.flags.svg}`
									}
									width={300}
									height={300}
									alt='National flag'
								/>
							</div>
						</div>

						{/* common name and coatOfArmy */}
						<div className='flex justify-center items-center  col-span-4 p-2'>
							<img
								src={
									country && country.coatOfArms && country.coatOfArms.svg
										? `${selectedCountry.coatOfArms.svg}`
										: `${defaultCountry.coatOfArms.svg}`
								}
								width={150}
								height={150}
								alt='Coat of Arms'
							/>
							<h1 className='display-6 ml-4'>
								{country.name.common}
								{country.flag}
								{nativeNamesArray[0]?.common}
							</h1>
						</div>

						{/* country IFOS */}
						<div className=' text-center p-2  '>
							<ListGroup className='fs-5'>
								<ListGroupItem>Capital:{country.capital}</ListGroupItem>
								<ListGroupItem>
									Population {`👨‍👨‍👧‍👦 `}
									{country.population.toLocaleString()}
								</ListGroupItem>
								<ListGroupItem>
									<p>LANGUAGES {`🗣`} </p>
									<ul>
										{Array.from(languagesMapping).map(([key, value], index) => (
											<li key={index}>
												{value} : {key}
											</li>
										))}
									</ul>
								</ListGroupItem>
								<ListGroupItem>
									<p>Currencies {`🪙`}</p>
									<ul>
										{Array.from(currenciesMapping).map(([key, Currency], index) => (
											<li key={index}>
												{key} : {Currency.name} {'" '} {Currency.symbol}
												{' "'}
											</li>
										))}
									</ul>
								</ListGroupItem>
								<ListGroupItem>
									Continent
									{` 🌏 `} {country.region}
								</ListGroupItem>
								<ListGroupItem>
									Subregion {` 🗺 `}
									{country.subregion}
									{` 🌐 `}
									<a
										className="text-black after:content-['_↗']  hover:bg-sky-700"
										href={country.maps.googleMaps}
										target='_blank'
									>
										{country.flag} {country.name.common} {` 🗺 `}
									</a>
								</ListGroupItem>
							</ListGroup>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
}
