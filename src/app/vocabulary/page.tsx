"use server";

// import db from "@/lib/db";
import VocabularyCard from "@/components/VocabularyCard";
// import VocabularyFactory from "@/factories/VocabularyFactory";

export default async function Vocabulary({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { difficulty = "basic" } = await searchParams;
  // const results = await db.all(
  //   "SELECT word FROM vocabulary ORDER BY RANDOM() LIMIT 1"
  // );
  // const word = results[0].word;

  const getNextWord = () => {
    // return next word from factory
  };

  return (
    <>
      <h1>Vocabulary</h1>
      {/* <VocabularyCard word={word} getNextWord={getNextWord} /> */}
    </>
  );
}
