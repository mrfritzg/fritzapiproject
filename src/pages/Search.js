import { useEffect, useState } from "react";
import Form from "../components/Form";
import axios from "axios";

// import MovieDisplay from "./components/MovieDisplay";

export default function Search() {
  let [character, setCharacter] = useState(null);

   async function getCharacter(name) {
    console.log(name);

    const key = '1381472152670820';
    let url = `https://www.superheroapi.com/api.php/${key}/search/${name}`;

    // await fetch(url, {
    //     method: 'GET',
    //     mode: "cors",
    //     headers: {
    //         'accept': 'application/json',
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
    //         'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With'
    //     }
    // })
    //     .then((response) => console.log(response))
    //     .catch(err => console.log(err))
    //     .then((data) => console.log(data))
    //     .catch(err => console.log(err));


    try {
      let response = await fetch(url);
       let data = await response.json();
       setCharacter(data.results);
    // console.log(response)
    console.log(data.results)
    } catch (error) {
      console.log("something went wrong");
    }
  }

  useEffect(() => {
    getCharacter("superman");
  }, []);

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
