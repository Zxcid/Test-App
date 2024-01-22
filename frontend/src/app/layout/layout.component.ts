import {Component, OnDestroy, OnInit} from '@angular/core';
import {IStore} from "../shared/constants/store.constants";
import {HttpService} from "../shared/services/http.service";
import {Subject, takeUntil} from "rxjs";
import {UtilsService} from "../shared/services/utils.service";
import {PersistenceService} from "../shared/services/persistence.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  }

}
