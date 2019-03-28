import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { TasksComponent } from "./Tasks/tasks.component";
import { TaskDetailComponent } from "./Tasks/task-detail/task-detail.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TaskSearchComponent } from "./navbar/task-search/task-search.component";
import { SignUpFormComponent } from "./sign-up-form/sign-up-form.component";
import { SignInFormComponent } from "./sign-in-form/sign-in-form.component";

import { TaskService } from "./Tasks/shared/task.service";

import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryTaskDataService } from './in-memory-task-data.service';

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import "rxjs/add/Observable/throw";
import "rxjs/add/Observable/of";

import * as $ from 'jquery';
import * as datetimepicker from 'eonasdan-bootstrap-datetimepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TasksComponent,
    TaskDetailComponent,
    DashboardComponent,
    TaskSearchComponent,
    SignUpFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
