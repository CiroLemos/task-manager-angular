import { Injectable } from "@angular/core";

import { CanActivate, Router } from "@angular/router";

import { AuthService } from "../shared/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    public constructor(private authService: AuthService, private router: Router) { }

    canActivate(): boolean {
        if(this.authService.userSignedIn()) {
            return true;
        } else {
            this.router.navigate(['/signin']);
            return false;
        }
    }

}