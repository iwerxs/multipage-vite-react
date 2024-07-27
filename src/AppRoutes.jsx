import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Services } from "./pages/Services";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import Navbar from "./components/Navbar"; // Adjust the import based on your file structure

const AppRoutes = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  </Router>
);

export default AppRoutes;
