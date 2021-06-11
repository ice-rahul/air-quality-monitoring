import React from 'react';
import { Header, Footer } from 'components';
import Home from 'pages/Home';

function App() {
  return (
    <div id="main">
      <Header />
      <div className="flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
