import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { MiniStatementComponent } from './mini-statement/mini-statement.component';
import { DetailedStatementComponent } from './detailed-statement/detailed-statement.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { CustomerComponent } from './customer/customer.component';
import { SearchComponent } from './search/search.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountSummaryComponent,
    MiniStatementComponent,
    DetailedStatementComponent,
    LoginComponent,
    HeaderComponent,
    CustomerComponent,
    SearchComponent,
    FundtransferComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
