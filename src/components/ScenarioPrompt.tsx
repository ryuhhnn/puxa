"use client";

import { useEffect, useState } from "react";
import { Button, Card, Spin } from "antd";
import ollama from "ollama/browser";
import { LLM_MODEL } from "@/lib/constants";

interface ScenarioPromptProps {
  word: string;
  getNextWord: () => void;
}

export default function ScenarioPrompt({
  word,
  getNextWord,
}: ScenarioPromptProps) {
  const [description, setDescription] = useState("");
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(true);

  const getPrompt = async () => {
    setLoading(true);

    const llm = await ollama.generate({
      model: LLM_MODEL,
      prompt: `
        Você é um jogo de aprendizado de idiomas projetado para ajudar os alunos a aprender vocabulário por meio de repetição espaçada.
        Estou prestes a lhe dar uma palavra que o aluno está tentando aprender e gostaria que você fingisse ser alguém que ele encontraria em um cenário cotidiano e tentasse usar essa palavra para fazer uma pergunta ao aluno.
        Por favor, liste essa resposta em uma nova linha começando com a palavra "PROMPT".
        Você também pode incluir uma breve descrição do cenário cotidiano em uma nova linha começando com a palavra "DESCRIPTION".

        A palavra a ser usada: ${word}
      `,
    });

    const responseData = llm.response.split("\n").filter((s) => !!s);
    const scenarioDescription =
      responseData[
        responseData.findIndex((s) => s.includes("DESCRIPTION")) + 1
      ];
    const scenarioPrompt =
      responseData[responseData.findIndex((s) => s.includes("PROMPT")) + 1];

    setDescription(scenarioDescription);
    setPrompt(scenarioPrompt);
    setLoading(false);
  };

  useEffect(() => {
    getPrompt();
  }, [word]);

  return loading ? (
    <>
      <Spin />
    </>
  ) : (
    <>
      <Card>
        <Card.Meta title={`A palavra: ${word}`} description={description} />
        <p className="mt-2">{prompt}</p>
      </Card>
      <Button onClick={getNextWord}>Next prompt</Button>
    </>
  );
}
