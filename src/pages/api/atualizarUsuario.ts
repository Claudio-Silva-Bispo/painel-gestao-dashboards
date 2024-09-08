
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'PUT') {
        const { id, name, email, password } = req.body;

        if (!id || !name || !email) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const { db } = await connectToDatabase();
            const result = await db.collection('t_usuario').updateOne(
                { _id: new ObjectId(id) },
                { $set: { name, email, password } }
            );
            if (result.matchedCount === 0) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            return res.status(200).json({ message: 'Usuário atualizado com sucesso' });
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            return res.status(500).json({ error: 'Erro ao atualizar usuário' });
        }
    } else {
        res.setHeader('Allow', ['PUT']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
