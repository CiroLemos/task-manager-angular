import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './Tasks/tasks.component';
import { TaskDetailComponent } from './Tasks/task-detail/task-detail.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';

const ROUTES = RouterModule.forRoot([
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'tasks/:id', component: TaskDetailComponent },
    { path: 'signup', component: SignUpFormComponent },
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