// pages/api/docs.js
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../../lib/swagger';

export default function handler(req, res) {
    if (req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(swaggerDocs);
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
