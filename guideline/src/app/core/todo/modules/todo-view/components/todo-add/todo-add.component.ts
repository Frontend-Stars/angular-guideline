import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TodoAddForm } from '../../../../forms/todo-add/todo-add.form';
import { TodoManager } from '../../../../managers/todo/todo.manager';


@Component({
  selector: 'ag-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoAddComponent {
  form = this.todoAddForm.form;

  constructor(
    private readonly todoAddForm: TodoAddForm,
    private readonly todoManager: TodoManager,
  ) { }

  submit(): void {
    if (this.form.invalid) {
      return;
    }

    this.todoManager.addTodo({
      title: this.form.value.title
    });
    this.todoAddForm.reset();
  }
}
