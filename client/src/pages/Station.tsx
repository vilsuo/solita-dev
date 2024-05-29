import axios from "axios";
import { Params, useLoaderData, useNavigate } from "react-router-dom";
import { Station as SingleStation } from "../type";

const BASE_URL = '/api';

// https://stackoverflow.com/a/77481099
export const loader = async ({ params }: { params: Params<"id">}) => {
  const response = await axios.get(`${BASE_URL}/stations/${params.id}`);
  return response.data;
};

/*
Display:
  Station name
  Station address
  Total number of journeys starting from the station
  Total number of journeys ending at the station
  Average distance of journeys starting from the station
  Avarage duration of journeys starting from the station
*/

const Station = () => {
  const station = useLoaderData() as SingleStation;
  const navigate = useNavigate();

  const handleBackNavigate = () => {
    navigate("/");
  };

  return (
    <div className="station">
      <h1>{station.stationName}</h1>

      <div>

      </div>

      <button onClick={handleBackNavigate}>Back</button>
    </div>
  );
};

export default Station;
