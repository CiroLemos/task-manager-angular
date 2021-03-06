import { Http, Response, Headers } from "@angular/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { TokenService } from "./token.service";

import { User } from "./user.model";


@Injectable()
export class AuthService {

    constructor(private tokenService: TokenService){ }

    public signUp(user: User): Observable<Response> {
        return this.tokenService.registerAccount(user as any)
            .catch(this.handleErrors);
    }

    public signIn(uid: string, password: string): Observable<Response> {
        let signData = {
            email: uid,
            password: password
        };
        return this.tokenService.signIn(signData)
            .catch(this.handleErrors);
    }

    public signOut(): Observable<Response> {
        return this.tokenService.signOut()
            .catch(this.handleErrors);
    }

    public userSignedIn(): boolean {
        return this.tokenService.userSignedIn();
    }

    private handleErrors(error: any) {
        console.log('SALVANDO O ERROR NO LOG', error);
        return Observable.throw(error);
    }
}
