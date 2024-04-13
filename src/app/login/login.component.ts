import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  
    
  }

  login(phoneNumber: string, password: string): void {
    if (phoneNumber && password) {
      //console.log(phoneNumber, password);
    }
    const jsonData = localStorage.getItem("userData");

    console.log(jsonData);
    if (jsonData) {
      const retrievedData = JSON.parse(jsonData);
      console.log(retrievedData);
    }
  }
}

// Retrieve the JSON string from local storage using the key




