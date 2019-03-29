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

//  import { InMemoryWebApiModule } from "angular-in-memory-web-api";
//  import { InMemoryTaskDataService } from './in-memory-task-data.service';

import { Angular2TokenService } from "angular2-token";
import { AuthService } from "./shared/auth.service";

import { AuthGuard } from "./guards/auth.guard";
import { NotAuthenticatedGuard } from "./guards/not-authenticated.guard";

import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

import "rxjs/add/Observable/throw";
import "rxjs/add/Observable/of";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TasksComponent,
    TaskDetailComponent,
    DashboardComponent,
    TaskSearchComponent,
    SignUpFormComponent,
    SignInFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
    //InMemoryWebApiModule.forRoot(InMemoryTaskDataService)
  ],
  providers: [
    TaskService,
    Angular2TokenService,
    AuthService,
    AuthGuard,
    NotAuthenticatedGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
