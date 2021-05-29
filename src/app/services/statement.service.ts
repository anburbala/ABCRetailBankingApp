import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError} from 'rxjs/operators';
import { statement } from "../model/statement";

@Injectable()
export class StatementService{
    constructor(private http: HttpClient){  }

    createTransaction(statement : statement): Observable<statement[]> {
        console.log(statement);
        return this.http.post<statement[]>('http://localhost:3000/transactions',statement)
        .pipe(
          catchError(this.handleError<statement[]>('createTransaction', [])));
      }

      getTransactionDetailsByCustomer(emailId : string)
      {
        
      return this.http
        .get<statement[]>('http://localhost:3000/transactions?customerEmailId='+emailId+'&_limit=5')
        .pipe(
          catchError(this.handleError<statement[]>('getTransactionDetailsByCustomer', [])));
      }

      private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error);
          this.log(operation + " failed :"+ error.message);
          return of(result as T);
        };
      }

    private log(message: string) {
        console.log(message);
      }

}