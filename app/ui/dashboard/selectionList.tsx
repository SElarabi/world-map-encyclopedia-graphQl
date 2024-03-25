/** @format */
'use client';
import React, { useState, useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_COUNTRIES } from '@/app/lib/queries';
import { SelectedCountryContext } from './selectedCountry';

export function GetAllCountries() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

	let { selectedCountry, setSelectedCountry } = useContext(
		SelectedCountryContext
	);
	const [country, setCountry] = useState(selectedCountry);
	const [inputValue, setInputValue] = React.useState('');

	useEffect(() => {
		setCountry(selectedCountry);
	}, [selectedCountry]);

	const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		setInputValue(event.target.value);
	};
	const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsCheckboxChecked(event.target.checked);
	};
	const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
	const CountryList = () => {
		return (
			<>
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
			</>
		);
	};
	return (
		<div>
			{isCheckboxChecked ? (
				<form>
					<input
						list='countries'
						className='form-select'
						aria-label='Select Country'
						onChange={handleChange}
					/>
					<datalist id='countries'>
						<CountryList />
					</datalist>
				</form>
			) : (
				<select
					className='form-select'
					aria-label='Select Country'
					onChange={handleSelectChange}
				>
					{/* create a copy of the array before sorting it to avoid The error message
				"Cannot assign to read only property '0' of object '[object Array*/}

					<option selected>Select Country</option>
					<CountryList />
				</select>
			)}
			{/* checkbox select between list or user entry */}
			<input
				type='checkbox'
				className='form-check-label  '
				onChange={handleCheckboxChange}
			/>
			{`  `}
			<label
				className='form-check-label'
				htmlFor='flexCheckDefault'
			>
				<h1 className='text-sm'>Manual Search</h1>
			</label>
		</div>

		//
	);
}
{
}
