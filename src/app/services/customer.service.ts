import { Observable, of } from "rxjs";
import { customer } from "../model/customer";
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { catchError} from 'rxjs/operators';

@Injectable()
export class CustomerService{

    constructor(private http: HttpClient){

    }
    
    //Store Customers method (Using PUT / POST method)
    create(customer : customer): Observable<customer[]> {
        console.log(customer);
        return this.http.post<customer[]>('https://localhost:4200/customerdetails',customer)
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