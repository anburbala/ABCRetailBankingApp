import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import jsPDF from 'jspdf'; 
import autoTable from 'jspdf-autotable'; 
import { StatementService } from '../services/statement.service';


@Component({
  selector: 'app-detailed-statement',
  templateUrl: './detailed-statement.component.html',
  styleUrls: ['./detailed-statement.component.css']
})
export class DetailedStatementComponent implements OnInit {
  transactionsDetailsByCustomer= [];
  LoggedInEmailID: string;

  printPDF :[][] =[];

  //head = [['Date', 'Description', 'Transaction Amount', 'Transaction Type', 'Credit / Debit','Transaction Status','Balance As on Date']]

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

  // @ViewChild('content') content: ElementRef;  
  public SavePDF(): void {  
    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table' })
    doc.save('DetailedStatement.pdf')
  }  

}
