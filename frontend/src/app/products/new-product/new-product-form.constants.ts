import {EInputTypes, IInputItem} from "../../shared/constants/input.constants";
import {ValidatorFn, Validators} from "@angular/forms";

export const product_form_keys = {
  price: 'price',
  title: 'title',
  category: 'category',
  employee: 'employee',
  description: 'description'
}

export const product_form_template: IInputItem[] = [
  {
    key: product_form_keys.title,
    label: 'Name',
    type: EInputTypes.TEXT
  },
  {
    key: product_form_keys.price,
    label: 'Price',
    type: EInputTypes.NUMBER,
    hasPrefix: true,
    prefix: '€ ',
    min: 0
  },
  {
    key: product_form_keys.category,
    label: 'Category',
    type: EInputTypes.TEXT
  },
  {
    key: product_form_keys.employee,
    label: 'Employee',
    type: EInputTypes.TEXT
  },
  {
    key: product_form_keys.description,
    label: 'Description',
    type: EInputTypes.TEXTAREA
  }
];

export const _PRODUCT_FORM_VALIDATORS_MAP: Map<string, ValidatorFn | ValidatorFn[]> = new Map([
  [product_form_keys.title, [Validators.required]],
  [product_form_keys.price, [Validators.required]]
]);
