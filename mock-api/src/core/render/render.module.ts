import { Module } from '@nestjs/common';
import { RenderController } from './controllers/render.controller';
import { RenderService } from './services/render.service';

@Module({
  imports: [],
  controllers: [
    RenderController
  ],
  providers: [
    RenderService
  ],
})
export class RenderModule {}
