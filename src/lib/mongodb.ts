

// Instalar npm install mongodb
import { MongoClient, Db } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI!;
const MONGODB_DB = process.env.MONGODB_DB!;

if (!MONGODB_URI) {
    throw new Error('Por favor, defina a variável de ambiente MONGODB_URI no arquivo .env.local');
}

if (!MONGODB_DB) {
    throw new Error('Por favor, defina a variável de ambiente MONGODB_DB no arquivo .env.local');
}

console.log('MONGODB_URI:', MONGODB_URI); // Log para depuração
console.log('MONGODB_DB:', MONGODB_DB);   // Log para depuração

let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = new MongoClient(MONGODB_URI);

    await client.connect();
    const db = client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
}
