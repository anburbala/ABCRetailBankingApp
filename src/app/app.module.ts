import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './services/customer.service';
import { CustomersummaryComponent } from './customersummary/customersummary.component';
import { AuthserviceService } from './authservice.service';
import { AuthenticationGuard } from './authentication.guard';
import { LogoutComponent } from './logout/logout.component';

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
    FundtransferComponent,
    CustomersummaryComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [CustomerService,AuthserviceService,AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
