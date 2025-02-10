import { Database, open } from "sqlite";
import { DB_FILENAME } from "./constants";

export default await open({
  driver: Database,
  filename: DB_FILENAME,
});
