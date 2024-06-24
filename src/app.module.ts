import { Module } from '@nestjs/common';
import { FundModule } from './fund/fund.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeModule } from './income/income.module';

@Module({
  imports: [
    FundModule,
    MongooseModule.forRoot('mongodb://localhost:27017/fundFlow'),
    IncomeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
