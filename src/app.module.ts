import { Module } from '@nestjs/common';
import { FundModule } from './fund/fund.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeModule } from './income/income.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    FundModule,
    MongooseModule.forRoot('mongodb://localhost:27017/fundFlow'),
    IncomeModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
