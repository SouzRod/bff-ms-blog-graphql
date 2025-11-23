import { RESPONSE_MESSAGE } from '#enum';
import { NotFound } from '#errors';
import { articlesRepository } from '#repository';

export async function updateArticle({ id, title, body }) {
  const hasArticle = await articlesRepository.findOne({ _id: id });
  if (!hasArticle) throw new NotFound(RESPONSE_MESSAGE.ERROR.ARTICLE_NOT_FOUND);

  const articleToUpdate = {
    _id: id,
    title,
    body,
    authorId: hasArticle.authorId,
    createdAt: hasArticle.createdAt,
    updatedAt: new Date(),
  };
  await articlesRepository.updateOne({ _id: id }, articleToUpdate);
  return RESPONSE_MESSAGE.SUCCESS.UPDATE_ARTICLE;
}
