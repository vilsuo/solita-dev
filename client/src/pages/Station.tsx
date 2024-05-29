import axios from "axios";
import { Params, useLoaderData, useNavigate } from "react-router-dom";
import { Station as SingleStation } from "../type";
import StationInfo from "../components/StationInfo";

const BASE_URL = '/api';

export type StationResponse = {
  station: SingleStation,
  starting: number;
  averageDistance: number;
  averageDuration: number;
  ending: number;
}

// https://stackoverflow.com/a/77481099
export const loader = async ({ params }: { params: Params<"id">})
  : Promise<StationResponse> =>
{
  const response = await axios.get(`${BASE_URL}/stations/${params.id}`);
  return response.data;
};

const Station = () => {
  const stationInfo = useLoaderData() as StationResponse;

  const navigate = useNavigate();

  const handleBackNavigate = () => {
    navigate("/");
  };

  return (
    <div className="station">
      <StationInfo stationInfo={stationInfo} />

      <button onClick={handleBackNavigate}>Back</button>
    </div>
  );
};

export default Station;
