// pages/api/handleClick.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      // Lógica de servidor aqui
      console.log('Clicado!');
      res.status(200).json({ message: 'Ação concluída com sucesso!' });
    } catch (error) {
      console.error('Erro ao processar a ação:', error);
      res.status(500).json({ message: 'Falha ao processar a ação' });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}