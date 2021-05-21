import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { customer, customerAccount } from '../model/customer';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  accountData : customerAccount[] = [];

  error = new Subject<string>();
  
  constructor(private customerService : CustomerService) { }

  ngOnInit(): void {
  }

  customer = {
    customerName: '',
    gender : '',
    customerAddress: '',
    customerPhone: '',
    customerEmailId:'',
    password : '',
    customerStatus: '',
    customerId:'',
  };

  customerAccount = {
    accountnumber : 0,
    accounttype:'',
    balance: 0.0,
    accountstatus : '',
  };

  
  submitted = false;
  
  min : number = 500000; // Customer Id Min
  max : number = 800000; // Customer Id Max

    getRandomNumberBetween(min: number,max: number){
      return Math.floor(Math.random()*(max-min+1)+min);
    }
    
    getAccountInformation()
    {
      let accountInfo : customerAccount ={
        accountnumber : this.GenerateAccountNumber(10),
        accounttype : this.customerAccount.accounttype,
        accountstatus : 'Active',
        balance : this.customerAccount.balance
      }
     return this.accountData.push(accountInfo);
    }

    //, format: string
    GenerateAccountNumber(length: number): number {
      var randomChars = '0123456789';
      var result = '';
          for (var i = 0; i < length; i++) {
              result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
          }
          return +result;
  }

    createCustomer() {
      this.getAccountInformation();
      let customer : customer = {
      customerId : this.getRandomNumberBetween(this.min, this.max),
      customerName : this.customer.customerName,
      customerAddress : this.customer.customerAddress,
      customerEmailId : this.customer.customerEmailId,
      customerPhone : this.customer.customerPhone,
      customerstatus : 'Active',
      customerAccounts : this.accountData,
      Gender : this.customer.gender,
      password : this.customer.password,
      };

      this.customerService.create(customer)
        .subscribe(
            response => {
                this.submitted = true;
            },
            error => {
              this.error.next(error);
        });
    }
}
