import React, { useState } from "react";
import { Card, List, Input } from "antd";
import type { TabsProps } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  // "Man charged over missing wedding girl.",
  // "Los Angeles battles huge wildfires.",
  // "Racing car sprays burning fuel into crowd.",
  // "Japanese princess to wed commoner.",
  // "Australian walks 100km after outback crash.",
  // "Man charged over missing wedding girl.",
  // "Los Angeles battles huge wildfires.",
  // "Racing car sprays burning fuel into crowd.",
  // "Japanese princess to wed commoner.",
  // "Australian walks 100km after outback crash.",
  // "Man charged over missing wedding girl.",
  // "Los Angeles battles huge wildfires.",
  // "Racing car sprays burning fuel into crowd.",
  // "Japanese princess to wed commoner.",
];

const itemContent: Record<string, React.ReactNode> = {
  vocabulary: (
    <>
      <Input.Search
        placeholder="input search text"
        allowClear
        onSearch={() => {}}
        style={{ width: "100%" }}
      />
      <List
        size="small"
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  ),
  progress: <p>progress</p>,
};

const items: TabsProps["items"] = [
  {
    key: "vocabulary",
    label: "Vocabulary",
  },
  {
    key: "progress",
    label: "Progress",
  },
];

const SidebarTabs = () => {
  const [activeTab, setActiveTab] = useState("vocabulary");

  const onTabChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <Card
      className="window"
      activeTabKey={activeTab}
      tabList={items}
      onTabChange={onTabChange}
      tabProps={{
        size: "middle",
      }}
      style={{
        height: "100%",
        overflowY: "auto",
      }}
      styles={{
        header: { position: "sticky", top: 0, background: "#fff", zIndex: 1 },
      }}
    >
      {itemContent[activeTab]}
    </Card>
  );
};

export default SidebarTabs;
