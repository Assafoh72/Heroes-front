import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { passwordValidator } from '../../core/service/password.validator';
import { UserInfoService } from '../../core/service/user-info.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  form!: FormGroup;
  constructor(private router: Router , private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.form = new FormGroup ({
      name: new FormControl ('', Validators.required ),
      email: new FormControl ('', [Validators.required, Validators.email] ),
      password: new FormControl ('', [Validators.required, passwordValidator()])  // Add the custom validator to the password control
    });
  }
  handleSubmit(): void {
    const name = this.form.value.name
    const email = this.form.value.email
    const password = this.form.value.password
    this.userInfoService.storeUserInfo (email, password, name)
    this.userInfoService.updateIsUserLogedIn(true);
    console.log("sign up updatted the is user loged in");

    this.router.navigate(['/app-heroes-list']);
  }

  isInputValid(form:FormGroup, input: string): boolean{
    return !(!form.get(input)?.valid && form.get(input)?.touched)
  }



}
