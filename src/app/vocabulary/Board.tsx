"use client";

import { useState, useEffect } from "react";
import VocabularyCard from "@/components/VocabularyCard";
import { DictionaryEntry } from "@/lib/types";

function* wordGenerator(words: DictionaryEntry[]) {
  for (const word of words) {
    yield word;
  }
}

interface BoardProps {
  words: DictionaryEntry[];
}

export default function Board({ words }: BoardProps) {
  const [word, setWord] = useState("");
  const generator = wordGenerator(words);

  const getNextWord = () => {
    const result = generator.next();
    if (!result.done) {
      setWord(result.value.word);
    }
  };

  // TODO: fix this
  useEffect(() => getNextWord(), []);

  return word && <VocabularyCard word={word} getNextWord={getNextWord} />;
}
