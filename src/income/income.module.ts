import { Module } from '@nestjs/common';
import { IncomeController } from './income.controller';
import { IncomeService } from './income.service';
import { Income, IncomeSchema } from './income.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [IncomeController],
  imports: [
    MongooseModule.forFeature([{ name: Income.name, schema: IncomeSchema }]),
  ],
  providers: [IncomeService],
  exports: [IncomeService],
})
export class IncomeModule {}
