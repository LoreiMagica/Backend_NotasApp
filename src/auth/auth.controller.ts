//Controlador de las operaciones de login. Controla sus rutas de acceso
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.nombre, dto.contrasena); //Envía el usuario y contraseña introdudos al servicio de login
  }
}
