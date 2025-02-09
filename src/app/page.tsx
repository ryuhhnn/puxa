"use client";

import "@ant-design/v5-patch-for-react-19";
import { Button, List } from "antd";

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

export default function Home() {
  return (
    <main>
      <h1>Puxa!</h1>
      <List
        dataSource={games}
        renderItem={(game, i) => (
          <List.Item key={i}>
            <Button type="link" href={game.url}>{game.title}</Button>
          </List.Item>
        )}
      ></List>
    </main>
  );
}
