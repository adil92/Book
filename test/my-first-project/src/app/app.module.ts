import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { TodoComponent } from "./components/todo/todo.component";
import { DoneComponent } from "./components/done/done.component";
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { FormsModule } from "@angular/forms";
import { TodoService } from "./services/todo.service";
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoComponent,
    DoneComponent,
    TodoInputComponent,
    TodoItemComponent,
    FilterPipe
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
