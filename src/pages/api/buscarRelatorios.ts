
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { db } = await connectToDatabase();
            const relatorios = await db.collection('t_relatorio').find().toArray();
            const relatoriosComId = relatorios.map(relatorio => ({
                ...relatorio,
                id: relatorio._id.toString(),
            }));
            return res.status(200).json(relatoriosComId);
        } catch (error) {
            console.error('Erro ao buscar relatórios:', error);
            return res.status(500).json({ error: 'Erro ao buscar relatórios' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
