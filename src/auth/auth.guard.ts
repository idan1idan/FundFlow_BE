import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    // Extract the token from the cookie
    const token = this.extractTokenFromCookie(request);

    if (!token) {
      return false;
    }

    // Validate the user based on the token
    const user = await this.authService.validateUser(token);

    if (!user) {
      return false;
    }

    // Attach the user to the request object
    (request as any).user = user;

    return true;
  }

  private extractTokenFromCookie(request: Request): string | null {
    const cookieHeader = request.headers['cookie'];
    if (!cookieHeader) {
      return null;
    }

    const cookies = cookieHeader.split(';');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=').map((c) => c.trim());
      if (name === 'token') {
        return value;
      }
    }
    return null;
  }
}
