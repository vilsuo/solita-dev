import { Station } from "../type";

interface StationTableProps {
  stations: Station[];
  navigate: (id: Station["id"]) => void;
}

const StationTable = ({ stations, navigate }: StationTableProps) => {

  return (
    <table>
      <thead>
        <tr>
          <th>Station</th>
          <th>Address</th>
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

export default StationTable;
