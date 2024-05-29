import { StationResponse } from "../pages/Station";

interface StationInfoProps {
  stationInfo: StationResponse;
}

const StationInfo = ({ stationInfo }: StationInfoProps) => {
  const { station, starting, averageDistance, averageDuration, ending } = stationInfo;

  return (
    <div className="station-info">
      <h1>{station.stationName}</h1>

      <div>
        <p>Station address: <span>{station.stationAddress}</span></p>
        <p>Total number of journeys starting from the station: <span>{starting}</span></p>
        <p>Total number of journeys ending at the station: <span>{ending}</span></p>
        <p>Average distance of journeys starting from the station: <span>{averageDistance}</span></p>
        <p>Avarage duration of journeys starting from the station: <span>{averageDuration}</span></p>
      </div>
    </div>
  );
};

export default StationInfo;
