export enum EInputTypes {
  SELECT = 'SELECT',
  DATE = 'DATE',
  TEXT = 'TEXT',
  TEXTAREA = 'TEXTAREA',
  CHECKBOX = 'CHECKBOX',
  NUMBER = 'NUMBER',
  RADIO = 'RADIO',
  FILE = 'FILE',
  AUTOCOMPLETE = 'AUTOCOMPLETE',
  CHIPS = 'CHIPS',
  COMBO_SELECT_CHIPS = 'COMBO_SELECT_CHIPS'
}

export type TInputTypes = keyof typeof EInputTypes;

export interface ISelectOptions {
  key: any;
  label?: string;
  selected?: boolean;
}

export interface IInputItem {
  key: string | any;
  label: string;
  disable?: boolean;
  css?: string;
  cssColumnLabel?: boolean;
  type?: TInputTypes;
  placeholder?: string;
  hasPrefix?:boolean;
  prefix?: string;
  hasSuffix?: boolean;
  suffix?: string;

  hide?: boolean;
  hint?: string;       // Small message for input compilation rules/hints

  /** Works with EInputTypes.SELECT type */
  options?: ISelectOptions[] | any[];  // Options for select inputs
  multiple?: boolean;                  // Make a multiple select

  /** Works with EInputTypes.CHECKBOX type */
  selected?: boolean;                 // Default selected for checkboxes

  /** Works with EInputTypes.NUMBER type */
  max?: number;                       // Max val for number inputs
  min?: number;                       // Min val for number inputs
}

export const form_error_codes = {
  oneRequired: 'oneRequired',
  backendError: 'backendError',
  pattern: 'pattern',
  required: 'required',
  min: 'min',
  max: 'max',
  minLength: 'minLength',
  maxLength: 'maxLength',
};
