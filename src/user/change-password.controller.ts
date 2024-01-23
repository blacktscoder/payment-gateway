import { Controller, Param, Body, Put } from '@nestjs/common';
import { ChangePasswordService } from './change-password.service';
import { ChangePasswordDto } from './dto/user.dto';

@Controller('user')
export class ChangePasswordController {
  constructor(private readonly changePasswordService: ChangePasswordService) {}

  @Put(':id/change-password')
  async changePassword(@Param('id') id: string, @Body() changePasswordDto: ChangePasswordDto): Promise<string> {
    const userId = parseInt(id, 10);
    return this.changePasswordService.changePassword(userId, changePasswordDto);
  }
}
