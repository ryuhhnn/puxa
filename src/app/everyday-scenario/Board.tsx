"use client";

import { useState, useEffect, useCallback } from "react";
import ScenarioPrompt from "@/components/ScenarioPrompt";
import { DictionaryEntry } from "@/lib/types";

interface BoardProps {
  words: DictionaryEntry[];
}

export default function Board({ words }: BoardProps) {
  const [word, setWord] = useState("");
  const wordGenerator = useCallback(
    function* (words: DictionaryEntry[]) {
      for (const word of words) {
        yield word;
      }
    },
    [words]
  );
  const [generator] = useState(wordGenerator(words));

  const getNextWord = () => {
    const result = generator.next();

    if (!result.done) {
      setWord(result.value.word);
    }
  };

  useEffect(() => {
    getNextWord();
  }, [words]);

  return word && <ScenarioPrompt word={word} getNextWord={getNextWord} />;
}
