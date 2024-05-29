import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Station } from "./Station";

@Entity()
export class Journey {
  @PrimaryColumn({ type: "integer" })
  id!: number;

  @Column({ type: "timestamp", nullable: true })
  departureDateTime!: Date | null;

  @Column({ type: "timestamp", nullable: true })
  returnDateTime!: Date | null;

  // #######################
  // see https://github.com/typeorm/typeorm/issues/586#issuecomment-311282863

  @Column({ type: "integer", name: 'departure_station_id' })
  departureStationId!: number;

  @ManyToOne(() => Station, (station) => station.departures)
  @JoinColumn({ name: 'departure_station_id' })
  departureStation!: Journey;


  @Column({  type: "integer", name: 'return_station_id' })
  returnStationId!: number;

  @ManyToOne(() => Station, (station) => station.returns)
  @JoinColumn({ name: 'return_station_id' })
  returnStation!: Journey;
  
  // #######################

  // Distance of journey in meters
  @Column({ type: "integer", nullable: true })
  distance!: number | null;

  // Duration of journey in seconds
  @Column({ type: "integer", nullable: true })
  duration!: number | null;
};
