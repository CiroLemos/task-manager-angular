import { Component, OnInit } from "@angular/core";

import { TaskService } from "../Tasks/shared/task.service";
import { Task } from "app/Tasks/shared/task.model";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit{

    public tasks: Task[]

    ngOnInit(): void {
        this.taskService.getImportantTasks().then((tasks) => this.tasks = tasks);
    }
    constructor(private taskService: TaskService) {}
}