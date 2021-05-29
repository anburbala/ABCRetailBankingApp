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

  head = [['Date', 'Description', 'Transaction Amount', 'Transaction Type', 'Credit / Debit','Transaction Status','Balance As on Date']]

  //head = [['ID', 'Country', 'Rank', 'Capital']]

  data = [
    [1, 'Finland', 7.632, 'Helsinki'],
    [2, 'Norway', 7.594, 'Oslo'],
    [3, 'Denmark', 7.555, 'Copenhagen'],
    [4, 'Iceland', 7.495, 'Reykjavík'],
    [5, 'Switzerland', 7.487, 'Bern'],
    [9, 'Sweden', 7.314, 'Stockholm'],
    [73, 'Belarus', 5.483, 'Minsk'],
  ]

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
    // let content=this.content.nativeElement;  
    // let doc = new jsPDF();  
    // let _elementHandlers =  
    // {  
    //   '#editor':function(element,renderer){  
    //     return true;  
    //   }  
    // };  

    // this.printPDF = this.transactionsDetailsByCustomer;

    // (doc as any).autoTable({
    //   head: this.head,
    //   body: this.printPDF,
    //   theme: 'plain',
    //   didDrawCell: (data: { column: { index: any; }; }) => {
    //     console.log(data.column.index)
    //   }
    // })


    const doc = new jsPDF()
    autoTable(doc, { html: '#my-table' })
    doc.save('DetailedStatement.pdf')
    
    // (doc as any).fromHTML(content.innerHTML,15,15,{  
    //   'width':190,  
    //   'elementHandlers':_elementHandlers  
    // });  

  //   (doc as any).autoTable({  
  //     html: '#content',  
  //     startY: 70,  
  //     theme: 'grid',  
  //     columnStyles: {  
  //         0: {  
  //             cellWidth: 180,  
  //         },  
  //         1: {  
  //             cellWidth: 180,  
  //         },  
  //         2: {  
  //             cellWidth: 180,  
  //         }  
  //     },  
  //     styles: {  
  //         minCellHeight: 40  
  //     }  
  // })  
  
    doc.save('DetailedStatement.pdf');  
  }  

}
