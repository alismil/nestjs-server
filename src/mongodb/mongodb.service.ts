import { MongoClient } from 'mongodb';
import { MongodbOptions } from './mongodb.module.options';

const useFactory = ({ clientOptions, url }: MongodbOptions) => {
  const mongodb = new MongoClient(url, clientOptions);
  return mongodb.connect();
};

export const MongodbFactory = {
  inject: [MongodbOptions],
  useFactory,
  provide: MongoClient,
};
