import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from 'src/user/user.schema';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(UserService) private userService: UserService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(email: string): Promise<UserDocument | null> {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      return null;
    }
    return user;
  }
  generateToken(user: {
    email: string;
    givenName: string;
    familyName: string;
  }): string {
    const payload = {
      email: user.email,
      givenName: user.givenName,
      familyName: user.familyName,
    };
    return this.jwtService.sign(payload);
  }
  validateToken(token: string): boolean {
    try {
      this.jwtService.verify(token);
    } catch (err) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
