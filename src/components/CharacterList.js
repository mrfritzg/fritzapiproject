import CharacterItem from "./CharacterItem";
// import AddFavorite from "./AddFavorite";
import { useEffect, useState } from "react";

export default function CharacterList({ heroData }) {
    
    let [pageSource, setPageSource] = useState('characterlist'); 

    //  console.log(heroData);
    return (
        <div className="heroList">
            <h1> This is the character List</h1>
            
            {/* <CharacterItem heroData={heroData}/> */}
            {heroData.map(hero => {
                return (
                    <div>
                    <CharacterItem pageSource={pageSource} key={hero.id} hero={hero}/>
                    {/* <AddFavorite key={hero.id}  hero={hero}/>  */}
                    </div>
                )})}
        </div>
    )
}