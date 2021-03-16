import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  AfterContentChecked,
  AfterViewChecked,
  DoCheck, OnDestroy,
  ChangeDetectorRef,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';

export interface SomeData {
  uuid: string;
  name: string;
}

@Component({
  selector: 'ag-render-list',
  templateUrl: './render-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderListComponent implements OnInit, OnDestroy, AfterContentChecked, AfterViewChecked, DoCheck {
  @Input() someData: Observable<SomeData[]>;

  sub = new Subscription();
  data: SomeData[] = [];

  constructor(
    private cdr: ChangeDetectorRef
  ) {
  }

  track(i: number, item: SomeData): string {
    return item.uuid;
  }

  ngOnInit(): void {
    this.sub.add(
      this.someData.subscribe((data) => {
        this.data = data;
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterContentChecked(): void {
    console.log('RenderListComponent::ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('RenderListComponent::ngAfterViewChecked');
  }

  ngDoCheck(): void {
    console.log('RenderListComponent::ngDoCheck');
  }

}
