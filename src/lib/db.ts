import sqlite3 from "sqlite3";
import { open } from "sqlite";
import { DB_FILENAME } from "./constants";

export default await open({
  driver: sqlite3.Database,
  filename: DB_FILENAME,
});
