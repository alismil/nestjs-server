import { Controller, Get, Param, Req, Res } from '@nestjs/common';
import { create } from 'domain';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
