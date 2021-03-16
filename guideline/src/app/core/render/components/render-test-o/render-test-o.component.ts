import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectorRef,
  NgZone,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  OnChanges,
  SimpleChanges, Renderer2, ViewChild, ElementRef,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ag-render-test-o',
  templateUrl: './render-test-o.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderTestOComponent
  implements OnInit, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, DoCheck, OnChanges
{
  @Input() test: Observable<any>;

  test2: any;
  sub = new Subscription();

  constructor(
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.sub.add(
      this.test.subscribe((d) => {
        this.test2 = d;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  log(): boolean {
    console.log('RenderTestOComponent::log');

    return true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('RenderTestOComponent::ngOnChanges', changes);
  }

  ngDoCheck(): void {
    console.log('RenderTestOComponent::ngDoCheck');
  }

  ngAfterViewInit(): void {
    console.log('RenderTestOComponent::ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('RenderTestOComponent::ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('RenderTestOComponent::ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('RenderTestOComponent::ngAfterContentChecked');
  }
}
