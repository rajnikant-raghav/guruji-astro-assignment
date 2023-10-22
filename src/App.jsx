import React from "react";
import Home from "./components/Home";
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./components/Favorite";
import Details from "./components/Details";
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Navbar />
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/details" element={<Details />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
