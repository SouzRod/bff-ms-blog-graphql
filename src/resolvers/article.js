import {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from '#adapters';

export const articles = {
  queries: {
    getArticleById: async (_, { id }) => getArticleById(id),
    getArticles: async () => getArticles(),
  },
  mutations: {
    createArticle: async (_, article) => createArticle(article),
    updateArticle: async (_, { id, title, body }) => updateArticle({ id, title, body }),
    deleteArticle: async (_, { id }) => deleteArticle(id),
  },
};
