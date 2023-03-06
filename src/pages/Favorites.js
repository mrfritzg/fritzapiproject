import CharacterItem from "../components/CharacterItem"
import { useEffect, useState } from "react";
import DeleteFavorite from "../components/DeleteFavorite";

export default function Favorites() {
    
    let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
    let [favCharacters, setFavCharacters] = useState(currentStorage); 
    let [pageSource, setPageSource] = useState('delFavorites'); 

    useEffect(() =>
    {
      setFavCharacters(currentStorage)
    },[])


    function removeCharacter(hero) {

      //get the current hero objects from local storage
      // let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
     
      let newStorage = currentStorage.filter(prevHeroes => (hero?.id !== prevHeroes.id))
          //update local storage
      localStorage.setItem("favs", JSON.stringify(newStorage)) 
      setFavCharacters(newStorage)

      }


    return (
        
        <div>
            <h1>Here is your List of Favorite Heros/Villians</h1>
{favCharacters.map(hero => {
          return (
            <div>
            <CharacterItem pageSource={pageSource}  hero={hero} />   
            {/* <DeleteFavorite /> */}
            
            </div>
          )
        })}
        <button onClick= { removeCharacter}>
    Remove from Favorites </button>
        </div>
    )
}