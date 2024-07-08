import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { AuthService } from './auth.service';
import { UserDocument } from 'src/user/user.schema';
import { ConfigService } from '@nestjs/config';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Get('google/login')
  @UseGuards(AuthGuard('google'))
  googleLogin() {
    return 'google login';
  }
  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  googleRedirect(@Res() res: Response, @Req() req: Request) {
    const user = req['user'] as UserDocument;
    const token = this.authService.generateToken({
      email: user.email,
      givenName: user.givenName,
      familyName: user.familyName,
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: this.configService.get('COOKIE_MAX_AGE'),
    });
    res.redirect('http://localhost:3000/api');
  }
}
