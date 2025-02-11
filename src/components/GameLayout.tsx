"use client";

import "@ant-design/v5-patch-for-react-19";
import { Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function GameLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Button
        icon={<HomeOutlined />}
        href="/"
      />
      {children}
    </>
  );
}
