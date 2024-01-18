import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "./modules/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

export const SHARED_MODULES = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule
];

export const SHARED_COMPONENTS = [
];

@NgModule({
  declarations: [SHARED_COMPONENTS],
  imports: [SHARED_MODULES],
  exports: [SHARED_MODULES, SHARED_COMPONENTS]
})
export class SharedModule { }
