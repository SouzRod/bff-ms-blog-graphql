import { authorsRepository } from '#repository';

export async function getAuthors() {
  const authors = await authorsRepository.findMany();
  return authors.map(author => ({
    id: author._id,
    name: author.name,
    email: author.email,
    bio: author.bio,
    createdAt: author.createdAt,
    updatedAt: author.updatedAt,
  }));
}
