import swaggerJsDoc from 'swagger-jsdoc';

// Configuração do Swagger
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Usuários',
            version: '1.0.0',
            description: 'Documentação da API para cadastro de usuários',
        },
        servers: [
            {
                url: 'http://localhost:3000/api', // Altere conforme necessário
            },
        ],
    },
    apis: ['./pages/api/*.js'], // Caminho para suas rotas de API
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
