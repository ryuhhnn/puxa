"use client";

import "@ant-design/v5-patch-for-react-19";
import { Button, Card, Drawer } from "antd";
import { ArrowsAltOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useAnimate } from "motion/react";

export default function Layout({
  mainWindow,
  sidebar,
  toolbar,
}: {
  mainWindow: React.ReactNode;
  sidebar: React.ReactNode;
  toolbar: React.ReactNode;
}) {
  const [scope, animate] = useAnimate();
  const [isAsideVisible, setIsAsideVisible] = useState(true);
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const onToggleFullscreen = () => {
    setIsAsideVisible((isVisible) => !isVisible);
  };

  const onToggleDrawer = () => {
    setIsDrawerVisible((isVisible) => !isVisible);
  };

  useEffect(() => {
    isDrawerVisible
      ? animate(scope.current, {
          transform: "scale(0.9) translateY(-100px)",
          filter: "blur(5px)",
        })
      : animate(scope.current, {
          transform: "scale(1) translateY(0px)",
          filter: "none",
        });
  }, [isDrawerVisible]);

  return (
    <AnimatePresence initial={false}>
      <main id="home-layout" ref={scope}>
        <motion.div className="main-window" layout>
          <Card className="window">
            <div className="flex justify-end mb-2">
              <Button
                type="default"
                variant="outlined"
                shape="circle"
                size="small"
                icon={<ArrowsAltOutlined />}
                onClick={onToggleFullscreen}
              />
            </div>
            {mainWindow}
          </Card>
        </motion.div>
        {isAsideVisible ? (
          <motion.div
            className="sidebar"
            initial={{ transform: "translateX(50px)", opacity: 0 }}
            animate={{ transform: "translateX(0px)", opacity: 1 }}
            exit={{ transform: "translateX(50px)", opacity: 0 }}
            key="aside"
          >
            <div>{sidebar}</div>
            <div>{toolbar}</div>
          </motion.div>
        ) : null}
      </main>
      {isDrawerVisible ? (
        <Drawer
          title="Basic Drawer"
          placement="bottom"
          closable={false}
          onClose={onToggleDrawer}
          open={isDrawerVisible}
          key="bottom"
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      ) : null}
    </AnimatePresence>
  );
}
