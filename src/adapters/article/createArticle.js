import { RESPONSE_MESSAGE } from '#enum';
import { Conflict } from '#errors';
import { articlesRepository } from '#repository';

export async function createArticle({ title, body, authorId }) {
  const hasArticle = await articlesRepository.findOne({ title, authorId });
  if (hasArticle) throw new Conflict(RESPONSE_MESSAGE.ERROR.ARTICLE_ALREADY_EXISTS);

  const newArticle = {
    title,
    body,
    authorId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await articlesRepository.insertOne(newArticle);
  return RESPONSE_MESSAGE.SUCCESS.CREATE_ARTICLE;
}
