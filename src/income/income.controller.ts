import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IncomeService } from './income.service';
import { CreateIncomeDto } from './dto/createIncome.dto';
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
  createOne(@Body() createIncomeDto: CreateIncomeDto) {
    return this.incomeService.createIncome(createIncomeDto);
  }

  @Delete(':id')
  delete(id: string) {
    return this.incomeService.deleteIncome(id);
  }
  @Put(':id')
  update(@Body() updateIncomeDto: CreateIncomeDto, id: string) {
    return this.incomeService.updateIncome(id, updateIncomeDto);
  }
}
