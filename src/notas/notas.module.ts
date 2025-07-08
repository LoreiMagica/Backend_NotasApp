import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Nota } from './nota.entity';
import { NotasService } from './notas.service';
import { NotasController } from './notas.controller';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { Usuario } from '../usuarios/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Nota, Usuario]), UsuariosModule],
  controllers: [NotasController],
  providers: [NotasService],
})
export class NotasModule {}
