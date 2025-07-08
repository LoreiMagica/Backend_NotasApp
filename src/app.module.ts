import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosModule } from './usuarios/usuarios.module';
import { NotasModule } from './notas/notas.module';
import { Usuario } from './usuarios/usuario.entity';
import { Nota } from './notas/nota.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [

    //Comunicación con la base de mysql
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',         // Usuario
      password: 'Notas_1234',     // Contraseña
      database: 'notas_app',     // Nombre de la base de datos
      entities: [Usuario, Nota],
      synchronize: true,        // ¡Solo para desarrollo!
    }),
    UsuariosModule,
    NotasModule,
    AuthModule,
  ],
})
export class AppModule {}
