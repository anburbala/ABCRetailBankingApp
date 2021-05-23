import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customersummary',
  templateUrl: './customersummary.component.html',
  styleUrls: ['./customersummary.component.css']
})
export class CustomersummaryComponent implements OnInit {
  customerdetails: any[];

  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
    this.readAllCustomers();
  }

  readAllCustomers(){
    this.customerdetails=[];
      this.customerService.getCustomerDetails()
      .subscribe((resp:any) => {
            (error: any) => console.log(error);
            if(resp.length > 0)
            {
              for (const data of resp) {
                  this.customerdetails.push(data);
              }
            }
            console.log(this.customerdetails);
          });
  }

}
