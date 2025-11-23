import { articleRepository } from '#repository';
import { NotFound } from '#errors';

export async function getArticleById(id) {
  const article = await articleRepository.findOne({ _id: id });
  if (!article) throw new NotFound(RESPONSE_MESSAGE.ERROR.ARTICLE_NOT_FOUND);

  return {
    id: article._id,
    title: article.title,
    body: article.body,
    authorId: article.authorId,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
  };
}
