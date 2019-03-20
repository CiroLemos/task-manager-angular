import { Component, OnInit } from "@angular/core";

import { Task } from "../../Tasks/shared/task.model";
import { TaskService } from "../../Tasks/shared/task.service";

import { Subject } from "rxjs/Subject";


import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";

@Component({
    selector: 'task-search',
    templateUrl: './task-search.component.html'
})
export class TaskSearchComponent implements OnInit {

    public searchTerms: Subject<string> = new Subject();
    public tasks: Task[] = [];

    constructor(private taskService: TaskService, private router: Router) {

    }

    ngOnInit() {
        this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(
                term => term ? this.taskService.searchByTitle(term) : Observable.of<Task[]>([])
            ).subscribe(tasks => this.tasks = tasks)
    }

    public search(term: string) {
        this.searchTerms.next(term);
    }

    public gotoTask(task: Task) {
        this.tasks = [];
        this.router.navigate(['/tasks', task.id])
    }
}