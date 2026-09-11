import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  imports: [FormsModule],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  loginObj: any = {
    username: '',
    password: ''
  };

  constructor(private router: Router) {}

  onLogin() {
    debugger
    if(this.loginObj.username === "admin" && this.loginObj.password == "123456") {
      localStorage.setItem("carUser", this.loginObj.username)
      this.router.navigateByUrl("/dashboard")
    } else if(this.loginObj.username === "user1" && this.loginObj.password == "135790") {
      localStorage.setItem("carUser", this.loginObj.username)
      this.router.navigateByUrl("/dashboard")
    } else {
      alert ("Invalid username or password");
    }
  }
}
