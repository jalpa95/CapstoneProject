// import Header from './components/Header.js';
// import './App.css';

// function App() {
//   return (
//     <>
//       <header>
          
//       </header>
      
//       <Nav />
//       <Main />
//       <Footer />
//     </>
//   );
// }

// export default App;
import React from "react";
import Home from "./routes/Home";
import Reservations from "./routes/Reservations";
import Confirmbooking from "./components/bookingconfirm";
import AboutUs from "./components/AboutUs";


import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/bookingisconfirm" element = {<Confirmbooking />}/>
        <Route path="/about-us" component={AboutUs} />
      </Routes>
    </>
  );
}

export default App;