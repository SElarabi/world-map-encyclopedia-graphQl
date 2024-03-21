/** @format */

'use client';
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from '@apollo/client';

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
