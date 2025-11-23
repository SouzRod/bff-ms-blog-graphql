import { articleRepository } from '#repository';

export async function getArticles() {
  const articles = await articleRepository.findMany();
  return articles.map(article => ({
    id: article._id,
    title: article.title,
    body: article.body,
    authorId: article.authorId,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
  }));
}
