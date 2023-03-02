import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";

export default function Home() {
  
  // let key = process.env.REACT_APP_KEY;

  // let {symbol} = useParams(); // -> {symbol: ''}

  // console.log(symbol);

  let url = `https://akabab.github.io/superhero-api/api/all.json`;

  let [ heroData, setHeroData ] = useState([]);

{/* let navigate = useNavigate() //->returns a function */}

  async function getHeroData() {
try {
    const response = await fetch(url);
  const data = await response.json();
  setHeroData(data);
} catch (err) {
    console.error(err);
}
}
  
  useEffect( () => {
    getHeroData()
  }, [])
//  console.log(heroData);
  return (
    <div>

     <h1>Home Page</h1>
     <CharacterList heroData={heroData}/>

    </div>
  );
}


