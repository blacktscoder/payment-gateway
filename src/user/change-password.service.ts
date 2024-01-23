import { Injectable } from '@nestjs/common';
import { UserService } from './user.service';
import { ChangePasswordDto } from './dto/user.dto';

@Injectable()
export class ChangePasswordService {
  constructor(private readonly userService: UserService) {}

  async changePassword(id: number, changePasswordDto: ChangePasswordDto): Promise<string> {
    return this.userService.changePassword(id, changePasswordDto);
  }
}
