import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class UserQueryDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsBoolean()
  isSubscribed?: boolean;

}
