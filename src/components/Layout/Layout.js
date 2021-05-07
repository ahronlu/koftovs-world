import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brightness7, Brightness3 } from "@material-ui/icons";
import styles from "./Layout.module.css";

const Layout = ({ children, title = "World Ranks" }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      localStorage.getItem("theme")
    );

    setTheme(localStorage.getItem("theme"));
  }, []);

  const switchTheme = () => {
    if (theme === "light") {
      saveTheme("dark");
    } else {
      saveTheme("light");
    }
  };

  const saveTheme = (theme) => {
    setTheme(theme);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="World" />
        <meta name="keywords" content="Countries API" />
        <title>{title}</title>
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/manifest-icon-192.png"
          rel="icon"
          type="image/png"
          sizes="192x192"
        />
        <link
          href="/icons/manifest-icon-512.png"
          rel="icon"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/apple-icon-180.png"></link>
        <meta name="theme-color" content="#606060" />
        
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            Koftov's World
          </a>
        </Link>

        <button className={styles.themeSwitcher} onClick={switchTheme} aria-label="toggle dark/light mdde">
          {theme === 'dark' ? <Brightness7 /> : <Brightness3 />}
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Ahronlu @ <a href="#" target="_blank" rel="noopener">ahronlu.com</a></footer>
    </div>
  );
};

export default Layout;
