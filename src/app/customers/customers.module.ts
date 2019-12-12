import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomersComponent } from './customers.component';
import { CustomersListComponent } from './customers-list/customers-list.coomponent';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomersListComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [ CustomersComponent ]
})
export class CustomersModule { }
