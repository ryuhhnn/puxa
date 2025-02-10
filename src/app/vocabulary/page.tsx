"use server";

import VocabularyFactory from "@/factories/VocabularyFactory";
import { DEFAULT_DIFFICULTY } from "@/lib/constants";
import { Difficulty } from "@/lib/types";
import Board from "./Board";

export default async function Vocabulary({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: Difficulty | undefined }>;
}) {
  const { difficulty = DEFAULT_DIFFICULTY } = await searchParams;
  const words = await VocabularyFactory(difficulty);

  return (
    <>
      <h1>Vocabulary</h1>
      {words && <Board words={words} />}
    </>
  );
}
