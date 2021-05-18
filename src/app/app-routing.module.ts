import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { DetailedStatementComponent } from './detailed-statement/detailed-statement.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';

const routes: Routes = [
{ path: 'account-summary-component', component: AccountSummaryComponent },
{ path: 'mini-statement-component', component: MiniStatementComponent },
{ path: 'detailed-statement-component', component: DetailedStatementComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
