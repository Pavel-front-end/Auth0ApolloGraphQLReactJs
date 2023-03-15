import React, { useEffect, useState } from 'react';
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    HttpLink,
  } from '@apollo/client';
  import { setContext } from '@apollo/client/link/context';
  import { useAuth0 } from '@auth0/auth0-react';
  
  const ApolloProviderWithAuth0 = ({ children } : any) => {
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();
    const [bearerToken, setBearerToken] = useState("")
  
    useEffect(()=> {
      const getToken = async () => {
        try {
            const token = await getAccessTokenSilently();
            setBearerToken(token)
          } catch (error) {
            console.log(error);
          }
      }
      getToken()   
    }, [getAccessTokenSilently, isAuthenticated])

    const httpLink = new HttpLink({
        uri: process.env.REACT_APP_GRAPHQL_API_URL,
      });

    const authLink = setContext(async (_, { headers, ...rest }) => { 
        if (!bearerToken) return { headers, ...rest };
        return {
        ...rest,
        headers: {
          ...headers,
          authorization: `Bearer ${bearerToken}`,
        },
      };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
      });
    
  
    return (
      <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    );
  };
  
  export { ApolloProviderWithAuth0 };