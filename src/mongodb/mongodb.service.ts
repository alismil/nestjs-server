import { MongoClient } from 'mongodb';
import { MongodbOptions } from './mongodb.module.options';
import { ConfigService } from '@nestjs/config';

const useFactory = (
  { clientOptions, url }: MongodbOptions,
  config: ConfigService,
) => {
  const urlFromEnv = config.get<string>('mongodb.url');

  const mongodb = new MongoClient(urlFromEnv ?? url, clientOptions);
  return mongodb.connect();
};

export const MongodbFactory = {
  inject: [MongodbOptions, ConfigService],
  useFactory,
  provide: MongoClient,
};
