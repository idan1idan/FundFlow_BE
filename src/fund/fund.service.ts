import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Fund } from './fund.schema';
import { Model } from 'mongoose';
import { CreateFundDto } from './dto/createFund.dto';

@Injectable()
export class FundService {
  deleteFund(id: string) {
    return this.fundModel.findByIdAndDelete(id).exec();
  }
  constructor(@InjectModel(Fund.name) private fundModel: Model<Fund>) {}
  async getFund(id?: string, query?: Record<keyof Fund, string>) {
    if (id) {
      return this.fundModel.findById(id).exec();
    }
    return this.fundModel
      .find({
        ...query,
      })
      .exec();
  }
  async createFund(createFundDto: CreateFundDto) {
    const createdFund = await this.fundModel.create(createFundDto);
    createdFund.save();
    return createdFund;
  }
  async updateFund(id: string, updateFundDto: CreateFundDto) {
    return this.fundModel.findByIdAndUpdate(id, updateFundDto).exec();
  }
}
