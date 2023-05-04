import React, { FC, ReactNode } from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface Props {
  children: ReactNode;
  title?: string;
}

const origin = (typeof window === 'undefined' ) ? '' : window.location.origin

export const Layout: FC<Props> = ({ children, title }) => {
  
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Daniel Calderón" />
        <meta name="description" content={`Informacion sobre el pokemon`} />
        <meta name="keywords" content={`pokemon`} />
        <meta
          property="og:title"
          content={`Información sobre el pokemon ${title}`}
        />
        <meta
          property="og:description"
          content={`Esta es la página sobre ${title}`}
        />
        <meta property="og:image" 
        content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: " 0px 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
