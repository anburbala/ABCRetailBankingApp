import { Component } from '@angular/core';
import { AuthserviceService } from './authservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ABCRetailBankingApp';
  isUserLoggedIn: boolean;
 
  constructor(private authservice : AuthserviceService) {

    
}

  ngOnInit(): void {
     let storeLoginData = localStorage.getItem("isUserLoggedIn");
      console.log("StoreData: " + storeLoginData);

      if( storeLoginData != null && storeLoginData == "true")
         this.isUserLoggedIn = true;
      else
         this.isUserLoggedIn = false;
         this.authservice.logout();
  }

  

}
