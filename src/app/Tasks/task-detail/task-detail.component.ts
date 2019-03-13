import { Component, OnInit, Input } from "@angular/core";

import { Task } from "../shared/task.model";

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html', 
})
export class TaskDetailComponent implements OnInit {

    @Input() task: Task;

    constructor() { }

    ngOnInit(): void {
    }
}