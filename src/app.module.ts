import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongodbModule } from './mongodb';
import { UserModule } from './user/user.module';
import config from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [config],
    }),
    MongodbModule.forRoot({}),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
