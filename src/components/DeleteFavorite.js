import { useEffect, useState } from "react";
export default function DeleteFavorite({hero}) {
    // console.log(key)

    // let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
    
    

    // useEffect(() =>
    // {
    //   setFavCharacters(currentStorage)
    // },[])


    function removeCharacter() {

        //get the current hero objects from local storage
        let currentStorage = JSON.parse(localStorage.getItem("favs")) || []

        console.log(currentStorage);
       
        let newStorage = currentStorage.filter(prevHeroes => (hero.id !== prevHeroes.id))
            //update local storage
        localStorage.setItem("favs", JSON.stringify(newStorage)) 
        //  setFavCharacters(newStorage)
  
        }
    
    return (
        <div>
        <button onClick= { removeCharacter}>
    Remove from Favorites </button>
        </div>
    )
}