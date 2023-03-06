import { Link } from "react-router-dom";
import AddFavorites from "./AddFavorite";
import DeleteFavorite from "../components/DeleteFavorite";

export default function CharacterItem({ pageSource,hero }) {

    function favoriteCharacter(hero) {

        //get the current hero objects from local storage
        // let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
        // console.log(currentStorage);
       
        //check if the hero is already a favorite
        // initial set a variable to false that it isn't there
    //     let isItemThere = false;
    //     currentStorage.forEach(prevHeroes => {
    //         //if true, set isItemThere is true
    //         if (hero.id === prevHeroes.id) {
    //             //send an alert that the character is already there
    //             alert(`That Character is already in to your Favorites!`)
    //             isItemThere = true;
    //         }
    //     });
    //     // if item is not there -- add it to localstorage
    //     if (!isItemThere) {
    //         //update local storage
    //         localStorage.setItem("favs", JSON.stringify([...currentStorage, hero])) 
    //     }
    }

    // function removeCharacter(hero) {

    //     //get the current hero objects from local storage
    //     // let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
       
    //     let newStorage = currentStorage.filter(prevHeroes => (hero?.id !== prevHeroes.id))
    //         //update local storage
    //     localStorage.setItem("favs", JSON.stringify(newStorage)) 
    //     setFavCharacters(newStorage)
  
    //     }

    return (
        <div className="heroDiv" key={hero.id}>
            <Link to={`/character/${hero.id}`}>
                <img src={hero.images?.sm || hero.image?.url} alt={hero.name} />
            </Link>
            <div className="heroInfo">
                <h3 className="heroName">{hero.name} </h3>

                {/* <button onClick={ () => {favoriteCharacter(hero)}}>
                    Add to Favorites</button> */}
                
                {pageSource !=='delFavorites'? <AddFavorites hero={hero} /> : <p></p> }

            </div>
        </div>
    )
}