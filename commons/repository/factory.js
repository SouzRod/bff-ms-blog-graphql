import { v4 as uuidv4 } from 'uuid';

export function factory({ db, collectionName }) {
  return {
    async insertOne(data) {
      const collection = await db.getCollection(collectionName);
      await collection.insertOne({ _id: uuidv4(), ...data });
    },
    async findOne(filter) {
      const collection = await db.getCollection(collectionName);
      return collection.findOne(filter);
    },
    async findMany(filter = {}) {
      const collection = await db.getCollection(collectionName);
      return collection.find(filter).toArray();
    },
    async updateOne(filter, data) {
      const collection = await db.getCollection(collectionName);
      await collection.updateOne(filter, { $set: data });
    },
    async deleteOne(filter) {
      const collection = await db.getCollection(collectionName);
      await collection.deleteOne(filter);
    },
  };
}
