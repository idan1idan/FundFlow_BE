import { Module } from '@nestjs/common';
import { TimelineController } from './timeline.controller';
import { TimelineService } from './timeline.service';
import { IncomeModule } from 'src/income/income.module';
import { FundModule } from 'src/fund/fund.module';

@Module({
  controllers: [TimelineController],
  providers: [TimelineService],
  imports: [IncomeModule, FundModule],
})
export class TimelineModule {}
