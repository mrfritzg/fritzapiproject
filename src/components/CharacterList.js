import CharacterItem from "./CharacterItem";

export default function CharacterList({ heroData }) {
    //  console.log(heroData);
    return (
        <div className="heroList">
            <h1> This is the character List</h1>
            
            {/* <CharacterItem heroData={heroData}/> */}
            {heroData.map(hero => {
                return (
                    <CharacterItem key={hero.id} hero={hero}/>
                )})}
        </div>
    )
}