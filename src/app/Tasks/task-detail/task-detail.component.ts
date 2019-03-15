import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import "rxjs/add/operator/switchMap";

import { TaskService } from "../shared/task.service";
import { Task } from "../shared/task.model";

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html', 
})
export class TaskDetailComponent implements OnInit {

    @Input() task: Task;

    constructor(private taskService: TaskService, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params
        .switchMap((params: Params) => this.taskService.getTask(+params['id']))
        .subscribe(task => this.task = task);
    }
}