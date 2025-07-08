import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'NotasAppClave_1234',
    });
  }

  async validate(payload: any) {
    // Este objeto estará disponible como req.user
    return { id: payload.sub, nombre: payload.nombre };
  }
}
