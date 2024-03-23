/** @format */
'use client';
import { createContext, useContext, useState } from 'react';

// # country
type country = {
	name: Name;
	capital: String;
	region: String;
	subregion: String;
	flag: String;
	population: number;
	languages: { [key: string]: string }; // Object with string keys and string values
	currencies: Currency[]; // Object with string keys and string values
	fifa: String;
	googleMaps: string;
};
// #Currency
type Currency = {
	name: string;
	symbol: string;
};
// #Name
type Name = {
	common: String;
	official: String;
	nativeName: { [key: string]: string }; // Object with string keys and string values,
};

let defaultName: Name = {
	common: '',
	official: '',
	nativeName: {},
};

let defaultCountry: country = {
	name: defaultName,
	capital: '',
	region: '',
	subregion: '',
	flag: '',
	population: 0,
	languages: {},
	currencies: [{ name: '', symbol: '' }],
	fifa: '',
	googleMaps: '',
};

export const SelectedCountryContext = createContext<{
	selectedCountry: country;
	setSelectedCountry: React.Dispatch<React.SetStateAction<country>>;
}>({
	selectedCountry: defaultCountry,
	setSelectedCountry: () => {},
});

export function SelectedCountryProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

	return (
		<SelectedCountryContext.Provider
			value={{ selectedCountry, setSelectedCountry }}
		>
			{children}
		</SelectedCountryContext.Provider>
	);
}
