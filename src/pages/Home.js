import { useEffect, useState } from "react";
import CharacterList from "../components/CharacterList";
import useFetch from "../components/useFetch";
import { Link } from "react-router-dom";

export default function Home() {

  // let key = process.env.REACT_APP_KEY;

  // let {symbol} = useParams(); // -> {symbol: ''}

  // console.log(symbol);

  let url = `https://akabab.github.io/superhero-api/api/all.json`;

  // let [heroData, setHeroData] = useState([]);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null)

  {/* let navigate = useNavigate() //->returns a function */ }

  // async function getHeroData() {
  //   try {
  //     const response = await fetch(url);
  //     // console.log(response);
  //     if (!response.ok) {
  //       throw Error('ERROR!! -- could not reach the data for that resource');
  //     }
  //     const data = await response.json();
  //     setHeroData(data);
  //     setIsPending(false);
  //     setError(null);
  //   } catch (err) {
  //     console.error(err);
  //     setError(err.message);
  //     setIsPending(false)
  //   }
  // }

  // useEffect(() => {
  //   getHeroData()
  // }, [])
  //  console.log(heroData);

  const {data:heroData , isPending, error} = useFetch(url)
  return (
    <div className="homepage">

      <h1>The Super Heroes/Villains Website</h1>
      <h2>This Website provides Hero/Villain from mutliple universes. Most Websites give you only one comic book creator source, but we give you Marvel, DC and more!.</h2>
      <h2>Please Scroll Thru and find what you're looking for or Click on the Search Page.</h2>
      <h1>Please visit the updated <Link to="https://master--shiny-muffin-437497.netlify.app/">version</Link> of this web app</h1>

      {error && <div><h1>{error}</h1></div>}
      {isPending && <div><h1>LOADING...</h1></div>}
      <CharacterList heroData={heroData} />

    </div>
  );
}


