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
  station_name!: string | null;

  @Column(VARCHAR_100)
  station_address!: string | null;

  @Column(VARCHAR_100)
  coordinate_x!: string | null;

  @Column(VARCHAR_100)
  coordinate_y!: string | null;

  @OneToMany(() => Journey, (journey) => journey.departure_station_id)
  departures!: Journey[];

  @OneToMany(() => Journey, (journey) => journey.return_station_id)
  returns!: Journey[];
};
