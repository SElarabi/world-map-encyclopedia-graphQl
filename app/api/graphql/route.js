import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { typeDefs } from './typeDefs.js';
import { resolvers } from './resolvers.js';

import { AllCountriesAPI } from './Countries_API.js';
import { ApolloServerErrorCode } from '@apollo/server/errors';



const server = new ApolloServer( {
  resolvers,
  typeDefs,
  formatError: ( formattedError, error ) => {
    // Return a different error message
    if (
      formattedError.extensions.code ===
      ApolloServerErrorCode.BAD_USER_INPUT
    ) {
      return {
        ...formattedError,
        message: "Your query doesn't match the schema. Try double-checking it!",
      };
    }

    // Otherwise return the formatted error. This error can also
    // be manipulated in other ways, as long as it's returned.
    return formattedError;
  },
} );

const handler = startServerAndCreateNextHandler( server, {
  context: async () => {
    const { cache } = server;


    return {
      // We create new instances of our data sources with each request,
      // passing in our server's cache.
      dataSources: {
        AllCountriesAPI: new AllCountriesAPI( { cache } ),
        // personalizationAPI: new PersonalizationAPI( { cache } ),

      },
    };
  },
  // listen: { port: 4000 },
} );

export { handler as GET, handler as POST };