import React from "react";
import Head from "next/head";
import Link from "next/link";
// styles
import s from "./index.module.scss";

const Header = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={s.header}>
        <p>Header</p>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
