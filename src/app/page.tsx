"use client";

import "@ant-design/v5-patch-for-react-19";

import HomeLayout from "@/components/Layout";
import SidebarTabs from "@/components/SidebarTabs";
import Toolbar from "@/components/Toolbar";
import Image from "next/image";

export default function Home() {
  return (
    <HomeLayout
      mainWindow={
        <>
          <h1 className="text-center mb-2">Puxa!</h1>
          <div
            className="rounded-xl"
            style={{
              backgroundColor: "var(--accent-blue)",
              width: 250,
              height: 250,
              margin: "0 auto",
            }}
          >
            <Image
              src="/puxa-icon.png"
              alt=""
              width={250}
              height={250}
              priority={true}
            />
          </div>
        </>
      }
      sidebar={<SidebarTabs />}
      toolbar={<Toolbar />}
    />
  );
}
