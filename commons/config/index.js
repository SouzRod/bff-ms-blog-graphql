import { config } from 'dotenv';
config({ quiet: true });

export const configs = Object.freeze({
  app: Object.freeze({
    port: process.env.PORT,
  }),
  mongo: Object.freeze({
    uri: process.env.MONGO_URI,
    db: process.env.MONGO_DB,
    collectionArticles: process.env.MONGO_COLLECTION_ARTICLES,
    collectionAuthors: process.env.MONGO_COLLECTION_AUTHORS,
  }),
});
