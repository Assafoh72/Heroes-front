import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';


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
      password: new FormControl ('', [Validators.required, this.passwordValidator()])  // Add the custom validator to the password control
    });
  }
  handleSubmit(): void {
    console.log(this.form)
    this.router.navigate(['/app-heroes-list']);
  }


  // Custom password validator function
  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.value;

      // Check if the password meets the requirements
      if (password && /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
        return null; // Password is valid, return null (no errors)
      } else {
        return { invalidPassword: true }; // Password is invalid, return an error object
      }
    };
  }


}
