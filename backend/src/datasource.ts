import { DataSource } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";
import { Station } from "./entity/Station";
import { Journey } from "./entity/Journey";

const POSTGRES_HOST = 'localhost';
const POSTGRES_USER = "academy";
const POSTGRES_PASSWORD = "academy";
const POSTGRES_DB = "citybike";
const DATABASE_PORT = 5433;

export const AppDataSource = new DataSource({
  type: "postgres",
  host:POSTGRES_HOST,
  port: DATABASE_PORT,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [Station, Journey],
  subscribers: [],
  migrations: [],
  namingStrategy: new SnakeNamingStrategy(),
});
