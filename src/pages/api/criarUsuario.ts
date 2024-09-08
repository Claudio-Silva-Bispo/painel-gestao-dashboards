
/**
 * @swagger
 * /usuarios:
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
 *               email:
 *                 type: string
 *               password:
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
import { Usuario } from '../../backend/Models/usuario';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, password }: Usuario = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
        }

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const { db } = await connectToDatabase();
            const result = await db.collection('t_usuario').insertOne({ name, email, password: hashedPassword });
            return res.status(201).json({ message: 'Usuário salvo com sucesso', id: result.insertedId });
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
            return res.status(500).json({ error: 'Erro ao salvar usuário' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).end(`Método ${req.method} não permitido`);
    }
}
