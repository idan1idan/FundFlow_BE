import { Controller, Delete, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IncomeService } from './income.service';
@ApiTags('Income')
@Controller('income')
export class IncomeController {
  constructor(private readonly incomeService: IncomeService) {}

  @Get()
  readAll() {
    return this.incomeService.getIncome();
  }

  @Get(':id')
  readOne(id: string) {
    return this.incomeService.getIncome(id);
  }

  @Post()
  createOne() {
    return this.incomeService.createIncome();
  }

  @Delete(':id')
  delete(id: string) {
    return this.incomeService.deleteIncome(id);
  }
}
