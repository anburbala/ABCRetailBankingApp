import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.css']
})
export class AccountSummaryComponent implements OnInit {
  customerdetails: any[];
  LoggedInEmailID : string ='';
  visible:boolean = false;
  constructor(private customerService : CustomerService) { }
  
  ngOnInit(): void {
    this.readAllCustomers();
  }

  readAllCustomers(){
    this.customerdetails=[];
    this.LoggedInEmailID = localStorage.getItem("LoggedInEmailID").toString();
      this.customerService.getcustomerDetails(this.LoggedInEmailID)
      .subscribe((resp:any) => {
            (error: any) => console.log(error);
              for (const data of resp) {
                  this.customerdetails.push(data);
              }
            console.log(this.customerdetails);
          });
  }

  showhideMinistatementComponenet()
  {
    this.visible = this.visible?false:true;
  }
}
