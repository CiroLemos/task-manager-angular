import { Component, OnInit } from "@angular/core";

import { TaskService } from "../Tasks/shared/task.service";
import { Task } from "app/Tasks/shared/task.model";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    public tasks: Task[]

    ngOnInit(): void {
        this.taskService.getImportant().subscribe(
            (tasks) => this.tasks = tasks,
            error => alert('Ocorreu um erro no servidor')
        );
    }
    constructor(private taskService: TaskService) { }
}