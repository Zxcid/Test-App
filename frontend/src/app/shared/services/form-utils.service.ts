import {Injectable} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn} from "@angular/forms";
import {UtilsService} from "./utils.service";
import {EInputTypes, form_error_codes, IInputItem} from "../constants/input.constants";

@Injectable({
  providedIn: 'root'
})
export class FormUtilsService {

  constructor() {
  }

  /**
   * Init Form Group from an array of IInputItems elements
   * @param input_items
   * @param form_values
   */
  static initInputItemsFormGroup(input_items: IInputItem[] | undefined, form_values?: any) {
    if (UtilsService.isVoid(input_items)) {
      return new FormGroup({});
    }

    const group: any = {};

    input_items?.forEach((input: IInputItem) => {
      const name: string = input.key;
      const value: any = form_values && form_values[name] ? form_values[name] : null;

      group[name] = new FormControl(value);
    });

    return new FormGroup(group);
  }

  /**
   * Check if the form control in input has the required validator
   *
   * @param control AbstractControl
   * @return boolean
   */
  static isControlRequired(control: AbstractControl | any): boolean {
    if (!control) {
      return false;
    }

    if (control.validator) {
      const validator = control.validator({} as AbstractControl);
      if (validator && validator['required']) {
        return true;
      }
    }

    return false;
  }

  /**
   * Check if the input form control has been touched, and it's invalid
   *
   * @param formControlName the control name
   * @param formGroup the form group
   * @return boolean
   */
  static hasInvalid(formControlName: string, formGroup: FormGroup | null): boolean {
    if (!UtilsService.isVoid(formGroup) && formGroup?.controls[formControlName]) {
      return formGroup?.controls[formControlName]?.touched
        && formGroup?.controls[formControlName].invalid;
    } else {
      return false;
    }
  }

  /**
   * Returns custom error text for the given form control
   * CustomPatternError will prevail on default/generic error for pattern
   *
   * @param key the form control name
   * @param formGroup the FormGroup
   * @param customPatternError the pattern the form control should respect
   * @return string
   */
  static getInputError(key: string, formGroup: FormGroup | null, customPatternError?: string | undefined): string | undefined {
    const errors = [];
    let msg = '';

    function _setMessageByErrorCode(keyError: string) {
      switch (keyError) {
        case form_error_codes.required:
          msg = 'Required field.';
          break;
        case form_error_codes.pattern:
          msg = customPatternError ?? 'Incorrect format field.';
          break;
        default:
          msg = 'Generic error';
          break;
      }
      errors.push(msg);
    }


    if (!UtilsService.isVoid(formGroup?.get(key))) {
      const controlErrors: ValidationErrors | null | undefined = formGroup?.get(key)?.errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          _setMessageByErrorCode(keyError);
        });
      }

      return msg;
    }
    return undefined;
  }

  /**
   * Function that given a form group and a validator map
   * [where the key is the form control name and the value is a Validator or a list of Validators]
   * set the validators to each key
   *
   * @param form the form group
   * @param mapValidator validator map
   * @return FormGroup the updated form
   */
  static setValidatorsToFormControls(form: FormGroup, mapValidator: Map<string, ValidatorFn | ValidatorFn[]>): FormGroup {
    if (!UtilsService.isVoid(form) && !UtilsService.isVoid(mapValidator)) {
      mapValidator.forEach( (value: ValidatorFn | ValidatorFn[], key: string) => {
        form.controls[key].setValidators(value);
      })

      form.updateValueAndValidity();
    }

    return form;
  }

  /**
   * Function that given a form template, sets the option of an input of type select from the given option array.
   * This functions only works in templates with a single select.
   *
   * @param form_template the template to update
   * @param options the options to assign
   * @return form_template the updated template
   */
  static setSelectOptions(form_template: IInputItem[], options: any[]) {
    if (!UtilsService.isVoid(form_template)) {
      form_template.forEach(
        (input: IInputItem) => {
          if (input.type === EInputTypes.SELECT) {
            input.options = options;
          }
        }
      );
    }

    return form_template;
  }

  /**
   * Function that checks if all controls in a form group are valid marking them as touched and dirty.
   * Used before submitting the form.
   *
   * @param formGroup FormGroup
   * @return FormGroup
   */
  static validateAllFormFields(formGroup: FormGroup): FormGroup {
    if (!UtilsService.isVoid(formGroup)) {
      Object.keys(formGroup.controls).forEach(field => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({onlySelf: true});
          control.markAsDirty({onlySelf: true});
        } else if (control instanceof FormGroup) {
          this.validateAllFormFields(control);
        }
      });
    }
    return formGroup;
  }

}
