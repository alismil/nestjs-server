import { Injectable, OnModuleInit } from '@nestjs/common';
import { Collection, MongoClient } from 'mongodb';
import { v4 } from 'uuid';

export interface User {
  email: string;
  username: string;
  id?: string;
}

@Injectable()
export class UserService implements OnModuleInit {
  private users: Collection;

  async onModuleInit() {
    const mongodb = new MongoClient('mongodb://localhost:27017');

    const client = await mongodb.connect();

    this.users = client.db('nestjs-server').collection('users');
  }

  async create(user: User): Promise<User> {
    const newUser = {
      ...user,
      id: v4(),
    };

    await this.users.insertOne(newUser);

    return newUser;
  }

  get(userID: string): unknown {
    return this.users.findOne({
      id: userID,
    });
  }

  delete(): string {
    return 'deleted user';
  }
}

/***
 * Next steps
 *  // Unknown, we need to define a schema, or how our user is going to be saved
    // Validation and make sure that the body is a user or the data you need
    // https://docs.nestjs.com/techniques/validation
    // Create mongodb module
    // https://docs.nestjs.com/fundamentals/custom-providers#factory-providers-usefactory
    // Finish crud , create , retrieve, update and delete


    https://robomongo.org/ Robot3t
    https://docs.docker.com/desktop/mac/install/ install docker
 */
