import React from 'react';
import './App.css';
import RoutesPath from './Routes';
import Layout from './shared/components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <RoutesPath />
      </Layout>
    </div>
  );
}

export default App;
