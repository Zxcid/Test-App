import {AppRoutingConstant} from "../classes/app-routing.constants";

export enum ESections {
  other = '**',
  layout = '',
  home = 'home'
}

export interface IAppSections {
  key: ESections | '',
  route: string,
  title: string,
  menuLabel?: string,
  active?: string
}

export const __appSections: IAppSections[] = [
  {
    key: ESections.layout,
    route: AppRoutingConstant.fullPath([ESections.layout]),
    title: 'Layout'
  },
  {
    key: ESections.home,
    route: AppRoutingConstant.fullPath([ESections.home]),
    title: 'Home'
  }
];

export const __emptyCurrentSection: IAppSections = {
  key: '',
  route: '',
  title: ''
};

export const __menuSections: IAppSections[] = [
  {
    key: ESections.home,
    route: AppRoutingConstant.fullPath([ESections.home]),
    title: 'Home'
  }
];


