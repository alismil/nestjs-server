import { MongoClientOptions } from 'mongodb';

export class MongodbOptions {
  readonly url?: string;

  readonly clientOptions?: MongoClientOptions;
}
