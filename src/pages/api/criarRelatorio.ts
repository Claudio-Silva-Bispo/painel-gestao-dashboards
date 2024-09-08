
/**
 * @swagger
 * /relatorios:
 *   post:
 *     summary: Cadastrar um novo usuário
 *     description: Cria um novo usuário com nome, email e senha.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               responsible:
 *                 type: string
 *               update:
 *                 type: string
 *               link:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro de validação
 *       500:
 *         description: Erro interno do servidor
 */

import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../lib/mongodb';

// Instalar npm i --save-dev @types/bcryptjs
import bcrypt from 'bcryptjs';
import { Relatorio } from '../../backend/Models/relatorio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, responsible, data, link }: Relatorio = req.body;

        if (!name || !responsible || !data || !link) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const hashedPassword = await bcrypt.hash(link, 10);
            const { db } = await connectToDatabase();
            const result = await db.collection('t_relatorio').insertOne({ name, responsible, data, link: hashedPassword });
            return res.status(201).json({ message: 'Relatório salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar relatório:', error);
            return res.status(500).json({ error: 'Erro ao salvar relatório' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
