import { NextApiRequest, NextApiResponse } from "next";
import { ControleLivros } from './../../../classes/controle/ControleLivros';

export const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const metodo = req.method;

  switch (metodo) {
    case 'GET':
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
      break;
    case 'POST':
      const livro = req.body;
      controleLivro.incluir(livro);
      res.status(200).json({ mensagem: 'Livro incluído com sucesso' });
      break;
    default:
      res.status(405).json({ error: 'Método não permitido' });
      break;
  }
};
