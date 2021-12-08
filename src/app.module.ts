import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], // new AppService() 
})
export class AppModule { }

// create user  this.userService.create() => 'user created'
// get user 
// delete user 

// 