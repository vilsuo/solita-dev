import { Station } from "../type";

interface StationsTableProps {
  stations: Station[];
  navigate: (id: Station["id"]) => void;
}

const StationsTable = ({ stations, navigate }: StationsTableProps) => {

  return (
    <table className="stations-table">
      <thead>
        <tr>
          <th>Station name</th>
          <th>Station Address</th>
        </tr>
      </thead>
      <tbody>
        {stations.map((station) =>
          <tr key={station.id} onClick={() => navigate(station.id)}>
            <td>{station.stationName}</td>
            <td>{station.stationAddress}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default StationsTable;
