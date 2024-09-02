import { Inject, Injectable } from '@nestjs/common';
import { FundService } from 'src/fund/fund.service';
import { IncomeService } from 'src/income/income.service';

@Injectable()
export class TimelineService {
  constructor(
    private readonly incomeService: IncomeService,
    private readonly fundService: FundService,
  ) {}

  async getTimeline() {
    const incomes = await this.incomeService.getIncome();
    const funds = await this.fundService.getFund();
    return { incomes, funds };
  }
}
