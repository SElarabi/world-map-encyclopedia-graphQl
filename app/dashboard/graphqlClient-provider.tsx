/** @format */
// Use this provider as client to be used in layout file which is server component, Client provider could not be used directly in server component.
'use client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import React, { useState } from 'react';

export const client = new ApolloClient({
	uri: '/api/graphql',

	cache: new InMemoryCache(),
});

export default function GraphQlClientProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
