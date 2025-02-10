"use server";

import db from "@/lib/db";
import { DictionaryEntry, Difficulty } from "@/lib/types";

export default async function VocabularyFactory(difficulty: Difficulty) {
  const difficultyLevels = Object.values(Difficulty);
  const rowNumbers = await db.get(
    "SELECT COUNT(rowId) AS count FROM vocabulary"
  );
  const frequencyQuotient = Math.floor(
    rowNumbers.count / difficultyLevels.length
  );
  const low = 1 + frequencyQuotient * (difficultyLevels.indexOf(difficulty));
  const high = difficulty === Difficulty.NATIVE ? rowNumbers.count : low + frequencyQuotient;

  const results: DictionaryEntry[] = await db.all(`
    WITH OrderedResults AS (
      SELECT rowId, word, frequency 
      FROM vocabulary
      ORDER BY frequency DESC
    )
    SELECT * 
    FROM OrderedResults 
    WHERE rowId BETWEEN ${low} AND ${high}
    ORDER BY RANDOM() 
    LIMIT 50;
  `);

  return results;
}
