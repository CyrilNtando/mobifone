import React from 'react';
//COMPONENTS
import Navbar from '../Layout/Navbar/Navbar';
import Landing from '../Layout/Landing/Landing';
import Main from '../Layout/Main/Main';
import Footer from '../Layout/Footer/Footer';
function App() {
  return (
    <div className='App'>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
