import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function CharacterItem({heroData}) {
    // console.log(heroData);
    let navigate = useNavigate() //->returns a function

function goBack() {
navigate(-1)
}
    return (
        <div>
            
        {heroData.map(hero => {
            return (
                <div className="heroDiv" key={hero.id}>
                    <Link to={`/character/${hero.id}`}>
                        <img src={hero.images.sm} alt={hero.name} />
                        </Link>
                    <div className="heroInfo">
                    <h3 className="heroName">{hero.name} </h3>

                    </div>
                    
                </div>
            )
        })}
        </div>
    )
}