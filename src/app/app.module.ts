import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { TasksComponent } from "./Tasks/tasks.component";
import { TaskDetailComponent } from "./Tasks/task-detail/task-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TaskSearchComponent } from "./navbar/task-search/task-search.component";

import { TaskService } from "./Tasks/shared/task.service";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryTaskDataService } from './in-memory-task-data.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TasksComponent,
    TaskDetailComponent,
    DashboardComponent,
    TaskSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
