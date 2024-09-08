import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb'; // Importando ObjectId

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { id } = req.body; // Obtém o ID do corpo da requisição
            const { db } = await connectToDatabase();
            const relatorio = await db.collection('t_relatorio').findOne({ _id: new ObjectId(id) }); // Busca o relatório pelo ID

            if (relatorio) {
                return res.status(200).json({ link: relatorio.link }); // Retorna o link do relatório
            } else {
                return res.status(404).json({ message: 'Relatório não encontrado.' });
            }
        } catch (error) {
            console.error('Erro ao buscar relatório:', error);
            return res.status(500).json({ message: 'Erro no servidor.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
