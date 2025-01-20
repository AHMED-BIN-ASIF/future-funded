import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import "@fontsource/lexend";
// import Header from './components/Header';
// import Footer from './components/Footer'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function App() {
  return (
    <Router>
      {/* <Header /> */}
      <div>
        <AppRoutes />
      </div>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;