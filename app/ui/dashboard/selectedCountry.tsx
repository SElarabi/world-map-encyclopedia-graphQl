/** @format */
'use client';
import { createContext, useContext, useState } from 'react';

// # country
type country = {
	name: Name;
	capital: string;
	region: string;
	subregion: string;
	flag: string;
	population: number;
	languages: { [key: string]: string }; // Object with string keys and string values
	currencies: { [key: string]: Currency }; // Object with string keys and string
	fifa: string;
	maps: { [googleMaps: string]: string }; // Object with string keys and string values

	coatOfArms: { [key: string]: string }; // Object with string keys and string values
	flags: { [key: string]: string }; // Object with string keys and string values
	unMember: Boolean;
};
// #Currency
type Currency = {
	name: string;
	symbol: string;
};
// #Name
type Name = {
	common: string;
	official: string;
	nativeName: { [key: string]: string }; // Object with string keys and string values,
};

let defaultName: Name = {
	common: 'UN',
	official: 'United Nations',
	nativeName: {},
};

const defaultCountry: country = {
	name: defaultName,
	capital: '',
	region: '',
	subregion: '',
	flag: '',
	population: 0,
	languages: { eng: 'English' },
	currencies: {},
	fifa: '',
	maps: {
		googleMaps:
			'https://commons.wikimedia.org/wiki/Category:Headquarters_of_the_United_Nations#/map/0/15/40.7502/-73.9672',
	},

	coatOfArms: {
		svg: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/UN_emblem_blue.svg',
	},
	flags: {
		svg: 'https://upload.wikimedia.org/wikipedia/commons/8/87/UN_emblem_gold.svg',
	},
	unMember: true,
};

export const SelectedCountryContext = createContext<{
	selectedCountry: country;
	setSelectedCountry: React.Dispatch<React.SetStateAction<country>>;
	defaultCountry: country;
}>({
	selectedCountry: defaultCountry,
	setSelectedCountry: () => {},
	defaultCountry: defaultCountry,
});

export function SelectedCountryProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

	return (
		<SelectedCountryContext.Provider
			value={{ selectedCountry, setSelectedCountry, defaultCountry }}
		>
			{children}
		</SelectedCountryContext.Provider>
	);
}
