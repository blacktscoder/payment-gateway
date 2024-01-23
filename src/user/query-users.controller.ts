import { Controller, Get, Query } from '@nestjs/common';
import { QueryUsersService } from './query-users.service';
import { UserQueryDto, UserDto } from './dto/user.dto';

@Controller('user')
export class QueryUsersController {
  constructor(private readonly queryUsersService: QueryUsersService) {}

  @Get()
  async queryUsers(@Query() userQueryDto: UserQueryDto): Promise<UserDto[]> {
    return this.queryUsersService.queryUsers(userQueryDto);
  }
}
