import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {ESections} from "../shared/constants/routing.constants";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: ESections.layout,
        redirectTo: ESections.home,
        pathMatch: 'full'
      },
      {
        path: ESections.home,
        component: HomeComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
