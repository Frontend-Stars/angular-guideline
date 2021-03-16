import { Module } from '@nestjs/common';
import { RenderModule } from '../core/render/render.module';

@Module({
  imports: [
    RenderModule
  ],
  controllers: [],
  providers: [],
})
export class RootModule {}
