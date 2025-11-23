import { RESPONSE_MESSAGE } from '#enum';
import { NotFound } from '#errors';
import { authorsRepository } from '#repository';

export async function updateAuthor({ id, name, email, bio }) {
  const hasAuthor = await authorsRepository.findOne({ _id: id });
  if (!hasAuthor) throw new NotFound(RESPONSE_MESSAGE.ERROR.AUTHOR_NOT_FOUND);

  const articleToUpdate = {
    _id: id,
    name,
    email,
    bio,
    createdAt: hasAuthor.createdAt,
    updatedAt: new Date(),
  };
  await authorsRepository.updateOne({ _id: id }, articleToUpdate);
  return RESPONSE_MESSAGE.SUCCESS.UPDATE_AUTHOR;
}
