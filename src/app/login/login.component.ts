import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})



export class LoginComponent implements OnInit {

  constructor(private userDataService: UserDataService) { } // Inject the StorageService

  ngOnInit(): void {
    
  }
  login(phoneNumber: string, password: string): void {
    if (phoneNumber && password) {
      console.log(phoneNumber, password);
    }
    const retrievedData = this.userDataService.getData(); // Use the service to retrieve data
  
    console.log(retrievedData);
  }  
}