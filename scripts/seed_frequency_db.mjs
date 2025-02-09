import { promises as fs } from "fs";
import { parse } from "csv-parse/sync";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

// Open sqlite connection
const db = await open({
  filename: "./data/puxa.db",
  driver: sqlite3.Database,
});

try {
  await db.exec("CREATE TABLE vocabulary (word TEXT, frequency INTEGER)");
} catch (e) {
  console.error("couldn't create table: ", e.getMessage());
} finally {
  console.log("table created");
}

// Read the content
const content = await fs.readFile("./data/brazilian_portuguese.csv");
// Parse the CSV content
const records = parse(content, { bom: true });

for (const record of records) {
  try {
    console.log("loading records into table");
    await db.run(
      "INSERT INTO vocabulary(word, frequency) VALUES (:word, :frequency)",
      {
        ":word": record[0],
        ":frequency": record[1],
      }
    );
  } catch (e) {
    console.error(
      "unable to write word to vocabulary database: ",
      e.getMessage()
    );
  }
}

console.log("done :)");
