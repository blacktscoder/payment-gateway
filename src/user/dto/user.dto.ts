import { IsNotEmpty, IsString, MinLength, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  password: string;

  // Additional Fields...

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsString()
  subscriptionPlan?: string;

  @IsOptional()
  @IsBoolean()
  isSubscribed?: boolean;

  @IsOptional()
  @IsBoolean()
  isIdentityVerified?: boolean;

  @IsOptional()
  @IsBoolean()
  isPaymentInfoVerified?: boolean;

  @IsOptional()
  @IsBoolean()
  hasTwoFactorAuth?: boolean;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  state?: string;

  @IsOptional()
  @IsString()
  postalCode?: string;

  @IsOptional()
  @IsString()
  subscriptionPlan?: string;

  @IsOptional()
  @IsBoolean()
  isSubscribed?: boolean;

  @IsOptional()
  @IsBoolean()
  isIdentityVerified?: boolean;

  @IsOptional()
  @IsBoolean()
  isPaymentInfoVerified?: boolean;

  @IsOptional()
  @IsBoolean()
  hasTwoFactorAuth?: boolean;
}

export class ChangePasswordDto {
  @IsNotEmpty()
  @IsString()
  oldPassword: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(6)
  newPassword: string;
}

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

export class UserSearchDto {
  @IsNotEmpty()
  @IsString()
  searchTerm: string;
}

export class UserDto {
  id: number;
  username: string;
  role: string;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  subscriptionPlan?: string;
  isSubscribed?: boolean;
  isIdentityVerified?: boolean;
  isPaymentInfoVerified?: boolean;
  hasTwoFactorAuth?: boolean;
}
