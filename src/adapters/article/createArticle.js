import { RESPONSE_MESSAGE } from '#enum';
import { Conflict } from '#errors';
import { articleRepository } from '#repository';

export async function createArticle({ title, body, authorId }) {
  const hasArticle = await articleRepository.findOne({ title, authorId });
  if (hasArticle) throw new Conflict(RESPONSE_MESSAGE.ERROR.ARTICLE_ALREADY_EXISTS);

  const newArticle = {
    title,
    body,
    authorId,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await articleRepository.insertOne(newArticle);
  return RESPONSE_MESSAGE.SUCCESS.CREATE_ARTICLE;
}
