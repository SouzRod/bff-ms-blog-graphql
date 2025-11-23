import { MongoClient } from 'mongodb';
import { configs } from '#config';

const state = {
  client: null,
  db: null,
};

const isConnected = () => state.db && state.client?.topology?.isConnected();

async function connectToDatabase() {
  state.client = new MongoClient(configs.mongo.uri);
  await state.client.connect();
  state.db = state.client.db(configs.mongo.db);
}

async function getCollection(name) {
  if (!isConnected()) await connectToDatabase();
  return state.db.collection(name);
}

export default {
  getCollection,
};
