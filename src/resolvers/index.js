import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from '#adapters';

export const resolvers = {
  Query: {
    getArticleById: async (_, { id }) => getArticleById(id),
    getArticles: async () => getArticles(),

    getAuthorById: async (_, { id }) => getAuthorById(id),
    getAuthors: async () => getAuthors(),
  },
  Mutation: {
    createArticle: async (_, article) => createArticle(article),
    updateArticle: async (_, { id, title, body }) => updateArticle({ id, title, body }),
    deleteArticle: async (_, { id }) => deleteArticle(id),

    createAuthor: async (_, author) => createAuthor(author),
    updateAuthor: async (_, { id, name, email, bio }) => updateAuthor({ id, name, email, bio }),
    deleteAuthor: async (_, { id }) => deleteAuthor(id),
  },
};
