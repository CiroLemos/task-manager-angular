import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Angular2TokenService } from "angular2-token";

import { User } from "./user.model";


@Injectable()
export class AuthService {

    constructor(private tokenService: Angular2TokenService){ }

    public signUp(user: User) {
        
    }

    public signIn(uid: string, password: string) {

    }

    public signOut() {

    }

    public isSignedIn() {

    }

    private handleErrors(error: any) {
        console.log('SALVANDO O ERROR NO LOG', error);
        return Observable.throw(error);
    }
}
