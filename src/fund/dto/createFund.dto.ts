import { ApiProperty } from '@nestjs/swagger';
import { TRANSACTION_TYPE } from '../fund.schema';

export class CreateFundDto {
  @ApiProperty()
  beneficiary: string;
  @ApiProperty()
  amount: string;
  @ApiProperty()
  description: string;
  @ApiProperty({ enum: TRANSACTION_TYPE })
  transactionType: TRANSACTION_TYPE;
  @ApiProperty()
  transactionDate: Date;
}
