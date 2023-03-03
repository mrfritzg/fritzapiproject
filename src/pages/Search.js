import { useEffect, useState } from "react";
import Form from "../components/Form";
import CharacterItem from "../components/CharacterItem";


// import MovieDisplay from "./components/MovieDisplay";

export default function Search() {
  let [character, setCharacter] = useState(null);


   async function getCharacter(name) {
    // console.log(name);

    const key = '1381472152670820';
    let url = `https://www.superheroapi.com/api.php/${key}/search/${name}`;

    try {
      let response = await fetch(url);
       let data = await response.json();
       setCharacter(data.results);
    // console.log(response)
    // console.log(data.results)
    } catch (error) {
      console.log("something went wrong");
    }
  }

  useEffect(() => {
    getCharacter("");
  }, []);

  if (character) {
    return (
      <div className="App">
        <Form getCharacter={getCharacter} />
        {character.map(hero => {
          return (
            <CharacterItem key={hero.id} hero={hero} />   
          )
        })}
        
      </div>
    );
  } else {
    // if movie is null 
    return (
      <div>
        <h1>Search for a Hero or Villian</h1>
        <Form getCharacter={getCharacter} />
      </div>
    );
  }
}
