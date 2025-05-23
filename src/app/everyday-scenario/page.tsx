"use server";

import Board from "./Board";
import VocabularyFactory from "@/factories/VocabularyFactory";
import { DEFAULT_DIFFICULTY } from "@/lib/constants";
import type { Difficulty } from "@/lib/types";

export default async function EverydayScenario({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: Difficulty | undefined }>;
}) {
  const { difficulty = DEFAULT_DIFFICULTY } = await searchParams;
  const words = await VocabularyFactory(difficulty);

  return words && <Board words={words} />;
}
