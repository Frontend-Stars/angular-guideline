import { Injectable } from '@nestjs/common';
import { SomeData } from '../types/some-data.type';

const faker = require('faker');

@Injectable()
export class RenderService {
  getSomeData(): SomeData[] {
    const data = [];

    for(let i = 0; i < 1000; i++) {
      data.push({
        uuid: faker.random.uuid(),
        name: faker.name.findName()
      });
    }

    return data;
  }
}
