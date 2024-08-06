import { Injectable } from '@nestjs/common';
import { CreateIncomeDto } from './dto/createIncome.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Income } from './income.schema';
import { Model } from 'mongoose';

@Injectable()
export class IncomeService {
  constructor(@InjectModel(Income.name) private incomeModel: Model<Income>) {}
  getIncome(id?: string, query?: Record<keyof Income, string>) {
    if (id) {
      return this.incomeModel.findById(id).exec();
    }
    return this.incomeModel
      .find({
        ...query,
      })
      .exec();
  }
  async createIncome(createIncomeDto: CreateIncomeDto) {
    const createdIncome = await this.incomeModel.create(createIncomeDto);
    createdIncome.save();
    return createdIncome;
  }
  deleteIncome(id: string) {
    return this.incomeModel.findByIdAndDelete(id).exec();
  }
  updateIncome(id: string, updateIncomeDto: CreateIncomeDto) {
    return this.incomeModel.findByIdAndUpdate(id, updateIncomeDto).exec();
  }
}
