import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

import { Router } from "@angular/router";

import { FormUtils } from "../shared/form.utils";
import { AuthService } from "../shared/auth.service";

@Component({
    selector: 'sign-in-form',
    templateUrl: './sign-in-form.component.html'
})

export class SignInFormComponent {

    public form: FormGroup;
    public formUtils: FormUtils;
    public submitted: boolean;
    public formErrors: Array<string>;

    constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
        this.setupForm();
        this.formUtils = new FormUtils(this.form);
        this.submitted = false;
        this.formErrors = null;
    }

    public signInUser() {
        this.submitted = true;
        this.authService.signIn(this.form.get('email').value, this.form.get('password').value)
            .subscribe(() => {
                this.router.navigate(['/dashboard']);
                this.formErrors = null;
            },
                (error) => {
                    this.submitted = false;
                    if (error.status === 401) {
                        this.formErrors = JSON.parse(error._body).errors;
                    } else {
                        this.formErrors = ['Não foi possível processar sua solicitação.']
                    }
                }
            )
    }

    public setupForm() {
        this.form = this.formBuilder.group({
            email: [null, [Validators.required, Validators.email]],
            password: [null, Validators.required]
        });
    }
}