import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import "rxjs/add/operator/switchMap";

import { TaskService } from "../shared/task.service";
import { Task } from "../shared/task.model";

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent implements OnInit {

    public task: Task;

    constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.taskService.getById(+params['id']))
            .subscribe(
                task => this.task = task,
                error => alert('Ocorreu um erro no servidor'),
            );
    }

    public goBack() {
        this.location.back();
    }

    public updateTask() {
        if(!this.task.title) {
            alert('Tarefa deve ter um título')
        }else {
            this.taskService.update(this.task)
                .subscribe(
                    () => alert('Tarefa atualizada com sucesso'),
                    () => alert('Ocorreu um erro no servidor')
                );
        }
    }
}