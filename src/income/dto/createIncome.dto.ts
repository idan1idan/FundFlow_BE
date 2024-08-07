import { ApiProperty } from '@nestjs/swagger';
import { INCOME_TYPE } from '../income.schema';
import {
  IsDate,
  IsEnum,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateIncomeDto {
  @IsNumberString()
  @ApiProperty({ required: true })
  amount: string;
  @IsNumberString()
  @ApiProperty()
  fundAmount: string;
  @ApiProperty({
    required: false,
    description: 'Description of the income',
  })
  @IsString()
  @IsOptional()
  description: string;
  @ApiProperty({ required: true })
  @IsEnum(INCOME_TYPE)
  incomeType: INCOME_TYPE;
  @ApiProperty({ required: true })
  @IsString()
  source: string;
  @ApiProperty({ required: true })
  @Type(() => Date)
  @IsDate()
  transactionDate: Date;
}
