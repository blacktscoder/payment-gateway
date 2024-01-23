import { IsNotEmpty, IsString } from 'class-validator';

export class UserSearchDto {
  @IsNotEmpty()
  @IsString()
  searchTerm: string;
}
