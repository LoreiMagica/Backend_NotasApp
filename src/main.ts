import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Activamos CORS antes de escuchar
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true,
  });

  const puerto = process.env.PORT ?? 3000;
  await app.listen(puerto);
  console.log(`Backend ejecutándose en http://localhost:${puerto}`);
}
bootstrap();