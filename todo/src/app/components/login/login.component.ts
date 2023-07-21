import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) { }
  // Set the username and password to the default values.
  username = '';
  password = '';


  //Create the function validates the login form. It checks if the fields are empty, and if they are, it displays an error message. If the fields aren't empty, it displays a success message.
  validateLogin() {
    if (this.username === 'admin' && this.password === '1234') {
      alert('Success!'); // Allow user to log in
      this.router.navigate(['/todo']); // Navigate to the home page
    } else {
      alert('Invalid username or password.'); // Display error message
    }
  }
  
}

