import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IncomeDocument = HydratedDocument<Income>;

export enum INCOME_TYPE {
  BANK_TRANSACTION = 1,
  SALARY = 2,
  CASH = 3,
  BIT = 4,
  PAYPAL = 5,
  OTHER = 7,
  CHECK = 8,
}

@Schema()
export class Income {
  @Prop({ required: true })
  amount: string;
  @Prop()
  fundAmount: string;
  @Prop({ default: () => new Date().toISOString() })
  createAt: Date;
  @Prop()
  description: string;
  @Prop({ required: true })
  incomeType: INCOME_TYPE;
  @Prop({ required: true })
  source: string;
}

export const IncomeSchema = SchemaFactory.createForClass(Income);
