import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import { NearProvider } from 'react-near'
import { ApolloProviderWithAuth0 } from './shared/features/ApolloProviderWithAuth0/ApolloProviderWithAuth0'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
      clientId={process.env.REACT_APP_AUTH0_CLIENTID || ''}
      redirectUri={window.location.origin}
  >
      <ApolloProviderWithAuth0>
      <NearProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </NearProvider>
      </ApolloProviderWithAuth0>
    </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
