import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ESections} from "../shared/constants/routing.constants";
import {ProductsComponent} from "./products.component";

const routes: Routes = [
  {
    path: ESections.layout,
    component: ProductsComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
