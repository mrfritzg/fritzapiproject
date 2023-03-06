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

     <h1>The Super Heros/Villian Website</h1>
     <h2>This Website provides Heros/Villian from mutliple universes. Most Websites give you only once comic book creator source, but we give you Marvel, DC and more!.</h2>
     <h2>Please Scroll Thru and find what you're looking for or Click on the Search Page.</h2>
     <CharacterList heroData={heroData}/>

    </div>
  );
}


