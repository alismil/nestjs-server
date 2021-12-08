import { Injectable } from '@nestjs/common';
import { Collection } from 'mongodb';
import { MongoClient } from '../mongodb';
@Injectable()
export class UserService {
  private users: Collection;
  constructor(private readonly client: MongoClient) {
    this.users = this.client.db('nestjs-server').collection('users');
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
