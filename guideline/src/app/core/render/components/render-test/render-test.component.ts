import {
  Component,
  ChangeDetectionStrategy,
  Input,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  DoCheck, OnChanges, SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'ag-render-test',
  templateUrl: './render-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderTestComponent
  implements AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnChanges
{
  @Input() test: any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('RenderTestComponent::ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('RenderTestComponent::ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log('RenderTestComponent::ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('RenderTestComponent::ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('RenderTestComponent::ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('RenderTestComponent::ngAfterContentChecked');
  }

  log(): boolean {
    console.log('RenderTestComponent');

    return  true;
  }
}
