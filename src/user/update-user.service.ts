import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UpdateUserDto, UserDto } from './dto/user.dto';

@Injectable()
export class UpdateUserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    this.userRepository.merge(user, updateUserDto);

    const updatedUser = await this.userRepository.save(user);

    return this.mapToDto(updatedUser);
  }

  private mapToDto(user: UserEntity): UserDto {
    const {
      id,
      username,
      role,
      address,
      city,
      state,
      postalCode,
      subscriptionPlan,
      isSubscribed,
      isIdentityVerified,
      isPaymentInfoVerified,
      hasTwoFactorAuth,
    } = user;
    return {
        id,
        username,
        role,
        address,
        city,
        state,
        postalCode,
        subscriptionPlan,
        isSubscribed,
        isIdentityVerified,
        isPaymentInfoVerified,
        hasTwoFactorAuth,
      }
    }
}
