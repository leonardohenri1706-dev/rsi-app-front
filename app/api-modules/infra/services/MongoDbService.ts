import type { Db } from "mongodb";
import { MongoClient, ServerApiVersion } from "mongodb";

// --- Configuration ---
const MONGODB_URI = process.env.MONGODB_URI;
// Using process.env.MONGODB_DB_NAME is good practice, falling back to "Cluster0" as it was previously hardcoded.
const dbName = process.env.MONGODB_DB_NAME || "Cluster0";

if (!MONGODB_URI) {
  // This check is critical for early failure if configuration is missing
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

const clientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

// --- Connection Caching Logic for Next.js/Vercel ---

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve the client across HMR reloads.
  const globalAny = global as any;
  if (!globalAny._mongoClientPromise) {
    const client = new MongoClient(MONGODB_URI, clientOptions);
    globalAny._mongoClientPromise = client.connect();
  }
  clientPromise = globalAny._mongoClientPromise;
} else {
  // In production mode, simply create the promise.
  const client = new MongoClient(MONGODB_URI, clientOptions);
  clientPromise = client.connect();
}

// Module-scoped cache for the database object
let cachedDb: Db | null = null;

export class MongoDbService {
  static async getDb(): Promise<Db> {
    if (cachedDb) {
      return cachedDb;
    }

    const client = await clientPromise;
    const db = client.db(dbName);

    // Cache the database object
    cachedDb = db;
    return db;
  }
}
