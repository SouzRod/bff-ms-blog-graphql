import { authorsRepository } from '#repository';
import { NotFound } from '#errors';
import { RESPONSE_MESSAGE } from '#enum';

export async function deleteAuthor(id) {
  const author = await authorsRepository.findOne({ _id: id });
  if (!author) throw new NotFound(RESPONSE_MESSAGE.ERROR.AUTHOR_NOT_FOUND);

  await authorsRepository.deleteOne({ _id: id });
  return RESPONSE_MESSAGE.SUCCESS.DELETE_AUTHOR;
}
