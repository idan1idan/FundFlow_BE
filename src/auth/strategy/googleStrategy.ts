import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';
import { UserService } from 'src/user/user.service';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    @Inject(UserService) private readonly userService: UserService,
    @Inject(ConfigService) private readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_CLIENT_SECRET'),
      callbackURL: 'http://localhost:3000/api/auth/google/redirect',
      passReqToCallback: true,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    req: Request,
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: VerifyCallback,
  ) {
    const user = await this.authService.validateUser(profile.emails[0].value);
    if (!user) {
      const user = await this.userService.createUser({
        email: profile.emails[0].value,
        googleId: profile.id,
        givenName: profile.name.givenName,
        familyName: profile.name.familyName,
        picture: profile.photos[0].value,
      });

      return done(null, user);
    }
    return done(null, user);
  }
}
