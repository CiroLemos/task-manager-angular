import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './Tasks/tasks.component';
import { TaskDetailComponent } from './Tasks/task-detail/task-detail.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';

import { AuthGuard } from "./guards/auth.guard";
import { NotAuthenticatedGuard } from "./guards/not-authenticated.guard";

const ROUTES = RouterModule.forRoot([
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
    { path: 'tasks/:id', component: TaskDetailComponent, canActivate: [AuthGuard] },
    { path: 'signin', component: SignInFormComponent, canActivate: [NotAuthenticatedGuard] },
    { path: 'signup', component: SignUpFormComponent, canActivate: [NotAuthenticatedGuard] },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
]);

@NgModule({
    imports: [
        ROUTES
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}