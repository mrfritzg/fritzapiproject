import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";


export default function CharacterItem({ hero }) {
    // console.log(hero);


    let heroImage;
    // hero.images === undefined ?  heroImage = hero.image.url : heroImage = hero.images.sm
function loaded() {

}

let [favorites, setFavorites ] = useState(false);
let [favChars, setFavChars ] = useState([]);

// useEffect( () => {setFavorite(!favorite)},[favorite])

function favoriteCharacter(hero){
    console.log(favChars)
    // console.log(hero);
    //set the value of current storage
    let currentStorage = JSON.parse(localStorage.getItem("favs")) || []
    setFavChars(favChars.map( () => {
        return {

        }
    }))
    console.log(favChars);
    //update local storage
    localStorage.setItem("favs", JSON.stringify([...currentStorage,hero]))
    // localStorage.setItem("favs", JSON.stringify(favChars))
    setFavorites(!favorite)
    // if(favCharacter === true){  
    //     setFavCharacter(!favCharacter)
    //     localStorage.setItem("favs", JSON.stringify([...currentStorage,hero]))
    // } else {
    //     curren
    // }

//1 -- check if the local storage

}

    return ( 
            <div className="heroDiv" key={hero.id}>
                <Link to={`/character/${hero.id}`}>
                    <img src={hero.images?.sm || hero.image?.url} alt={hero.name} />                   
                </Link>
                <div className="heroInfo">
                    <h3 className="heroName">{hero.name} </h3>
                    <input type="checkbox" checked = {favorites}
        onChange={() => {
             favoriteCharacter(hero)
             //setFavorite(true)
        }}  id="fav1" name="fav1"
      /> <label for="fav1">Add to Favorites</label>
                </div>
            </div>

       
    )
}