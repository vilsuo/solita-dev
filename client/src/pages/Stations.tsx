import StationsTable from "../components/StationsTable";
import { Station } from "../type";
import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

const BASE_URL = '/api';

export const loader = async (): Promise<Station[]> => {
  const response = await axios.get(`${BASE_URL}/stations`);
  return response.data;
};

const Stations = () => {
  const stations = useLoaderData() as Station[];
  const navigate = useNavigate();

  const handleNavigate = (id: Station["id"]) => {
    navigate(`/stations/${id}`);
  };

  return (
    <div className="stations">
      <h1>Stations</h1>

      <StationsTable
        stations={stations}
        navigate={handleNavigate}
      />
    </div>
  );
};

export default Stations;
