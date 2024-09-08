
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        try {
            const { db } = await connectToDatabase();
            const usuarios = await db.collection('t_usuario').find().toArray();
            const usuariosComId = usuarios.map(usuario => ({
                ...usuario,
                id: usuario._id.toString(),
            }));
            return res.status(200).json(usuariosComId);
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return res.status(500).json({ error: 'Erro ao buscar usuários' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
