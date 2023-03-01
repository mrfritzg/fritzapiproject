import { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";

// import MovieDisplay from "./components/MovieDisplay";

export default function Search() {
  let [character, setCharacter] = useState(null);

  /*
    1. Create an array of some movie titles (5-10)
    2. Use the useEffect hook to randomly select a 
      movie title and fetch the data for that movie
  */

  useEffect(() => {
    getCharacter("zoom");
  }, []);

  async function getCharacter(name) {
    console.log(name);

    const key = '1381472152670820';
    let url = `https://superheroapi.com/api/${key}/search/${name}`;

    try {
      let response = await axios(url);
    //   let data = await response.json();
    //   setCharacter(data);
    console.log(response)
    } catch (error) {
      console.log("something went wrong");
    }
  }

  if (character) {
    return (
      <div className="App">
        {/* <MovieDisplay movie={movie} /> */}
        <Form getCharacter={getCharacter} />
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
