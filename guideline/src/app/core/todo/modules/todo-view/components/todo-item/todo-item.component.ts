import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { TodoModel } from '../../../../types/todo.type';


@Component({
  selector: 'ag-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent {
  @Input() todo: TodoModel;
  @Output() removeHandler = new EventEmitter<TodoModel>();

  removeTodo(): void {
    this.removeHandler.emit(this.todo);
  }
}
