import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Body,
  HttpCode,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';

export interface User {
  name: string;
  surname: string;
}
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

  @Put('/:id')
  updateUser(@Param('id') id: string, @Body() body: Partial<User>) {
    return this.userService.update(id, body);
  }

  @Delete('/:id')
  @HttpCode(204)
  async deleteUser(@Param('id') id: string) {
    await this.userService.delete(id);

    return;
  }
}
