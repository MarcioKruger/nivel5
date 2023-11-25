import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "DELETE") {
      const { codigo } = req.query;
      if (codigo) {
        try {
          const codigoLivro = Number(codigo);
          const livroExcluido = controleLivro.excluir(codigoLivro);
          if (livroExcluido !== null) {
            res.status(200).json({ message: "Livro excluído com sucesso" });
          } else {
            res.status(404).json({ error: "Livro não encontrado" });
          }
        } catch (error) {
          res.status(500).json({ error: "Erro interno do servidor" });
        }
      } else {
        res.status(400).json({ error: "Código de livro inválido" });
      }
    } else {
      res.status(405).end();
    }
  };
  