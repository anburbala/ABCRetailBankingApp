import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn : boolean = false;
  constructor(private authservice: AuthserviceService) {

        // Subscribe here, this will automatically update 
        // "isUserLoggedIn" whenever a change to the subject is made.
        this.authservice.isUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;
        });
    }

  ngOnInit(): void {
    // let storeLoginData = localStorage.getItem("isUserLoggedIn");
    //   console.log("StoreData: " + storeLoginData);

    //   if( storeLoginData != null && storeLoginData == "true")
    //      this.isUserLoggedIn = true;
    //   else
    //      this.isUserLoggedIn = false;
   }

}


