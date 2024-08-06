import { Injectable } from '@nestjs/common';
import { User, UserDocument } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private fundModel: Model<User>) {}
  async findByEmail(email: string): Promise<UserDocument> {
    return this.fundModel.findOne({ email }).exec();
  }
  async findByGoogleId(googleId: string): Promise<UserDocument> {
    return this.fundModel.findOne({ googleId }).exec();
  }
  async findById(id: string): Promise<UserDocument> {
    return this.fundModel.findById(id).exec();
  }
  async delUser(id: string): Promise<UserDocument> {
    return this.fundModel.findByIdAndDelete(id).exec();
  }
  async createUser(user: User): Promise<UserDocument> {
    const createdUser = await this.fundModel.create(user);
    createdUser.save();
    return createdUser;
  }
}
