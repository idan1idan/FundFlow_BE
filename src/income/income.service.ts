import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeService {
  getIncome(id?: string) {
    return `This action returns all incomes`;
  }
  createIncome() {
    throw new Error('Method not implemented.');
  }
  deleteIncome(id: string) {
    throw new Error('Method not implemented.');
  }
}
