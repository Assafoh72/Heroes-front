import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { passwordValidator } from '../../core/service/password.validator';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {


  form!: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup ({
      name: new FormControl ('', Validators.required ),
      email: new FormControl ('', [Validators.required, Validators.email] ),
      password: new FormControl ('', [Validators.required, passwordValidator()])  // Add the custom validator to the password control
    });
  }
  handleSubmit(): void {
    console.log(this.form)
    this.router.navigate(['/app-heroes-list']);
  }



}
