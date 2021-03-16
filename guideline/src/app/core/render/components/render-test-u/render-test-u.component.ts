import {
  Component,
  ChangeDetectionStrategy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  ChangeDetectorRef, OnInit, NgZone, Renderer2, ElementRef, ViewChild,
} from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'ag-render-test-u',
  templateUrl: './render-test-u.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderTestUComponent
  implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
{
  @ViewChild('input', { static: true }) input: ElementRef<HTMLInputElement>;
  @ViewChild('button', { static: true }) button: ElementRef<HTMLButtonElement>;
  data$ = new BehaviorSubject('noop');

  constructor(
    private cdr: ChangeDetectorRef,
    private zone: NgZone,
    private renderer: Renderer2
  ) {
    cdr.detach();
  }

  ngOnInit(): void {
    // this.cdr.detach();

    this.zone.runOutsideAngular(() => {
      this.renderer.listen(this.button.nativeElement, 'click', () => {
        this.change(this.input.nativeElement.value);
      });

      this.renderer.listen(this.input.nativeElement, 'keyup', () => {
        this.change(this.input.nativeElement.value);
      });
    });
  }

  ngAfterViewInit(): void {
    console.log('RenderTestUComponent::ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('RenderTestUComponent::ngAfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('RenderTestUComponent::ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('RenderTestUComponent::ngAfterContentChecked');
  }

  log(): boolean {
    console.log('RenderTestUComponent');

    return  true;
  }

  change(str: string): void {
    this.data$.next(str);
    this.cdr.detectChanges();
  }

  change2(value: string): void {
    console.log(value);
  }
}
