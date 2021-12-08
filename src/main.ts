import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

// Load env dynamically https://docs.nestjs.com/techniques/configuration
// Dockerfile and Docker Compose
// Mongodb Connection
// Validate Object
// Think about User Schema what to save
// Swagger
