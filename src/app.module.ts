import { Module } from '@nestjs/common';
import { MongodbModule } from './mongodb';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MongodbModule.forRoot({
      url: 'mongodb://localhost:27017',
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
