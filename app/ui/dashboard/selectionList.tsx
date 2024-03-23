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

	useEffect(() => {
		setCountry(selectedCountry);
	}, [selectedCountry]);

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		event.preventDefault();

		const selectedCountry = data.countries.find(
			(country: any) => country.name.common === event.target.value
		);
		if (selectedCountry) {
			setSelectedCountry(country);
			setCountry(country);
			console.log('selectedCountry selectionList :', selectedCountry);
		}
	};
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div className='bg-teal-300'>
			<select
				className='form-select'
				aria-label='Select Country'
				onChange={handleChange}
			>
				<option>Select Country</option>
				{data.countries.map((country: any, index: number) => (
					<option
						key={index}
						value={country.name.common}
					>
						{country.name.common}
					</option>
				))}
			</select>
		</div>
	);
}
