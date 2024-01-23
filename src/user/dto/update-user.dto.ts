import { IsOptional, IsString, IsBoolean } from 'class-validator';

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
