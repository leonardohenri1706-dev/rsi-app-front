import type { Collection, Db } from "mongodb";

import type { User } from "../../domain/entities/User";

export class UserRepository {
  private collection: Collection<User>;

  constructor(db: Db) {
    this.collection = db.collection<User>("users");
  }

  public async findByEmail(email: string) {
    return this.collection.findOne({ email });
  }

  public async create(input: Partial<User>) {
    return this.collection.insertOne(input as User);
  }
}
