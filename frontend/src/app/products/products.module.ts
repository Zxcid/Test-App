import {NgModule} from '@angular/core';

import {ProductsRoutingModule} from './products-routing.module';
import {ProductsComponent} from './products.component';
import {ProductComponent} from './product/product.component';
import {SharedModule} from "../shared/shared.module";
import { NewProductComponent } from './new-product/new-product.component';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductComponent,
    NewProductComponent
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
