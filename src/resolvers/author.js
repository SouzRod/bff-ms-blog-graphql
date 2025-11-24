import {
  getAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
} from '#adapters';

export const authors = {
  queries: {
    getAuthorById: async (_, { id }) => getAuthorById(id),
    getAuthors: async () => getAuthors(),
  },
  mutations: {
    createAuthor: async (_, author) => createAuthor(author),
    updateAuthor: async (_, { id, name, email, bio }) => updateAuthor({ id, name, email, bio }),
    deleteAuthor: async (_, { id }) => deleteAuthor(id),
  },
};
