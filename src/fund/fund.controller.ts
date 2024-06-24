import { Body, Controller, Delete, Get, Post } from '@nestjs/common';
import { FundService } from './fund.service';
import { CreateFundDto } from './dto/createFund.dto';

@Controller('fund')
export class FundController {
  constructor(private readonly fundService: FundService) {}

  @Get()
  readAll() {
    return this.fundService.getFund();
  }

  @Get(':id')
  readOne(id: string) {
    return this.fundService.getFund(id);
  }

  @Post()
  createOne(@Body() createFundDto: CreateFundDto) {
    return this.fundService.createFund(createFundDto);
  }

  @Delete(':id')
  delete(id: string) {
    return this.fundService.deleteFund(id);
  }
}
