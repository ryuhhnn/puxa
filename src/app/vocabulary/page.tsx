"use server";

import Board from "./Board";
import GameLayout from "@/components/GameLayout";
import VocabularyFactory from "@/factories/VocabularyFactory";
import { DEFAULT_DIFFICULTY } from "@/lib/constants";
import type { Difficulty } from "@/lib/types";

export default async function Vocabulary({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: Difficulty | undefined }>;
}) {
  const { difficulty = DEFAULT_DIFFICULTY } = await searchParams;
  const words = await VocabularyFactory(difficulty);

  return (
    <GameLayout>
      <h1>Vocabulary</h1>
      {words && <Board words={words} />}
    </GameLayout>
  );
}
