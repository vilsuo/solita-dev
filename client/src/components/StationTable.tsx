import { Station } from "../type"

interface StationTableProps {
  stations: Station[];
}

const StationTable = ({ stations }: StationTableProps) => {

  const formatCoordinates = (station: Station) => {
    return `(${station.coordinateX}, ${station.coordinateY})`
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Station</th>
          <th>Address</th>
          <th>Coordinates (x, y)</th>
        </tr>
      </thead>
      <tbody>
        {stations.map((station) =>
          <tr key={station.id}>
            <td>{station.stationName}</td>
            <td>{station.stationAddress}</td>
            <td>{formatCoordinates(station)}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default StationTable;
