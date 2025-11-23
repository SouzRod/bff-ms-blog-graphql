import { RESPONSE_MESSAGE } from '#enum';
import { NotFound } from '#errors';
import { authorsRepository } from '#repository';

export async function getAuthorById(id) {
  const author = await authorsRepository.findOne({ _id: id });
  if (!author) throw new NotFound(RESPONSE_MESSAGE.ERROR.AUTHOR_NOT_FOUND);

  return {
    id: author._id,
    name: author.name,
    email: author.email,
    bio: author.bio,
    createdAt: author.createdAt,
    updatedAt: author.updatedAt,
  };
}
