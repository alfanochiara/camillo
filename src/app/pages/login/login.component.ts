import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  email = '';
  password = '';
  errorMsg="";

  onSubmit(form: any) {
    console.log(form);
  }

  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = 'Username obbligatorio';
    } else if (this.email.trim().length === 0) {
      this.errorMsg = "Email obbligatoria";
    }
    else if (this.password.trim().length=== 0){
      this.errorMsg="Password obbligatoria";
    }
    else { this.errorMsg="";
      }
}

}
