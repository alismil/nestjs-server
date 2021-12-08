import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();

// Mongodb Connection ✅
// Load env dynamically https://docs.nestjs.com/techniques/configuration ✅
// Dockerfile and Docker Compose
// Validate Object
// Think about User Schema what to save
// Swagger
