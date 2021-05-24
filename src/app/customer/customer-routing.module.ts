import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { CustomersummaryComponent } from './customersummary.component';
import { CustomerComponent } from './customer.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: '', component: CustomersummaryComponent },
            { path: '/customer-component', component: CustomerComponent },
            { path: '/customer-component/edit/:id', component: CustomerComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CustomerRoutingModule { }