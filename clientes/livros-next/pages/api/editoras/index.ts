import { ControleEditora } from './../../../classes/controle/ControleEditora';
import { NextApiRequest, NextApiResponse } from 'next';

export const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  const metodo = req.method;

  switch (metodo) {
    case 'GET':
      const editoras = controleEditora.getEditoras();
      res.status(200).json(editoras);
      break;
    default:
      res.status(405).json({ error: 'Método não permitido' });
      break;
  }
};