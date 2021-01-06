import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  Input, ChangeDetectorRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
} from '@angular/forms';


@Component({
  selector: 'ag-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements ControlValueAccessor {
  @Input() placeholder = '';
  @Input() type = 'text';
  @Input() disabled = false;
  @Input() set value(value: string) {
    this.inputValue = value;
    this.onChange(value);
  }
  get value(): string {
    return this.inputValue;
  }

  private inputValue = '';

  constructor(
    private readonly cdr: ChangeDetectorRef
  ) {}

  setDisabledState(state: boolean): void {
    this.disabled = state;
  }

  writeValue(value: string): void {
    this.inputValue = value;
    this.onChange(value);
    this.onTouched();
    this.cdr.detectChanges();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
  onChange(value: string): void {}
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched(): void {}

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  validate(control: FormControl): ValidationErrors {
    return control.valid ? null : control.errors;
  }
}
