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


import {Route, Routes} from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path = "/" element = {<Home />}/>
        <Route path = "/reservations" element = {<Reservations />}/>
        <Route path = "/bookkingisconfirm" element = {<Confirmbooking />}/>
 
      </Routes>
    </>
  );
}

export default App;