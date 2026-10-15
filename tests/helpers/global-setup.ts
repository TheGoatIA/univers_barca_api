import { MongoClient } from 'mongodb';

/**
 * Les tests d'intégration exigent une instance MongoDB (service `mongo` en CI,
 * `docker compose up mongodb` en local). On échoue tôt avec un message clair.
 */
export default async function globalSetup() {
  const uri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/univers_barca_test';
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 5000 });
  try {
    await client.connect();
  } catch (e) {
    throw new Error(
      `MongoDB injoignable (${uri}) : lancez "docker compose -f docker/docker-compose.dev.yml up -d mongodb" — ${(e as Error).message}`,
      { cause: e },
    );
  } finally {
    await client.close().catch(() => undefined);
  }
}
