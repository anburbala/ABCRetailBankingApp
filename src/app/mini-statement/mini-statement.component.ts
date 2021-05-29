import { Component, OnInit } from '@angular/core';
import { StatementService } from '../services/statement.service';

@Component({
  selector: 'app-mini-statement',
  templateUrl: './mini-statement.component.html',
  styleUrls: ['./mini-statement.component.css']
})
export class MiniStatementComponent implements OnInit {
  LoggedInEmailID: string;
  transactionsDetailsByCustomer : any[];
  constructor(private statementservice : StatementService) { }

  ngOnInit(): void {
    this.readAllTransactionsByCustomer();
  }

  readAllTransactionsByCustomer()
  {
    this.transactionsDetailsByCustomer=[];
    this.LoggedInEmailID = localStorage.getItem("LoggedInEmailID").toString();
    this.statementservice.getTransactionDetailsByCustomer(this.LoggedInEmailID )
    .subscribe((resp:any) => {
      (error: any) => console.log(error);
        for (const data of resp) {
            this.transactionsDetailsByCustomer.push(data);
        }
      console.log(this.transactionsDetailsByCustomer);
    });
  }
}
