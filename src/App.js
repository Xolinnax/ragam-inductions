import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Contact from "./components/Contact";

function App() 
{
  return (
    <div className="App">
        <Header />
            <BrowserRouter>
                <Routes path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        <Footer />
    </div>
  );
}

export default App;
