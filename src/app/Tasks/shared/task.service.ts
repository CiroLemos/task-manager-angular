import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";

import { Task } from "./task.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map"


const TASKS: Array<Task> = [
    {id: 1, title: 'Fazer tarefa 1' },
    {id: 2, title: 'Fazer tarefa 2' },
    {id: 3, title: 'Fazer tarefa 3' },
    {id: 4, title: 'Fazer tarefa 4' },
    {id: 5, title: 'Fazer tarefa 5' },
    {id: 6, title: 'Fazer tarefa 6' }
];

@Injectable()
export class TaskService {

    public taskUrl = 'api/tasks';

    constructor(private http: Http) {}

    public getTasks(): Observable<Task[]> {
        return this.http.get(this.taskUrl).map((response: Response) => response.json().data as Task[])
    }

    public getImportantTasks(): Promise<Task[]> {
        return Promise.resolve(TASKS.slice(0, 3));
    }

    public getTask(id: number): Observable<Task> {
        let url = `${this.taskUrl}/${id}`;
        return this.http.get(url).map((res: Response) => res.json().data as Task)
    }
}