import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { FormGroup, FormControl, FormBuilder, Validators } from "@angular/forms";

import { TaskService } from "../shared/task.service";
import { Task } from "../shared/task.model";
import { FormUtils } from "../../shared/form.utils";

@Component({
    selector: 'task-detail',
    templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent implements OnInit, AfterViewInit {

    public formUtils: FormUtils;
    public form: FormGroup;
    public task: Task;
    public taskDoneOptions: Array<any>;

    constructor(private taskService: TaskService, private route: ActivatedRoute, private location: Location, private formBuilder: FormBuilder) { 

        this.taskDoneOptions = [
            { value: false, text: 'Pendente' },
            { value: true, text: 'Feita' }
        ];

        this.form = this.formBuilder.group({
            title: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(255)]],
            deadline: [null, Validators.required],
            done: [null, Validators.required],
            description: [null]
        });

        this.formUtils = new FormUtils(this.form);

        //Objecto do exemplo com mais de um formulário em um formGroup.
        // this.reactiveTaskForm = this.formBuilder.group({
        //     title: [null],
        //     deadline: [null],
        //     done: [null],
        //     description: [null],
        //     user: this.formBuilder.group({
        //         name: ['João Carlos'],
        //         email: ['joaocarlos@gmail.com']
        //     })
        // });
    }

    ngOnInit(): void {
        this.task = new Task(null, null);
        this.route.params
            .switchMap((params: Params) => this.taskService.getById(+params['id']))
            .subscribe(
                task => this.setTask(task),
                error => alert('Ocorreu um erro no servidor'),
            );
    }

    ngAfterViewInit(): void {
        $('#deadline').datetimepicker({
            sideBySide: true,
            locale: 'pt-br'
        }).on('dp.change', () => this.formUtils.getField('deadline').setValue($('#deadline').val()));
    }

    public setTask(task: Task): void {
        this.task = task;
        this.form.patchValue(task);
    }

    public goBack() {
        this.location.back();
    }

    public updateTask() {

        this.task.title = this.form.get('title').value;
        this.task.deadline = this.form.get('deadline').value;
        this.task.done = this.form.get('done').value;
        this.task.description = this.form.get('description').value;

        this.taskService.update(this.task)
            .subscribe(
                () => alert('Tarefa atualizada com sucesso'),
                () => alert('Ocorreu um erro no servidor')
            );
    }

}
