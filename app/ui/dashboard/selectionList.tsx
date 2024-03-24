/** @format */
'use client';
import React, { useState, useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_COUNTRIES } from '@/app/lib/queries';
import { SelectedCountryContext } from './selectedCountry';

export function GetAllCountries() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);

	let { selectedCountry, setSelectedCountry } = useContext(
		SelectedCountryContext
	);
	const [country, setCountry] = useState(selectedCountry);
	const [inputValue, setInputValue] = React.useState('');

	useEffect(() => {
		setCountry(selectedCountry);
	}, [selectedCountry]);
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setInputValue(event.target.value);
	};

	const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();

		const selectedCountry = data.countries.find(
			(country: any) => country.name.common === event.target.value
		);
		if (selectedCountry) {
			setSelectedCountry(selectedCountry);
			setCountry(selectedCountry);
			console.log('selectedCountry selectionList :', selectedCountry);
		}
	};
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className='bg-teal-300'>
			<form onSubmit={handleSubmit}>
				<input
					list='countries'
					className='form-select'
					aria-label='Select Country'
					onChange={handleSubmit}
				/>
				<datalist id='countries'>
					{/* create a copy of the array before sorting it to avoid The error message
				"Cannot assign to read only property '0' of object '[object Array*/}
					{[...data.countries]
						.sort((a: any, b: any) => a.name.common.localeCompare(b.name.common))
						.map((country: any, index: number) => (
							<option
								key={index}
								value={country.name.common}
							>
								{country.name.common}
							</option>
						))}
				</datalist>
			</form>
		</div>
		//
	);
}
{
}
