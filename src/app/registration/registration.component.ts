import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationData } from 'src/app/registration-data';

let userRegistrationData: RegistrationData[] = [];

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

 
 

  register(email: string, phoneNumber: string, password: string, role: string = 'user') {
    if (!email || !phoneNumber || !password) {
      alert('Please enter all inputs');
      return;
    }

    const registrationObject = {
      email,
      phoneNumber,
      password,
      role
    };

    userRegistrationData.push(registrationObject);

    console.log(userRegistrationData);

    this.router.navigate(['/login']); 

  }

}




const jsonData = JSON.stringify(userRegistrationData);

// Store it in local storage under a specific key
localStorage.setItem("userData", jsonData);
