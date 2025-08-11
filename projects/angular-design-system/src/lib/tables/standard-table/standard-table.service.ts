import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Ordenacao } from '../../interfaces/IOrdenacao.type';

@Injectable({ providedIn: 'root' })
export class StandardTableService {
  private _orderBy$ = new BehaviorSubject<string>('Id');
  private _sortOrder$ = new BehaviorSubject<Ordenacao>('ASC');

  get orderBy$(): Observable<string> {
    return this._orderBy$.asObservable();
  }

  get sortOrder$(): Observable<Ordenacao> {
    return this._sortOrder$.asObservable();
  }

  setOrderBy(orderBy: string) {
    this._orderBy$.next(orderBy);
  }

  setSortOrder(sortOrder: Ordenacao) {
    this._sortOrder$.next(sortOrder);
  }

  reset(orderBy: string = 'Id', sortOrder: Ordenacao = 'ASC') {
    this._orderBy$.next(orderBy);
    this._sortOrder$.next(sortOrder);
  }
}
