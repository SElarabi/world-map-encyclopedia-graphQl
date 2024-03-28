/** @format */
'use client';
import React, { useState, useContext, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { GET_COUNTRIES } from '@/app/lib/queries';
import { SelectedCountryContext } from './selectedCountry';

export function SelectionList() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
	let { selectedCountry, setSelectedCountry } = useContext(
		SelectedCountryContext
	);
	const [country, setCountry] = useState(selectedCountry);
	const [inputValue, setInputValue] = React.useState('');
	const [showAlert, setShowAlert] = useState(false);

	useEffect(() => {
		setCountry(selectedCountry);
	}, [selectedCountry]);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const selectedCountry = data.countries.find(
			(country: any) => country.name.common === inputValue
		);
		if (selectedCountry) {
			setSelectedCountry(selectedCountry);
			setCountry(selectedCountry);
			setShowAlert(false);
		} else {
			setShowAlert(true);
		}

		console.log('inputValue :', inputValue);
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
		}
	};

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

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return (
		<div>
			{isCheckboxChecked ? (
				<form
					id='countryselectform'
					onSubmit={handleSubmit}
				>
					<input
						list='countries'
						className='form-select'
						aria-label='Select Country'
						onChange={(e) => {
							handleChange;
							setInputValue(e.target.value);
						}}
					/>
					<datalist id='countries'>
						<CountryList />
					</datalist>
				</form>
			) : (
				<select
					id='selectCountry'
					className='form-select'
					aria-label='Select Country'
					onChange={handleSelectChange}
					value={selectedCountry.name.common}
				>
					{/* create a copy of the array before sorting it to avoid The error message
				"Cannot assign to read only property '0' of object '[object Array*/}

					<option value={selectedCountry.name.common}>
						{selectedCountry.name.common}
					</option>
					<CountryList />
				</select>
			)}
			{/* checkbox select between list or user entry */}
			<input
				id='manualSearch'
				type='checkbox'
				className='form-check-label  '
				onChange={handleCheckboxChange}
			/>
			{`  `}
			<label
				className='form-check-label'
				htmlFor='manualSearch'
			>
				<h1 className='text-sm'>Manual Search</h1>
			</label>
			{/* Alert  */}
			{showAlert && (
				<div
					className='alert alert-warning alert-dismissible fade show'
					role='alert'
				>
					<strong>Holy guacamole! </strong> You should check in on some of those in
					the list .Uncheck Manual Search option and explore the list to find the
					country if it's included..
					<button
						type='button'
						className='btn-close'
						data-bs-dismiss='alert'
						aria-label='Close'
					></button>
				</div>
			)}
		</div>

		//
	);
}
{
}
