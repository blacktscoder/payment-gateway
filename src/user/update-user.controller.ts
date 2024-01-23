import { Controller, Param, Body, Put } from '@nestjs/common';
import { UpdateUserService } from './update-user.service';
import { UpdateUserDto, UserDto } from './dto/user.dto';

@Controller('user')
export class UpdateUserController {
  constructor(private readonly updateUserService: UpdateUserService) {}

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
    const userId = parseInt(id, 10);
    return this.updateUserService.updateUser(userId, updateUserDto);
  }
}
