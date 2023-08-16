

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import { AppStateProvider } from "./AppStateContext";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import { Flowbite } from "flowbite-react";
import Side from "./components/Side";

function App() {
  return (
    <Flowbite>
      <Router>
      <AppStateProvider>
      
        <Nav/>
        {/* <Side/> */}
        <Navbar  />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        
      </AppStateProvider>
    </Router></Flowbite>
    
  );
}

export default App;
