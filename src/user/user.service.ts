import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Collection } from 'mongodb';
import { MongoClient } from '../mongodb';
import { User } from './user.controller';
import { v4 } from 'uuid';

@Injectable()
export class UserService {
  private users: Collection;
  constructor(
    private readonly client: MongoClient,
    private readonly config: ConfigService,
  ) {
    const database = this.config.get<string>('database');
    const collection = this.config.get<string>('usersCollection');

    this.users = this.client.db(database).collection(collection);
  }

  async create(user: User) {
    const userDTO = {
      ...user,
      id: v4(),
    };
    await this.users.insertOne(userDTO);

    return userDTO;
  }

  async get(userID: string) {
    return this.users.findOne({ id: userID });
  }

  delete(userID: string) {
    return this.users.deleteOne({ id: userID });
  }

  async update(userID: string, payload: Partial<User>) {
    const document = await this.users.findOneAndUpdate(
      {
        id: userID,
      },
      {
        $set: payload,
      },
      {
        upsert: false,
        returnDocument: 'after',
      },
    );

    return document.value;
  }
}
