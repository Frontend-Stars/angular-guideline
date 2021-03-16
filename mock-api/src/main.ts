import { NestFactory } from '@nestjs/core';
import { RootModule } from './root/root.module';

async function bootstrap() {
  const app = await NestFactory.create(RootModule, {
    cors: true
  });

  await app.listen(3000);
}
bootstrap();
