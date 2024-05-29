import { useEffect, useState } from "react";
import { Station } from "./type";
import axios from "axios";
import StationTable from "./components/StationTable";

const BASE_URL = '/api'

const App = () => {
  const [stations, setStations] = useState<Station[]>([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/stations`)
      .then((response) => setStations(response.data))
      .catch((error) => console.log('Error', error));
  }, []);

  return (
    <div>
      <h1>Hello</h1>

      <StationTable stations={stations} />
    </div>
  );
}

export default App;
