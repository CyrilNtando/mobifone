import React from 'react';
import { BrowserRouter } from 'react-router-dom';
//COMPONENTS
import Navbar from '../Layout/Navbar/Navbar';
import Landing from './Landing/Landing';
import Main from '../Layout/Main/Main';
import Footer from '../Layout/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
