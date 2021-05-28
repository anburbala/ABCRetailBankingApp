import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let url: string = state.url;
          return this.checkLogin(route, url);
  }

      checkLogin(route: ActivatedRouteSnapshot, url: string): true | UrlTree {
         console.log("Url: " + url)
         //let val: string = localStorage.getItem('isAdmin');
         let val: string = localStorage.getItem('privilage');
         if(val != null ){
            if(route.data.role && route.data.role.indexOf(val) === -1 && url == "/login-component" ){   //&& val == "true" 
                  this.router.parseUrl('/customersummary-component');
               }
               else if(route.data.role && route.data.role.indexOf(val) === -1 && url == "/login-component" ) //&& val == "false"
               {
                  this.router.parseUrl('/account-summary-component');
               }
            else 
               return true;
          }
          else {
            return this.router.parseUrl('/login-component');
         }
      }
  }
  

