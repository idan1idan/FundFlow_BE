import { Module } from '@nestjs/common';
import { FundModule } from './fund/fund.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeModule } from './income/income.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FundModule,
    MongooseModule.forRoot('mongodb://localhost:27017/fundFlow'),
    IncomeModule,
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
