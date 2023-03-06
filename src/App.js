import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Search from './pages/Search';
import Character from './pages/Character';
import Favorites from "./pages/Favorites";


export default function App() {

  return (
    <div>
      <Nav />   
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/character/:symbol" element={<Character />}/>
        <Route path="*" element={<><h1>This Page could not be found...</h1></>} />
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </div>
  );
}
