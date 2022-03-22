import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
form: any = {
  username: null,
  email: null,
  password: null,
  isadmin:true,
  phone:null
};
isSuccessful = false;
isSignUpFailed = false;
errorMessage = '';

constructor(private authService: AuthService) { }

ngOnInit(): void {
}

onSubmit(): void {
  const { username, email, password,isadmin } = this.form;
debugger
  this.authService.register(username, email, password,isadmin).subscribe(
    data => {
      console.log(data);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
    },
    err => {
      this.errorMessage = err.error.message;
      this.isSignUpFailed = true;
    }
  );
}
}

