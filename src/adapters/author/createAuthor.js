import { RESPONSE_MESSAGE } from '#enum';
import { Conflict } from '#errors';
import { authorsRepository } from '#repository';

export async function createAuthor({ name, email, bio }) {
  const hasAuthor = await authorsRepository.findOne({ email });
  if (hasAuthor) throw new Conflict(RESPONSE_MESSAGE.ERROR.AUTHOR_ALREADY_EXISTS);

  const newAuthor = {
    name,
    email,
    bio,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  await authorsRepository.insertOne(newAuthor);
  return RESPONSE_MESSAGE.SUCCESS.CREATE_ARTICLE;
}
