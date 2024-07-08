import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  googleId: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  givenName: string;
  @Prop({ required: true })
  familyName: string;
  @Prop({ required: true })
  picture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
