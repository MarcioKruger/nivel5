import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from ".";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const codEditora = Number(req.query.codEditora);
    if (!isNaN(codEditora)) {
      const nomeEditora = controleEditora.getNomeEditora(codEditora);
      if (nomeEditora) {
        res.status(200).json({ nome: nomeEditora });
      } else {
        res.status(404).json({ error: "Editora não encontrada" });
      }
    } else {
      res.status(400).json({ error: "Código de editora inválido" });
    }
  } else {
    res.status(405).end();
  }
};
