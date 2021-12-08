import { Global, Module } from '@nestjs/common';
import { MongodbOptions } from './mongodb.module.options';
import { MongodbFactory } from './mongodb.service';

@Global()
@Module({})
export class MongodbModule {
  private static getProviders(options: MongodbOptions) {
    return [{ provide: MongodbOptions, useValue: options }, MongodbFactory];
  }

  static forRoot(options: MongodbOptions) {
    const providers = MongodbModule.getProviders(options);

    return {
      module: MongodbModule,
      providers,
      exports: [MongodbFactory.provide],
    };
  }
}

// https://docs.nestjs.com/fundamentals/custom-providers#factory-providers-usefactory
// Explanation
