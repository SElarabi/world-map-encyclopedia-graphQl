'use client';
import React, { useContext, useEffect, useState } from 'react';
import { SelectedCountryContext } from './selectedCountry';


export default function CountryInfo () {
  let { selectedCountry } = useContext( SelectedCountryContext );
  const [ population, setPopulation ] = useState( 0 );

  useEffect( () => {

    setPopulation( selectedCountry.population );

    console.log( "selectedCountry countryInfo.jsx", selectedCountry );
  }, [ selectedCountry ] );



  return (
    <div>
      <h1>{ selectedCountry.name.common }</h1>
      <p>Capital: { selectedCountry.capital }</p>
      <p>Population: { selectedCountry.population }</p>
      {/* Add more fields as needed */ }
    </div>
  );
}
