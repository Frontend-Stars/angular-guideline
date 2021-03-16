import {
  Component,
  ChangeDetectionStrategy, ViewChild, ElementRef, OnInit, NgZone, Renderer2,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { RenderExampleTransport } from '@core/render/types/render-example.type';
import { SomeData } from '@core/render/components/render-list/render-list.component';

// example decorator
// @Component({
//   selector: 'ag-render-page',
//   templateUrl: './render-page.component.html',
//   styleUrls: ['./render-page.component.scss'],
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class RenderPageComponent {
//   @OutOfZoneEventListener('nameOfElementId', 'eventType')
//   click(event: Event): void {
//     // any async actions
//   }
// }

@Component({
  selector: 'ag-render-page',
  templateUrl: './render-page.component.html',
  styleUrls: ['./render-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RenderPageComponent implements OnInit {
  @ViewChild('button', { static: true }) button: ElementRef<HTMLButtonElement>;

  form = this.fb.group({
    name: ['', Validators.required]
  });
  test: any = {
    name: 'kek'
  };
  test2 = '';
  test3 = new BehaviorSubject({ name: 'initial' });
  transport: RenderExampleTransport = RenderExampleTransport.LINK;
  isLinkTransport = true;
  isPrimitiveTransport = false;
  isObservableTransport =  false;

  enableTestCase1 = false;
  enableTestCase2 = false;
  enableTestCase3 = false;
  enableTestCase4 = false;
  enableTestCase5 = true;
  someData = new BehaviorSubject<SomeData[]>([]);

  constructor(
    private fb: FormBuilder,
    private zone: NgZone,
    private renderer: Renderer2,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.zone.runOutsideAngular(() => {
      this.renderer.listen(this.button.nativeElement, 'click', () => {
        this.httpClient.get<SomeData[]>('http://localhost:3000/render/some-data').subscribe((data) => {
          console.log('RenderPageComponent::out of zone', data);

          this.someData.next(data);
        });
      });
    });
  }

  reset(): void {
    this.form.reset({ name: 'test' });
  }

  submit(): void {
    const currentName = this.form.value.name;

    switch (this.transport) {
      case RenderExampleTransport.LINK:
        this.test.name = currentName;
        break;
      case RenderExampleTransport.OBSERVABLE:
        this.test3.next(currentName);
        break;
      case RenderExampleTransport.PRIMITIVE:
        this.test2 = currentName;
        break;
    }
  }

  setLinkTransport(): void {
    this.transport = RenderExampleTransport.LINK;
    this.isLinkTransport = true;
    this.isPrimitiveTransport = false;
    this.isObservableTransport = false;
  }

  setPrimitiveTransport(): void {
    this.transport = RenderExampleTransport.PRIMITIVE;
    this.isLinkTransport = false;
    this.isPrimitiveTransport = true;
    this.isObservableTransport = false;
  }

  setObservableTransport(): void {
    this.transport = RenderExampleTransport.OBSERVABLE;
    this.isLinkTransport = false;
    this.isPrimitiveTransport = false;
    this.isObservableTransport = true;
  }

  doRequest(): void {
    this.httpClient.get<SomeData[]>('http://localhost:3000/render/some-data').subscribe((data) => {
      console.log('RenderPageComponent', data);

      this.someData.next(data);
    });
  }
}
