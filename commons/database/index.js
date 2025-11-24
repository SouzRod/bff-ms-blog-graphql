import { MongoClient } from 'mongodb';
import { configs } from '#config';
import { InternalServerError } from '#errors';

const state = {
  client: null,
  db: null,
};

const isConnected = () => state.db && state.client?.topology?.isConnected();

async function connectToDatabase() {
  try {
    state.client = await MongoClient.connect(configs.mongo.uri);
    state.db = state.client.db(configs.mongo.db);
  } catch (error) {
    console.error('Failed on connectToDatabase method:', error);
    throw new InternalServerError(error.message);
  }
}

async function getCollection(name) {
  if (!isConnected()) await connectToDatabase();
  return state.db.collection(name);
}

export default {
  getCollection,
};
