import { Injectable } from "@angular/core";

import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable()
export class InMemoryTaskDataService implements InMemoryDbService {
    createDb() {
        let tasks = [
            { id: 1, title: 'ABC tarefa 1' },
            { id: 2, title: 'DEF tarefa 2' },
            { id: 3, title: 'GHI tarefa 3' },
            { id: 4, title: 'JKL tarefa 4' },
            { id: 5, title: 'MNO tarefa 5' },
            { id: 6, title: 'PQR tarefa 6' }
        ]

        return { tasks };
    }

}