import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {IStore} from "../../shared/constants/store.constants";
import {environment} from "../../../environments/environment";
import {PersistenceService} from "../../shared/services/persistence.service";
import {Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {AppRoutingConstant} from "../../shared/classes/app-routing.constants";
import {ESections} from "../../shared/constants/routing.constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _store!: IStore;
  @Input() set store(store: IStore) {
    this._store = store;
  }
  get store(): IStore {
    return this._store;
  }

  appName: string = environment.appName;

  private $destroy: Subject<boolean> = new Subject<boolean>();

  constructor(private _persistenceService: PersistenceService,
              private _router: Router) { }

  /**
   * la subscription è per una futura implementazione del cambio di store da menu utente.
   */
  ngOnInit(): void {
    this._persistenceService.selectedStore.pipe(takeUntil(this.$destroy)).subscribe(s => {
      this.store = s;
    });
  }

  navigateHome() {
    this._router.navigate([AppRoutingConstant.fullPath([ESections.home])]).then(() => {
      this._persistenceService.clearStore();
      this._persistenceService.clearProducts();
    });
  }

  ngOnDestroy() {
    this.$destroy.next(true);
    this.$destroy.complete();
  }

}
