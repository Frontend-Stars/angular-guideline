import { Controller, Get } from '@nestjs/common';
import { RenderService } from '../services/render.service';
import { SomeData } from '../types/some-data.type';

@Controller('render')
export class RenderController {
  constructor(private readonly service: RenderService) {}

  @Get('some-data')
  getSomeData(): SomeData[] {
    return this.service.getSomeData();
  }
}
