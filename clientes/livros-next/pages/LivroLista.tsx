import type { NextPage } from "next";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from "react";
import { Livro } from "../classes/modelo/Livro";
import { Menu } from "../componentes/Menu";
import { LinhaLivro } from "../componentes/LinhaLivro";
import Head from "next/head";

const baseURL = "http://localhost:3000/api/livros";

const obter = async () => {
  const res = await fetch(baseURL);
  return res.json();
};

const excluirLivro = async (codigo: number) => {
  const res = await fetch(`${baseURL}/${codigo}`, {
    method: "DELETE",
  });
  return res.ok;
};

const LivroLista = () => {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(() => {
    obter().then((data: Array<Livro>) => {
      setLivros(data);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    sucesso ? setCarregado(false) : console.log(sucesso, codigo);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next | Catálago</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Menu />
      <main className="container">
        {!carregado && (
          <div className={styles.load}>
            <div className={styles.load_box}>
              <div className={styles.load_box_circle}></div>
              <p className={styles.load_box_title}>Carregando...</p>
            </div>
          </div>
        )}
        <h1>Catálogo de Livros</h1>
        <table className="table table-striped">
          <thead className="table-dark">
            <tr>
              <th scope="col">Titulo</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluir(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
