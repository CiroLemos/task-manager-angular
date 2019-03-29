import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Angular2TokenService } from "angular2-token";

import { User } from "./user.model";


@Injectable()
export class AuthService {

    constructor(private tokenService: Angular2TokenService){ }

    public signUp(user: User): Observable<Response> {
        return this.tokenService.registerAccount(user as any)
            .catch(this.handleErrors);
    }

    public signIn(uid: string, password: string) {

    }

    public signOut() {

    }

    public userSignedIn(): boolean {
        return this.tokenService.userSignedIn();
    }

    private handleErrors(error: any) {
        console.log('SALVANDO O ERROR NO LOG', error);
        return Observable.throw(error);
    }
}
