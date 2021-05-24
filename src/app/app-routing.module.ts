import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomersummaryComponent } from './customer/customersummary.component';
import { DetailedStatementComponent } from './detailed-statement/detailed-statement.component';
import { LoginComponent } from './login/login.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';
import { AuthenticationGuard} from './authentication.guard';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';

//const customerModule = () => import('./customer/customer.module').then(x => x.CustomerModule);

const routes: Routes = [
{ path: 'home-component', component: HomeComponent},
{ path: 'login-component', component: LoginComponent},
{ path: 'logout-component', component: LogoutComponent},
{ path: 'account-summary-component', component: AccountSummaryComponent, canActivate : [AuthenticationGuard]},
//{ path: 'customer', loadChildren: customerModule },
{ path: 'customer-component', component: CustomerComponent,canActivate : [AuthenticationGuard] },
{ path: 'customersummary-component', component: CustomersummaryComponent,canActivate : [AuthenticationGuard] },
{ path: 'mini-statement-component', component: MiniStatementComponent },
{ path: 'detailed-statement-component', component: DetailedStatementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
