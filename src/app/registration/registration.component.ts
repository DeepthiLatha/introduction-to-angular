import { Component, OnInit } from '@angular/core';
import { RegistrationData } from 'src/app/registration-data'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userRegistrationData : RegistrationData[] = []
   
  register ( email:string, phoneNumber:string, password:string ){

    const registrationObject = {
      email,
      phoneNumber,
      password
    }

    this.userRegistrationData.push(registrationObject);

    console.log(this.userRegistrationData);

  }

}
