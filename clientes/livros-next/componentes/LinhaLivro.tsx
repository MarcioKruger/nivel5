import React from "react";
import { ControleEditora } from ".././classes/controle/ControleEditora";

export const controleEditora = new ControleEditora();

interface Livro {
    titulo: string;
    autor: string;
    editora: string;
    codigo: number;
    resumo: string;
    codEditora: number;
    autores: string[];
  }
  
interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
  }
  
   export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    const { livro, excluir } = props;
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    const handleExcluir = () => {
        excluir();
      };
    
    return (
      <tr>
        <td className="text-start">
          {livro.titulo}
          <button className="btn btn-danger d-block mt-2" onClick={handleExcluir}>
            Excluir
          </button>
        </td>
        <td className="text-start w-50">{livro.resumo}</td>
        <td className="text-start">{nomeEditora}</td>
        <td className="text-start">
          <ul>
            {livro.autores.map((autor, index) => (
              <li key={index}>{autor}</li>
            ))}
          </ul>
        </td>
      </tr>
    );
  };
  