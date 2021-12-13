import { Controller, Get, Post, Param, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() body: User) {
    return this.userService.create(body);
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userService.get(id);
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): string {
    return `${this.userService.delete()} ${id}`;
  }
}
