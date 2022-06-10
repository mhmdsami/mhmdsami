import { Db, MongoClient } from 'mongodb';

let db: Db;

async function initializeClient(): Promise<Db> {
    const client = await MongoClient.connect(process.env.DB_URI || "");
    return client.db(process.env.DB_NAME);
}

const database = async (): Promise<Db> => {
    if (!db) {
        db = await initializeClient();
    }
    return db;
};

export default database;
