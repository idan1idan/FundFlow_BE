import { Module } from '@nestjs/common';
import { FundModule } from './fund/fund.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeModule } from './income/income.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
// 'mongodb://localhost:27017/fundFlow'
@Module({
  imports: [
    FundModule,
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
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
