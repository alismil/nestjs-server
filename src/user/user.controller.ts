import { Controller, Get, Post, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(): string {
    return this.userService.create();
  }

  @Get('/:id')
  getUser(@Param('id') id: string): string {
    return `${this.userService.get()}${id}`;
  }

  @Delete('/:id')
  deleteUser(@Param('id') id: string): string {
    return `${this.userService.delete()} ${id}`;
  }
}
