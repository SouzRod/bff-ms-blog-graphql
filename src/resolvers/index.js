import { articles } from './article.js';
import { authors } from './author.js';

export const resolvers = {
  Query: {
    ...articles.queries,
    ...authors.queries,
  },
  Mutation: {
    ...articles.mutations,
    ...authors.mutations,
  },
};
