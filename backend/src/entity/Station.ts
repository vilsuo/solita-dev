import { Column, ColumnOptions, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Journey } from "./Journey";

const VARCHAR_100: Partial<ColumnOptions> = {
  type: "character varying",
  length: 100,
  nullable: true
};

@Entity()
export class Station {
  @PrimaryColumn({ type: "integer" })
  id!: number;

  @Column(VARCHAR_100)
  stationName!: string | null;

  @Column(VARCHAR_100)
  stationAddress!: string | null;

  @Column(VARCHAR_100)
  coordinateX!: string | null;

  @Column(VARCHAR_100)
  coordinateY!: string | null;

  @OneToMany(() => Journey, (journey) => journey.departureStationId)
  departures!: Journey[];

  @OneToMany(() => Journey, (journey) => journey.returnStationId)
  returns!: Journey[];
};
