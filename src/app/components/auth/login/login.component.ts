import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  form!: FormGroup;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup ({
      email: new FormControl ('', [Validators.required, Validators.email] ),
      password: new FormControl ('', Validators.required)
    });
  }
  handleSubmit(): void {
    console.log(this.form)
    this.router.navigate(['/app-heroes-list']);
  }

}
