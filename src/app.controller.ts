import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { create } from 'domain';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/:user')
  getHello(@Req() request: Request, @Res() response: Response, @Param('user') user: string) {
    console.log(user)

    response.status(201);

    //get data if data request from nnaother data tabase 

    response.send(this.appService.getHello())
    // return this.appService.getHello();
  }

  @Get('/test')
  testRoute(): string {
    return 'This is a new rout';
  }
}
