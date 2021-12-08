import { Controller, Get } from '@nestjs/common';
import { create } from 'domain';
import { AppService } from './app.service';

@Controller('/user')
export class UserController {
  constructor(private readonly appService: AppService) {


  }

  @Get('/user')
  getUser(): string {
    this.app
    return this.appService.getHello() + ' user';
  }

  @Get('/test')
  testRoute(): string {
    return 'This is a new user route ';
  }
}
