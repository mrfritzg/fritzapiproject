import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Character (props) {
    let { symbol } = useParams(); // -> { symbol: ''}
    let [character2, setCharacter2] = useState({});
    let navigate = useNavigate() //->returns a function

    function goBack() {
        navigate(-1)
        }  
    async function getCharacter2() {
        // console.log(id);
        let key = '1381472152670820';
        let url = `https://www.superheroapi.com/api.php/${key}/${symbol}`;

        // let url = `https://akabab.github.io/superhero-api/api/id/${symbol}.json`;
        try {
            let response = await fetch(url);
            //    console.log(response)
             let data = await response.json();
            //   console.log(data) 
            // console.log(data.connections) 
            //   console.log(data.connections['group-affilliation']) 
            // console.log(character2)
             setCharacter2(data);
            // console.log(character2.connections)
        } catch (error) {
            console.log("something went wrong");
        }
    
    }
    console.log(character2)
    // console.log(character2.connections.groupAffiliation)
  console.log(character2.connections?.["group-affiliation"])
    useEffect(() => {
        getCharacter2();
       
    }, []);
   
    return (
        
        <div>
            {/* console.log({character2}) */}
            <img src={character2.image?.url} alt={character2.name} />
            Hello
            {character2.connections?.["group-affiliation"]}

        </div>
    )
}