import { ApplicationRef, Component, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { customer, customerAccount } from '../model/customer';
import { statement } from '../model/statement';
import { CustomerService } from '../services/customer.service';
import { StatementService } from '../services/statement.service';

@Component({
  selector: 'app-fundtransfer',
  templateUrl: './fundtransfer.component.html',
  styleUrls: ['./fundtransfer.component.css']
})
export class FundtransferComponent implements OnInit {
  LoggedInEmailID: string;
  fromAccountNumbers:string [];
  toAccountNumbers:string[];
  balanceAmount:number;
  currentDate : Date;
  error = new Subject<string>();
  fromAccount: string;
  emailIdFromAccount: string;
  emailIdToAccount:string;
  toAccount:string;
  fromid: any;
  toid: any;
  toCustomerAccountDetails : any[]=[];
  fromCustomerAccountDetails : any[]=[];
  transactionAmount: any;
  
  constructor(private customerService : CustomerService, private statementservice:StatementService) { }

  ngOnInit(): void {
    this.getFromCustomerInfoForFAN();
    this.readAllCustomersInfoForTAN();
    this.currentDate = new Date();
  }

  statement = {
    fromAccountNumber : 0,
    balanceAsOnDate:0.0,
    toAccountNumber:0,
    transactionType:'',
    transactionAmount:0.0,
    transactionDate:new Date(),
    transactionRemarks:'',
    transactionStatus:'',
    transactionid:'',
  }

  submitted = false;

  min : number = 500000; // transaction Id Min
  max : number = 800000; // transaction Id Max

  getRandomNumberBetween(min: number,max: number){
      return Math.floor(Math.random()*(max-min+1)+min);
    }
    
  getBalanceAsOnDate(value : string ){
    this.fromAccount = value.slice(0, value.indexOf('('));
    this.LoggedInEmailID = localStorage.getItem("LoggedInEmailID").toString();
    this.customerService.getcustomerDetails(this.LoggedInEmailID)
    .subscribe((resp:any) => {
          (error: any) => console.log(error);
            for (const data of resp) {
              for(const account of data.customerAccounts){
                if(account.accountnumber.toString() === this.fromAccount){
                  this.balanceAmount = account.balance;
                }
              }
            }
          console.log(this.balanceAmount);
        });
  }

  getToCustomerAccountDetails(value : string){
    this.emailIdToAccount = value.toString().slice(11,value.toString().indexOf(')'));
    this.customerService.getcustomerDetails(this.emailIdToAccount)
    .subscribe((resp:any) => {
          (error: any) => console.log(error);
            for (const data of resp) {
              this.toCustomerAccountDetails.push(data);
            }
          console.log(this.toCustomerAccountDetails);
        });
  }

  getFromCustomerInfoForFAN(){
    this.fromAccountNumbers=[];
    this.LoggedInEmailID = localStorage.getItem("LoggedInEmailID").toString();
    this.customerService.getcustomerDetails(this.LoggedInEmailID)
    .subscribe((resp:any) => {
          (error: any) => console.log(error);
            for (const data of resp) {
              this.fromCustomerAccountDetails.push(data);
              for(const account of data.customerAccounts){
                this.fromAccountNumbers.push(account.accountnumber.toString()+ "("+ data.customerEmailId + ")");
              }
            }
          console.log(this.fromAccountNumbers);
        });
  }

  readAllCustomersInfoForTAN(){
    this.toAccountNumbers=[];
      this.customerService.getCustomerDetails()
      .subscribe((resp:any) => {
            (error: any) => console.log(error);
            if(resp.length > 0)
            {
              for (const data of resp) {
                  for(const account of data.customerAccounts){
                    this.toAccountNumbers.push(account.accountnumber.toString() + "("+ data.customerEmailId + ")");
                  }
               }
            }
            this.toAccountNumbers = this.toAccountNumbers.
            filter(item=> !this.fromAccountNumbers.includes(item))
            console.log(this.toAccountNumbers);
        });
  }

  updateFromCustomer(fromId: any, resp : customer){
    this.customerService.UpdateCustomerAccountDetails(fromId,resp)
    .subscribe((resp:any)=>{
      console.log(resp);
    });
  }

  updateToCustomer(toID : any, resp:customer){
    this.customerService.UpdateCustomerAccountDetails(toID,resp)
    .subscribe((resp:any)=>{
      console.log(resp);
    });
  }

  createFundTransfer(){
    let transaction : statement = {
      transactionid : this.getRandomNumberBetween(this.min, this.max),
      transactionAmount : this.statement.transactionAmount,
      balanceAsOnDate : this.balanceAmount,
      fromAccountNumber : this.statement.fromAccountNumber,
      toAccountNumber : this.statement.toAccountNumber,
      transactionDate : this.statement.transactionDate,
      transactionStatus : 'Completed',
      transactionRemarks : this.statement.transactionRemarks,
      transactionType : this.statement.transactionType
    };

    if(transaction.transactionAmount < transaction.balanceAsOnDate){
      this.statementservice.createTransaction(transaction)
      .subscribe(
          response => {
              this.submitted = true;
              console.log(response);
              if(this.submitted){
                this.emailIdFromAccount = localStorage.getItem("LoggedInEmailID").toString();
        
                //Debit balance Functionality
                for(const data of this.fromCustomerAccountDetails){
                  this.fromid = data.id
                  for(const account of data.customerAccounts){
                        account.balance = (account.balance) - (this.statement.transactionAmount);
                  }
                }
                console.log(this.fromCustomerAccountDetails);
                this.updateFromCustomer(this.fromid,this.fromCustomerAccountDetails[0])
        
               //Credit Balance Functionality
               for(const data of this.toCustomerAccountDetails){
                    this.toid = data.id;
                   for(const toAccountnumber of data.customerAccounts){
                       toAccountnumber.balance = +toAccountnumber.balance + +this.statement.transactionAmount;
                   }
               }
               console.log(this.toCustomerAccountDetails);
               this.updateToCustomer(this.toid, this.toCustomerAccountDetails[0])
                alert("Trasaction Done.");
                window.location.href='./account-summary-component';
              }
          },
          error => {
            this.error.next(error);
      });
     }
    else  {
      alert("Transaction Amount should be less than Balance As on Date !.");
    }
  }
}
