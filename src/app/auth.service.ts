import { Injectable } from '@angular/core';
import { RegistrationData } from 'src/app/registration-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userRegistrationData: RegistrationData[] = [];

  constructor() { }

  registerUser(registrationData: RegistrationData): void {
    this.userRegistrationData.push(registrationData);
  }

  loginUser(email: string, password: string): boolean {
    const user = this.userRegistrationData.find(u => u.email === email && u.password === password);
    return !!user; 
  }
}
