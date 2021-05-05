import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Brightness7, Brightness2 } from "@material-ui/icons";
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
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            Koftov's World
          </a>
        </Link>

        <button className={styles.themeSwitcher} onClick={switchTheme}>
          {theme === 'light' ? <Brightness2 /> : <Brightness7 /> }
        </button>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>Ahronlu @ ahronlu.com</footer>
    </div>
  );
};

export default Layout;
