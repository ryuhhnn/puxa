"use client";

import "@ant-design/v5-patch-for-react-19";
import { Button, List, Radio } from "antd";
import type { CheckboxGroupProps } from "antd/es/checkbox";

const games = [
  {
    title: "Vocabulary",
    url: "/vocabulary",
  },
  {
    title: "Short Story",
    url: "/short-story",
  },
  {
    title: "Everyday Scenario",
    url: "/everyday-scenario",
  },
];

const options: CheckboxGroupProps<string>["options"] = [
  { label: "Beginner", value: "beginner" },
  { label: "Basic", value: "basic" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Native", value: "native" },
];

export default function Home() {
  return (
    <main>
      <h1>Puxa!</h1>
      <List
        dataSource={games}
        renderItem={(game, i) => (
          <List.Item key={i}>
            <Button type="link" href={game.url}>
              {game.title}{" "}
              <Radio.Group
                block
                options={options}
                defaultValue="basic"
                optionType="button"
                size="small"
              />
            </Button>
          </List.Item>
        )}
      ></List>
    </main>
  );
}
