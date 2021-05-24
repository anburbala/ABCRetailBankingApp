import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {LayoutComponent} from './layout.component';
import { CustomerComponent } from './customer.component';
import { CustomersummaryComponent } from './customersummary.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CustomerRoutingModule,
        
    ],
    declarations: [
        LayoutComponent,
        CustomerComponent,
        CustomersummaryComponent
        
    ]
})
export class CustomerModule { }