// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { AuthserviceService } from '../authservice.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent implements OnInit {
//   isUserLoggedIn : boolean = false;
//   isAdmin : boolean = false;
//   constructor(private authservice: AuthserviceService,private route: ActivatedRoute) {

//         // Subscribe here, this will automatically update 
//         // "isUserLoggedIn" whenever a change to the subject is made.
//         this.authservice.isUserLoggedIn.subscribe( value => {
//             this.isUserLoggedIn = value;
//         });

//         // let storeLoginData = localStorage.getItem("isAdmin");
//         // if( storeLoginData != null && storeLoginData == "true")
//         //    this.isAdmin = true;
//         // else
//         //    this.isAdmin = false;


      
//     }

//   ngOnInit(): void {
   
//    }




// }
