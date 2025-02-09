"use server";
import db from "@/lib/db";
import VocabularyCard from "@/components/VocabularyCard";

export default async function Vocabulary() {
  const results = await db.all(
    "SELECT word FROM vocabulary ORDER BY RANDOM() LIMIT 1"
  );
  const word = results[0].word;

  return (
    <>
      <h1>Vocabulary</h1>
      <VocabularyCard word={word} />
    </>
  );
}
