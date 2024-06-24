import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FundDocument = HydratedDocument<Fund>;

export enum TRANSACTION_TYPE {
  BANK_TRANSACTION = 1,
  CREDIT_CARD = 2,
  CASH = 3,
  BIT = 4,
  PAYPAL = 5,
  NEDARIM_PLUS = 6,
  OTHER = 7,
  CHECK = 8,
}

@Schema()
export class Fund {
  @Prop({ required: true })
  beneficiary: string;
  @Prop({ default: () => new Date().toISOString() })
  createAt: Date;
  @Prop({ required: true })
  amount: string;
  @Prop()
  description: string;
  @Prop({ required: true })
  transactionType: TRANSACTION_TYPE;
}

export const FundSchema = SchemaFactory.createForClass(Fund);
