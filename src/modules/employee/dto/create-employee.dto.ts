import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import { GenderEnum } from '../../../base/enums/gender.enum';

export class CreateEmployeeDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(6)
  firstName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MaxLength(10)
  @MinLength(6)
  lastName: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @Matches('^(?:0|94|\\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\\d)\\d{6}$', undefined, {
    message: "Invalid phone number"
  })
  phoneNumber: string;

  @ApiProperty()
  @IsEnum(GenderEnum)
  gender: GenderEnum;
}
