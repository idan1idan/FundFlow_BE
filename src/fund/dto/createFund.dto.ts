import { ApiProperty } from '@nestjs/swagger';
import { TRANSACTION_TYPE } from '../fund.schema';
import { IsDate, IsEnum, IsNumberString, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateFundDto {
  @IsString()
  @ApiProperty()
  beneficiary: string;
  @ApiProperty()
  @IsNumberString()
  amount: string;
  @ApiProperty()
  @IsString()
  description: string;
  @ApiProperty({ enum: TRANSACTION_TYPE })
  @IsEnum(TRANSACTION_TYPE)
  transactionType: TRANSACTION_TYPE;
  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  transactionDate: Date;
}
