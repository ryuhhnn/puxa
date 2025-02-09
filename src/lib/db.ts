import { open } from "sqlite";
import { DB_DRIVER, DB_FILENAME } from "./constants";

export default await open({
  driver: DB_DRIVER,
  filename: DB_FILENAME,
});
