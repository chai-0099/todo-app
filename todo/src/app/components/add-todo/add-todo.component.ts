// src/app/components/add-todo/add-todo.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title: string = '';

  constructor(private todoService: TodoService, private router:Router) {}

  addTodo(): void {
    if (this.title.trim().length === 0) return;
    const newTodo = { title: this.title, completed: false };
    this.todoService.addTodo(newTodo).subscribe();
    this.title = '';
    this.router.navigate(['/list']);
    
  }
}
