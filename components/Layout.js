import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import useStyles from "../utils/GlobalStyle";
import Main from "./Main";
import SubMain from "./SubMain";
import Skill from "./Skill";

export default function Layout({ children }) {
  const footer = useStyles();
  // Breakpoints

  return (
    <div>
      <Head>
        <title>Manuel Graglia</title>
      </Head>
      <Navbar />
      <div>{children}</div>
    </div>
  );
}
