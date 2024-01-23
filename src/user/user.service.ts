import { UserQueryDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/user.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { ChangePasswordDto} from './dto/user.dto';
import { UserDto } from './dto/user.dto';
import { CreateUserDto } from './dto/user.dto';
import { UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor (
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    async findByUsername (username: string): Promise<UserEntity | undefined>{
        return this.userRepository.findOne({where: {username}});
    }

    async createUser(CreateUserDto:  CreateUserDto): Promise<UserDto>{
        const {username, password, ...additionalFields} = CreateUserDto;
        const user = this.userRepository.create ({username, password, ...additionalFields})
        const newUser = await this.userRepository.save(user);

        return this.mapToDto(newUser);
    }

    async getUserById(id: number): Promise<UserDto> {
        const user = await this.userRepository.findOne({ where: { id } });
    
        if (!user) {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
    
        return this.mapToDto(user);
      }
      async changePassword(id: number, changePasswordDto: ChangePasswordDto): Promise<string> {
        const user = await this.userRepository.findOne({ where: { id } });;
    
        if (!user) {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
    
        const { oldPassword, newPassword } = changePasswordDto;
    
        // Validate old password
        if (oldPassword !== user.password) {
          throw new UnauthorizedException('Old password is incorrect');
        }
    
        // Update password
        user.password = newPassword;
        await this.userRepository.save(user);
    
        return 'Password changed successfully';
      }
    
      async queryUsers(userQueryDto: UserQueryDto): Promise<UserDto[]> {
        const users = await this.userRepository.find({ where: userQueryDto });
        return users.map(user => this.mapToDto(user));
      }
      async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<UserDto> {
        const user = await this.userRepository.findOne(id as any);
    
        if (!user) {
          throw new NotFoundException(`User with ID ${id} not found`);
        }
    
        Object.assign(user, updateUserDto);
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
          };

}
}
