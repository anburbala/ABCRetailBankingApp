import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formData: FormGroup;
  email: string;
  password: string;
 
  constructor(private authservice : AuthserviceService, private router : Router) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      email: new FormControl(""),
      password: new FormControl(""),
   });
  }

  onClickSubmit(data: any) {
    
    this.email = data.email;
    this.password = data.password;
    this.authservice.login(this.email,this.password)
    .subscribe(resp =>
      {
        console.log("CustomerInfo " + resp); 
        localStorage.setItem("isAdmin",resp.userType === "Admin" ? "true" : "false");
        localStorage.setItem("isUserLoggedIn","true");
        this.authservice.isUserLoggedIn.next(true);
        if(resp.userType === "Admin") 
        {
          this.router.navigate(['/customersummary-component']); 
        }
        else{
          this.router.navigate(['/account-summary-component']); 
        }
      });
  }

}
