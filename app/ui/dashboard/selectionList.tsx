/** @format */

import { useQuery, gql } from '@apollo/client';
import { GET_COUNTRIES } from '@/app/lib/queries';

export function SelectionList() {
	return (
		<div>
			<h2>HELLO MY FIRST APOLLO APP 🚀 </h2>
			{/* add components  */}
		</div>
	);
}

export function DisplayLocations() {
	const { loading, error, data } = useQuery(GET_COUNTRIES);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	// console.log('DATA ', data);
	return <p>DATA LOADED successfully</p>;
}
