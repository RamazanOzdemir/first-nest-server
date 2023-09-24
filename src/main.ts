import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { authMiddleware } from './middlewares/auth.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global Middleware  was applied for all requests to application
  app.use(authMiddleware);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
