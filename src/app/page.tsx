"use client";

import "@ant-design/v5-patch-for-react-19";
import { useState } from "react";
import { Button, List, Radio } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";
import { Difficulty } from "@/lib/types";
import { DEFAULT_DIFFICULTY } from "@/lib/constants";

const games = [
  {
    id: "vocabulary",
    title: "Vocabulary",
    url: "/vocabulary",
  },
  // {
  //   id: "short_story",
  //   title: "Short Story",
  //   url: "/short-story",
  // },
  {
    id: "everyday_scenario",
    title: "Everyday Scenario",
    url: "/everyday-scenario",
  },
];

const difficultyOptions: CheckboxGroupProps<string>["options"] = Object.values(
  Difficulty
).map((level) => ({
  label: level.charAt(0) + level.substring(1).toLowerCase(),
  value: level,
}));

export default function Home() {
  const [difficultySettings, setDifficultySettings] = useState(
    new Map<string, string>(games.map((game) => [game.id, DEFAULT_DIFFICULTY]))
  );

  return (
    <main>
      <h1>Puxa!</h1>
      <List
        dataSource={games}
        renderItem={(game, i) => (
          <List.Item
            key={i}
            actions={[
              <Radio.Group
                block
                options={difficultyOptions}
                defaultValue={DEFAULT_DIFFICULTY}
                optionType="button"
                size="small"
                onChange={(e) =>
                  setDifficultySettings((previousSettings) => {
                    const newSettings = new Map(previousSettings);
                    newSettings.set(game.id, e.target.value);

                    return newSettings;
                  })
                }
              />,
            ]}
          >
            <Button
              type="link"
              href={`${game.url}?difficulty=${difficultySettings.get(game.id)}`}
            >
              {game.title}{" "}
            </Button>
          </List.Item>
        )}
      ></List>
    </main>
  );
}
