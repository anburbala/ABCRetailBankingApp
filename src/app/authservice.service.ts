import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { customer } from './model/customer';
import { CustomerService } from './services/customer.service';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  customers : customer;
  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private http: HttpClient,private router : Router,private customerservice : CustomerService) { 

  }

  login(emailId: string, password:string) 
  {
   this.customerservice.getcustomerDetails(emailId)
    .subscribe((resp:any) => {
      (error: any) => console.log(error);
      if(resp.length > 0)
      {
          for (const data of resp) {
            if(data.password === password )
            {
                this.customers = data;
                break;
            }
        }
      }
      console.log(this.customers);
    });
    return of(this.customers);
  }

  logout()
  {
    localStorage.removeItem("isAdmin");
    localStorage.removeItem("isUserLoggedIn");
    localStorage.removeItem("privilage");
    //this.router.navigate(['/login-component']);
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
