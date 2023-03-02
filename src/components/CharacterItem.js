import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

export default function CharacterItem({ key, hero }) {
    console.log(hero);


    let heroImage;
    // hero.images === undefined ?  heroImage = hero.image.url : heroImage = hero.images.sm


    return (
        <div> Hello

            {/* {heroData.map(hero => {
            let heroImage //= hero.images || hero.image.url;
            // console.log(hero.image.url);
           
            hero.images === undefined ?  heroImage = hero.image.url : heroImage = hero.images.sm
            return (
                <div className="heroDiv" key={hero.id}>
                    <Link to={`/character/${hero.id}`}>
                        <img src={heroImage} alt={hero.name} />
                        </Link>
                    <div className="heroInfo">
                    <h3 className="heroName">{hero.name} </h3>

                    </div>
                    
                </div>
            )
        })} */}


            <div className="heroDiv" key={hero.id}>
                <Link to={`/character/${hero?.id}`}>
                    {/* <img src={heroImage} alt={hero.name} /> */}
                    <img src={hero?.images.sm || hero?.image.url} alt={hero.name} />
                </Link>
                <div className="heroInfo">
                    <h3 className="heroName">{hero.name} </h3>

                </div>

            </div>

        </div>
    )
}