export const typeDefs = `
  type Article {
    id: String!
    title: String!
    body: String!
    authorId: String!
    createdAt: String!
    updatedAt: String!
  }

  type Author {
    id: String!
    name: String!
    email: String!
    bio: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    getArticleById(id: String!): Article!
    getArticles: [Article!]!

    getAuthorById(id: String!): Author!
    getAuthors: [Author!]!
  }

  type Mutation {
    createArticle(title: String!, body: String!, authorId: String!): String!
    updateArticle(id: String!, title: String!, body: String!): String!
    deleteArticle(id: String!): String!

    createAuthor(name: String!, email: String!, bio: String!): String!
    updateAuthor(id: String!, name: String!, email: String!, bio: String!): String!
    deleteAuthor(id: String!): String!
  }
`;
