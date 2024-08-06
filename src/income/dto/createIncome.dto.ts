import { ApiProperty } from '@nestjs/swagger';
import { INCOME_TYPE } from '../income.schema';
import { IsDate, IsEnum, IsNumberString, IsString } from 'class-validator';

export class CreateIncomeDto {
  @IsNumberString()
  @ApiProperty({ required: true })
  amount: string;
  @IsNumberString()
  @ApiProperty()
  fundAmount: string;
  @ApiProperty()
  @IsString()
  description: string;
  @ApiProperty({ required: true })
  @IsEnum(INCOME_TYPE)
  incomeType: INCOME_TYPE;
  @ApiProperty({ required: true })
  @IsString()
  source: string;
  @ApiProperty({ required: true })
  @IsDate()
  transactionDate: Date;
}
