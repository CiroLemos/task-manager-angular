import { Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Task } from "./task.model";
import { Observable } from "rxjs/Observable";

import { TokenService } from "../../shared/token.service";


@Injectable()
export class TaskService {

    public taskUrl = 'tasks';

    constructor(private tokenHttp: TokenService) { }

    public getAll(): Observable<Task[]> {

        let url = `${this.taskUrl}?q[s]=updated_at+DESC`;

        return this.tokenHttp.get(url)
            .catch(this.handleErrors)
            .map((response: Response) => this.responseToTasks(response));
    }


    public getImportant(): Observable<Task[]> {

        let url = `${this.taskUrl}?q[s]=deadline+ASC`;

        return this.getAll()
            .catch(this.handleErrors)
            .map(tasks => this.responseToTasks(tasks));
    }

    public getById(id: number): Observable<Task> {
        let url = `${this.taskUrl}/${id}`;
        return this.tokenHttp.get(url)
            .catch(this.handleErrors)
            .map((res: Response) => this.responseToTask(res));
    }

    public create(task: Task): Observable<Task> {
        let url = this.taskUrl;
        let body = JSON.stringify(task);

        return this.tokenHttp.post(url, body)
            .catch(this.handleErrors)
            .map((res: Response) => this.responseToTask(res));
    }

    public update(task: Task): Observable<Task> {
        let url = `${this.taskUrl}/${task.id}`;
        let body = JSON.stringify(task);

        return this.tokenHttp.put(url, body)
            .catch(this.handleErrors)
            .map(() => task)
    }

    public delete(id: number): Observable<null> {
        let url = `${this.taskUrl}/${id}`;

        return this.tokenHttp.delete(url)
            .catch(this.handleErrors)
            .map(() => null);
    }

    public searchByTitle(term: string): Observable<Task[]> {
        let url = `${this.taskUrl}?q=[title_cont]=${term}`;

        return this.tokenHttp.get(url)
            .catch(this.handleErrors)
            .map(response => this.responseToTasks(response));
    }

    private handleErrors(error: any) {
        console.log('SALVANDO O ERROR NO LOG', error);
        return Observable.throw(error);
    }

    private responseToTasks(response: Response): Task[] {
        
        let collection = response.json().data as Array<any>;
        let tasks: Task[] = [];

        collection.forEach(item => {
            let task = new Task(
                item.id,
                item.attributes.title,
                item.attributes.description,
                item.attributes.done,
                item.attributes.deadline
            )
            tasks.push(task);
        });
        return tasks;
    }

    private responseToTask(res: Response): Task {
        return new Task(
            res.json().data.id,
            res.json().data.attributes.title,
            res.json().data.attributes.description,
            res.json().data.attributes.done,
            res.json().data.attributes.deadline
        );
    }
}