// 



// registration.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationData } from 'src/app/registration-data';
import { RegistrationService } from 'src/app/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router, private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  register(email: string, phoneNumber: string, password: string, role: string = 'user'): void {
    if (!email || !phoneNumber || !password) {
      alert('Please enter all inputs');
      return;
    }

    const registrationObject: RegistrationData = {
      email,
      phoneNumber,
      password,
      role
    };

    this.registrationService.register(registrationObject);

    this.router.navigate(['/login']); 
  }

}
