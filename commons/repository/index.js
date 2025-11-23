import { factory } from './factory.js';
import { configs } from '#config';
import db from '#database';

export const articleRepository = factory({ db, collectionName: configs.mongo.collectionArticles });
export const authorsRepository = factory({ db, collectionName: configs.mongo.collectionAuthors });
