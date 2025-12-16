import type { Db } from "mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";

// --- Configuration ---
const MONGODB_URI = process.env.MONGODB_URI;
// Using process.env.MONGODB_DB_NAME is good practice, falling back to "Cluster0" as it was previously hardcoded.
const dbName = process.env.MONGODB_DB_NAME || "Cluster0";

const clientOptions = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

// --- Connection Caching Logic for Next.js/Vercel ---

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

function getClientPromise() {
    if (clientPromise) return clientPromise;

    if (!MONGODB_URI) {
        throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
    }

    if (process.env.NODE_ENV === "development") {
        // In development mode, use a global variable to preserve the client across HMR reloads.
        const globalAny = global as any;
        if (!globalAny._mongoClientPromise) {
            client = new MongoClient(MONGODB_URI, clientOptions);
            globalAny._mongoClientPromise = client.connect();
        }
        clientPromise = globalAny._mongoClientPromise;
    } else {
        // In production mode, simply create the promise.
        client = new MongoClient(MONGODB_URI, clientOptions);
        clientPromise = client.connect();
    }
    return clientPromise;
}

// Module-scoped cache for the database object
let cachedDb: Db | null = null;

export class MongoService {
    static async getDb(): Promise<Db> {
        if (cachedDb) {
            return cachedDb;
        }

        const client = await getClientPromise();
        const db = client.db(dbName);

        // Cache the database object
        cachedDb = db;
        return db;
    }
}
