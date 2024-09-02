import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
} from '@nestjs/common';
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
  readOne(@Query('id') id: string) {
    return this.incomeService.getIncome(id);
  }

  @Post()
  createOne(@Body() createIncomeDto: CreateIncomeDto) {
    return this.incomeService.createIncome(createIncomeDto);
  }

  @Delete(':id')
  delete(@Query('id') id: string) {
    return this.incomeService.deleteIncome(id);
  }
  @Put(':id')
  update(@Body() updateIncomeDto: CreateIncomeDto, @Query('id') id: string) {
    return this.incomeService.updateIncome(id, updateIncomeDto);
  }
}
