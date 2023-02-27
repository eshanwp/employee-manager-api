import { ApiProperty } from '@nestjs/swagger';
import { IsArray } from 'class-validator';

export class FilterOptionsDto {
  @ApiProperty({ type: Number })
  offset?: number;

  @ApiProperty({ type: Number })
  limit?: number;

  @ApiProperty({ type: [String] })
  @IsArray()
  selects?: string[];

  @ApiProperty({ type: [String] })
  equals?: string[];

  @ApiProperty({ type: [String] })
  sort?: string[];
}
