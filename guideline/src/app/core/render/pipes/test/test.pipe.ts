import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  pure: true
})
export class TestPipe implements PipeTransform {
  transform(str: string): string {
    console.log('TestPipe', str);

    return str.split(' ').join(', ');
  }
}
