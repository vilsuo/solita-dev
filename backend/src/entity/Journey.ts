import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Station } from "./Station";

@Entity()
export class Journey {
  @PrimaryColumn({ type: "integer" })
  id!: number;

  @Column({ type: "timestamp", nullable: true })
  departure_date_time!: Date | null;

  @Column({ type: "timestamp", nullable: true })
  return_date_time!: Date | null;

  // #######################
  // see https://github.com/typeorm/typeorm/issues/586#issuecomment-311282863

  @Column({ type: "integer", name: 'departure_station_id' })
  departure_station_id!: number;

  @ManyToOne(() => Station, (station) => station.departures)
  @JoinColumn({ name: 'departure_station_id' })
  departure_station!: Journey;


  @Column({  type: "integer", name: 'return_station_id' })
  return_station_id!: number;

  @ManyToOne(() => Station, (station) => station.returns)
  @JoinColumn({ name: 'return_station_id' })
  return_station!: Journey;
  
  // #######################

  // Distance of journey in meters
  @Column({ type: "integer", nullable: true })
  distance!: number | null;

  // Duration of journey in seconds
  @Column({ type: "integer", nullable: true })
  duration!: number | null;
};
