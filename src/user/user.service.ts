import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Collection } from 'mongodb';
import { MongoClient } from '../mongodb';

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

  async create(): Promise<string> {
    await this.users.insertOne({
      user: 'gkampitakis',
    });

    return 'user created';
  }

  get(): string {
    return 'here is user with id ';
  }

  delete(): string {
    return 'deleted user';
  }
}
