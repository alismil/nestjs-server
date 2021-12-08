import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let userController: UserController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    userController = app.get<UserController>(UserController);
  });

  describe('post', () => {
    it('should return "user created"', () => {
      expect(userController.createUser()).toBe('user created');
    });
  });

  describe('get user with id 1', () => {
    it('should return "here is user with id 1"', () => {
      expect(userController.getUser('1')).toBe('here is user with id 1');
    });
  });

  describe('delete user with id 1', () => {
    it('should return "deleted user 1"', () => {
      expect(userController.deleteUser('1')).toBe('deleted user 1');
    });
  });
});
