import { useEffect, useState } from "react";
function App() {
  return (
    <div>

      let key = process.env.REACT_APP_KEY;

      let {symbol} = useParams(); // -> {symbol: ''}

      console.log(symbol);

      let url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${key}`;

      let [ coin, setCoin ] = useState(null);

{/* let navigate = useNavigate() //->returns a function */}

      async function getData() {
    try {
        const response = await fetch(url);
      const data = await response.json();
      setCoin(data);
    } catch (err) {
        console.error(err);
    }
}
      
      useEffect( () => {
        getData()
      })


    </div>
  );
}

export default App;
