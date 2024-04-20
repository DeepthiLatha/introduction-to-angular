import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationMessage: string = ''; 

  onRegister() {
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    const user = { username, password };
    localStorage.setItem('user', JSON.stringify(user));
    console.log('User registered:', user);
    this.registrationMessage = 'Registration successful'; 
  }
}
