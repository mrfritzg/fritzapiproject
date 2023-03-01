import { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import Search from './pages/Search';
import Character from './pages/Character';

export default function App() {
  
//   // let key = process.env.REACT_APP_KEY;

//   // let {symbol} = useParams(); // -> {symbol: ''}

//   // console.log(symbol);

//   let url = `https://akabab.github.io/superhero-api/api/all.json`;

//   let [ heroData, setHeroData ] = useState([]);

// {/* let navigate = useNavigate() //->returns a function */}

//   async function getHeroData() {
// try {
//     const response = await fetch(url);
//   const data = await response.json();
//   setHeroData(data);
// } catch (err) {
//     console.error(err);
// }
// }
  
//   useEffect( () => {
//     getHeroData()
//   }, [])
//  console.log(heroData);
  return (
    <div>
      <Nav />   
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/character/:symbol" element={<Character />}/>
        <Route path="*" element={<><h1>This Page could not be found...</h1></>} />
      </Routes>
    </div>
  );
}
