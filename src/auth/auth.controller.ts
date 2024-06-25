import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  // https://www.youtube.com/watch?v=OitgkKTxht4
  @Get('google/login')
  googleLogin() {
    return 'google login';
  }
  @Get('google/redirect')
  googleRedirect() {
    return 'google redirect';
  }
}
