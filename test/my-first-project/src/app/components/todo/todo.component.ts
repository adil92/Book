import { Component, OnInit } from "@angular/core";
import { TodoService } from "../../services/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"]
})
export class TodoComponent implements OnInit {
  public todoText: string;

  constructor(private todoService: TodoService) {
    this.todoText = "";
  }

  onKeypress(event: any) {
    this.todoService.addTodo(this.todoText);
    this.todoText = "";
  }

  ngOnInit() {}

  public addTodo(): void {
    this.todoService.addTodo(this.todoText);
    this.todoText = "";
  }
}
