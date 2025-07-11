import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsuariosModule } from '../usuarios/usuarios.module'; 
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';


@Module({
  imports: [
    UsuariosModule,
    PassportModule,
    JwtModule.register({
      secret: 'NotasAppClave_1234',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],

})
export class AuthModule {}
