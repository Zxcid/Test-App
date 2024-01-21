import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {EInputTypes, IInputItem} from "../../constants/input.constants";
import {FormUtilsService} from "../../services/form-utils.service";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.scss']
})
export class MultipleInputComponent implements OnInit {

  @Input() item!: IInputItem;
  @Input() form!: FormGroup;

  @Output() emitInputValueChanged: EventEmitter<string> = new EventEmitter<string>();

  /** enum */
  EInputTypes = EInputTypes;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Check if form control is Required
   *
   * @param name the form control name
   * @return boolean
   */
  isControlRequired(name: string): boolean {
    return FormUtilsService.isControlRequired(this.form.controls[name]);
  }

  /**
   * Check if the form control is invalid
   *
   * @param formControlName the form control name
   * @return boolean
   */
  hasInvalid(formControlName: string): boolean {
    return FormUtilsService.hasInvalid(formControlName, this.form);
  }

  /**
   * Returns custom error text
   *
   * @param key form control name
   * @param customPatternError pattern
   * @return string
   */
  getInputError(key: string, customPatternError?: string | undefined): string | undefined {
    return FormUtilsService.getInputError(key, this.form);
  }

}
