import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { UserQueryDto, UserDto } from './dto/user.dto';

@Injectable()
export class QueryUsersService {
  constructor(private readonly userService: UserService) {}

  async queryUsers(userQueryDto: UserQueryDto): Promise<UserDto[]> {
    return this.userService.queryUsers(userQueryDto);
  }
}
