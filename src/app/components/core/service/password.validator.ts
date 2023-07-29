import { AbstractControl, ValidatorFn } from "@angular/forms";


export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const password = control.value;

    // Your custom password validation logic here
    if (password && /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(password)) {
      return null; // Password is valid, return null (no errors)
    } else {
      return { invalidPassword: true }; // Password is invalid, return an error object
    }
  };
}
