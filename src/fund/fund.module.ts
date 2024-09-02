import { Module } from '@nestjs/common';
import { FundController } from './fund.controller';
import { FundService } from './fund.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Fund, FundSchema } from './fund.schema';

@Module({
  controllers: [FundController],
  imports: [
    MongooseModule.forFeature([{ name: Fund.name, schema: FundSchema }]),
  ],
  providers: [FundService],
  exports: [FundService],
})
export class FundModule {}
