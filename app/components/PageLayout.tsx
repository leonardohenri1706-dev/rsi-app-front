"use client";

import Image from "next/image";

import { Background, Clipboard } from ".";
import PageContextProvider from "../store/PageContext";

interface Props {
  children: React.ReactNode;
  title: string;
}

const LogoOnClipboard = () => (
  <Image
    className="absolute left-1/2 transform -translate-x-1/2 top-[4rem]"
    alt="Logo of RSI App"
    src="/logo_full.svg"
    objectFit="contain"
    quality={100}
    height={200}
    width={200}
  />
);

export const PageLayout: React.FC<Props> = ({ title, children }) => (
  <PageContextProvider title={title}>
    <Background>
      <Clipboard>
        <LogoOnClipboard />

        <div className="absolute left-1/2 transform -translate-x-1/2 top-[10rem] w-full h-[80%] overflow-y-auto overflow-x-hidden z-1 px-[5rem]">
          {children}
        </div>
      </Clipboard>
    </Background>
  </PageContextProvider>
);
