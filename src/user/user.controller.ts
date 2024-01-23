import { Controller, Post, Body, Param, Get, NotFoundException } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly UserService: UserService){}

    @Post('register')
    async register(@Body() CreateUserDto: CreateUserDto): Promise<UserDto>{
        return this.UserService.createUser(CreateUserDto);
    }

    @Get(':id')
    async getUserById(@Param('id') id:string): Promise<UserDto>{
        const userId = parseInt(id, 10);

        if(isNaN(userId)){
            throw new NotFoundException('Invalid user Id');
        }
        return this.UserService.getUserById(userId);
    }
}
