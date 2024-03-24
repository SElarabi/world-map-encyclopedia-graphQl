/** @format */

'use client';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from '@apollo/client';

import React, { useState } from 'react';

export const client = new ApolloClient({
	uri: '/api/graphql',

	cache: new InMemoryCache(),
});
// client.query({
// 	query: gql`
// 		query getListOfCountries {
// 			countries {
// 				area
// 				capital
// 			}
// 		}
// 	`,
// });

export default function GraphQlClientProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
