import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaginationService {
  private _paginaAtual$ = new BehaviorSubject<number>(1);
  private _itensPorPagina$ = new BehaviorSubject<number>(5);
  private _totalItens$ = new BehaviorSubject<number>(0);

  get paginaAtual$(): Observable<number> {
    return this._paginaAtual$.asObservable();
  }

  get itensPorPagina$(): Observable<number> {
    return this._itensPorPagina$.asObservable();
  }

  get totalItens$(): Observable<number> {
    return this._totalItens$.asObservable();
  }

  setPaginaAtual(pagina: number) {
    this._paginaAtual$.next(pagina);
  }

  setItensPorPagina(qtd: number) {
    this._itensPorPagina$.next(qtd);
  }

  setTotalItens(qtd: number) {
    this._totalItens$.next(qtd);
  }

  reset(pagina: number = 1, itensPorPagina: number = 5, totalItens: number = 0) {
    this._paginaAtual$.next(pagina);
    this._itensPorPagina$.next(itensPorPagina);
    this._totalItens$.next(totalItens);
  }

}
