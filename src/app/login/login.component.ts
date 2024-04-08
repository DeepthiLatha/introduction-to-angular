import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    const isAuthenticated = this.authService.loginUser(this.email, this.password);
    if (isAuthenticated) {
      console.log('Login successful');
      // You can navigate to another component or perform other actions upon successful login
    } else {
      console.log('Invalid email or password');
      // You can show an error message to the user
    }
  }
}
