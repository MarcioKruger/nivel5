import Head from "next/head";
import { Menu } from "./../componentes/Menu";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Projeto em nextjs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header>
        <Menu />
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Página Inicial - Márcio Krüger</h1>
      </main>
    </div>
  );
}
