import CharacterPill from "./CharacterItem";

export default function CharacterList({ heroData }) {
    console.log(heroData);
    return (
        <div className="heroList">
            <h1> This is the character List</h1>
            <CharacterPill heroData={heroData}/>
        </div>
    )
}