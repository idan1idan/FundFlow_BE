import { Module } from '@nestjs/common';
import { FundModule } from './fund/fund.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncomeModule } from './income/income.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    FundModule,
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        console.log(configService.get<string>('MONGO_URI'));
        return {
          uri: configService.get<string>('MONGO_URI'),
        };
      },
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
