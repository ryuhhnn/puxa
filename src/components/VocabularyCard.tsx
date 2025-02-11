"use client";

import { useState } from "react";
import { Alert, Card, Input, Spin } from "antd";
import ollama from "ollama/browser";
import { LLM_MODEL } from "@/lib/constants";

interface VocabularyCardProps {
  word: string;
  getNextWord: () => void;
}

export default function VocabularyCard({ word, getNextWord }: VocabularyCardProps) {
  const [answer, setAnswer] = useState("");
  const [solution, setSolution] = useState("");
  const [solutionIsCorrect, setSolutionIsCorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitAnswer = async () => {
    setLoading(true);

    const llm = await ollama.generate({
      model: LLM_MODEL,
      prompt: `
        Você é um jogo de aprendizado de idiomas projetado para ajudar os alunos a aprender vocabulário por meio de repetição espaçada.
        Estou prestes a dar a você uma frase que o aluno criou junto com a palavra que ele deveria usar.
        Por favor, classifique a resposta do aluno com base no uso correto ou não da palavra na frase.
        Se ele cometeu algum erro de gramática ou ortografia, por favor, corrija-o.
        Retorne uma resposta como se estivesse falando diretamente com o aluno.
        Se a resposta do aluno estiver correta, retorne "TRUE" na primeira linha da sua resposta.
        Se a resposta do aluno estiver incorreta, retorne "FALSE" na primeira linha da sua resposta.

        A palavra: ${word}
        A resposta do aluno: ${answer}
      `,
    });

    const solutionData = llm.response.split("\n");
    const solutionGrade = solutionData.shift();

    setSolutionIsCorrect(!solutionGrade?.includes("FALSE"));
    setSolution(solutionData.join("\n"));
    setLoading(false);
  };

  return (
    <Card
      actions={[
        <button onClick={getNextWord}>Skip</button>,
        <button onClick={submitAnswer}>Submit</button>,
      ]}
    >
      <Card.Meta
        title={word}
        description={`Create a sentence using the word "${word}":`}
      />
      <div className="mt-2">
        <Input.TextArea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          autoSize={{ minRows: 2, maxRows: 3 }}
        />
      </div>
      <div className="mt-2">
        {loading ? <Spin /> : null}
        {solution ? (
          <Alert
            message={solution}
            type={solutionIsCorrect ? "success" : "info"}
          />
        ) : null}
      </div>
    </Card>
  );
}
