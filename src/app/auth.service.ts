import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  register(email: string, phoneNumber: string, password: string): boolean {
    return true;
  }

  login(email: string, password: string): boolean {
    return true;
  }

  logout(): void {
    
    localStorage.removeItem('userDetails');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('userDetails');
  }
}
