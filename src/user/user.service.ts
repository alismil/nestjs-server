import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  create(): string {
    return 'user created';
  }

  get(): string {
    return 'here is user with id ';
  }

  delete(): string {
    return 'deleted user';
  }
}
