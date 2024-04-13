// registration.service.ts

import { Injectable } from '@angular/core';
import { RegistrationData } from 'src/app/registration-data';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private userRegistrationData: RegistrationData[] = [];

  constructor() { }

  register(registrationObject: RegistrationData): void {
    this.userRegistrationData.push(registrationObject);
    this.saveData();
  }

  private saveData(): void {
    const jsonData = JSON.stringify(this.userRegistrationData);
    localStorage.setItem("userData", jsonData);
  }

  getRegistrationData(): RegistrationData[] {
    const jsonData = localStorage.getItem("userData");
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return [];
    }
  }
}
