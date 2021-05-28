import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthserviceService } from './authservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABCRetailBankingApp';
  isUserLoggedIn: boolean;
  isAdmin : boolean;
 
  constructor(private authservice: AuthserviceService,private route: ActivatedRoute) {

    // Subscribe here, this will automatically update 
    // "isUserLoggedIn" whenever a change to the subject is made.
    this.authservice.isUserLoggedIn.subscribe( value => {
        this.isUserLoggedIn = value;

        let storeLoginData = localStorage.getItem("isUserLoggedIn");
        let storeRolaData = localStorage.getItem("privilage");
       console.log("StoreData: " + storeLoginData);
         console.log("storeRolaDate: "+ storeRolaData );
   
         if( storeLoginData != null && storeLoginData == "true") 
         {
           this.isUserLoggedIn = true;
           if(storeRolaData !=null && storeRolaData=="Admin")
           {
             this.isAdmin = true;
           }
           else  {
             this.isAdmin = false;
           }
         }      
         else
         {
            this.isUserLoggedIn = false;
            this.authservice.logout();
         }

    });

    
  }

  ngOnInit(): void {
     
  }

  

}
