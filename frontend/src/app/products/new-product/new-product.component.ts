import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IProduct} from "../../shared/constants/product.constants";
import {IInputItem} from "../../shared/constants/input.constants";
import {FormGroup} from "@angular/forms";
import {_PRODUCT_FORM_VALIDATORS_MAP, product_form_template} from "./new-product-form.constants";
import {FormUtilsService} from "../../shared/services/form-utils.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  title: string = "Add a new product";
  form_template: IInputItem[] = product_form_template;
  productForm!: FormGroup;

  constructor(public dialogRef:MatDialogRef<NewProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IProduct) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.productForm = FormUtilsService.initInputItemsFormGroup(this.form_template);
    FormUtilsService.setValidatorsToFormControls(this.productForm, _PRODUCT_FORM_VALIDATORS_MAP);
  }

  onSubmit(): void {
    const formValue: IProduct = this.productForm.getRawValue();
    FormUtilsService.validateAllFormFields(this.productForm);
    if (this.productForm.valid) {
      this.dialogRef.close(formValue);
    } else {
      // TODO snackbar?
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
