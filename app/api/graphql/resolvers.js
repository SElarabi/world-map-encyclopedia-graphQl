/** @format */

// Hardcoded data store
// import { allCountries } from "./countries.js";
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { GraphQLError } from 'graphql';
import { ApolloServerErrorCode } from '@apollo/server/errors';


// throw new GraphQLError( message, {
// 	extensions: { code: 'YOUR_ERROR_CODE', myCustomExtensions },
// } );

// Resolvers define how to fetch the types defined in your schema.
export const resolvers = {
	Query: {
		// return allCountries
		countries: async ( _, __, { dataSources } ) => {

			return dataSources.AllCountriesAPI.getAllCountries();
		},
		coutry: async ( _, { common }, { dataSources } ) => {
			// console.log( `${ common }`, typeof `${ common }` )
			if ( typeof `${ common }` === 'string' && /^[a-zA-Z]+$/.test( common ) ) {
				return dataSources.AllCountriesAPI.getCountry( `${ common }` )
			} else {
				throw new GraphQLError( 'Invalid argument value', {
					extensions: {
						code: 'BAD_USER_INPUT',
						argumentName: 'common',
					},
				} );
			}

		}
	},


	Country: {
		name ( parent ) {
			return parent.name;
		}

	},


	Name: {
		common ( parent ) {
			return parent.common;
		},
		official ( parent ) {
			return parent.official;
		},

	},
	JSON: GraphQLJSON,
	JSONObject: GraphQLJSONObject,

};

