import { ApiProperty } from '@nestjs/swagger';
import { INCOME_TYPE } from '../income.schema';

export class CreateIncomeDto {
  @ApiProperty({ required: true })
  amount: string;
  @ApiProperty()
  fundAmount: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ required: true })
  incomeType: INCOME_TYPE;
  @ApiProperty({ required: true })
  source: string;
  @ApiProperty({ required: true })
  transactionDate: Date;
}
