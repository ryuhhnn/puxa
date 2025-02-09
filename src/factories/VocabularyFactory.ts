"use server";

import type { Database } from "sqlite";
import db from "@/lib/db";

export default new (class VocabularyFactory {
  private db;

  constructor(db: Database) {
    this.db = db;
  }

  public *getNextWord() {}
})(db);
