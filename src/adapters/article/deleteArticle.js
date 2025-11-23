import { articlesRepository } from '#repository';
import { NotFound } from '#errors';
import { RESPONSE_MESSAGE } from '#enum';

export async function deleteArticle(id) {
  const article = await articlesRepository.findOne({ _id: id });
  if (!article) throw new NotFound(RESPONSE_MESSAGE.ERROR.ARTICLE_NOT_FOUND);

  await articlesRepository.deleteOne({ _id: id });
  return RESPONSE_MESSAGE.SUCCESS.DELETE_ARTICLE;
}
