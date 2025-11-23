import { articles } from './article';
import { authors } from './author';

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
