import { Observable, of } from "rxjs";
import { customer } from "../model/customer";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError, map} from 'rxjs/operators';

@Injectable()
export class CustomerService{
    constructor(private http: HttpClient){

    }

    getCustomerDetails() : Observable<customer[]> {
      return this.http
      .get<customer[]>('http://localhost:3000/customerdetails')
      .pipe(
        catchError(this.handleError<customer[]>('getCustomerDetails', [])));
    }

    getcustomerDetails(emailId : string)
    {
    return this.http
      .get<customer[]>('http://localhost:3000/customerdetails?customerEmailId='+emailId)
      .pipe(
        catchError(this.handleError<customer[]>('getCustomerDetails', [])));
    }
    
    UpdateCustomerAccountDetails(id:any, value:customer)
    {
      return this.http
      .put<customer[]>('http://localhost:3000/customerdetails/'+id, value)
      .pipe(
       catchError(this.handleError<customer[]>('UpdateCcustomerAccountDetails', [])))
    }
    
    //Store Customers method (Using PUT / POST method)
    create(customer : customer): Observable<customer[]> {
        console.log(customer);
        return this.http.post<customer[]>('http://localhost:3000/customerdetails',customer)
        .pipe(
          catchError(this.handleError<customer[]>('create', [])));

        
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