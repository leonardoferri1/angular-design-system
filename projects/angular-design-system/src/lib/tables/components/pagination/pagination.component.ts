import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationService } from './pagination.service';
import { combineLatest, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { DropdownComponent } from '../../../dropdown-menu/dropdown';
import { SelectInterface } from '../../../interfaces/ISelect';
import { tamanhoDePagina } from '../../../interfaces/ITamanhoDePagina.type';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  standalone: true,
  imports: [DropdownComponent, FormsModule, AsyncPipe],
})
export class PaginationComponent {
  paginaAtual = 1;
  itensPorPagina = 5;
  totalPaginas = 1;
  optionsItensPorPagina: SelectInterface[] = tamanhoDePagina;
  displayRange$: Observable<string> = new Observable<string>();
  obterOptionsDePaginas$: Observable<SelectInterface[]> = of([]);

  constructor(private paginationService: PaginationService) {}

  ngOnInit() {
    combineLatest([
      this.paginationService.paginaAtual$,
      this.paginationService.itensPorPagina$,
      this.paginationService.totalItens$,
    ]).subscribe(([paginaAtual, tamanhoDePagina, totalItens]) => {
      this.paginaAtual = paginaAtual;
      this.displayRange$ = of(
        this.obterRange(paginaAtual, tamanhoDePagina, totalItens)
      );
      this.obterOptionsDePaginas$ = of(
        this.obterOptionsDePaginas(totalItens, tamanhoDePagina)
      );
    });
  }

  obterRange(
    paginaAtual: number,
    tamanhoDePagina: number,
    totalItens: number
  ): string {
    const inicio = (paginaAtual - 1) * tamanhoDePagina + 1;
    const fim = Math.min(paginaAtual * tamanhoDePagina, totalItens);
    return `${inicio} - ${fim} de ${totalItens} itens`;
  }

  obterOptionsDePaginas(
    totalItens: number,
    tamanhoDePagina: number
  ): SelectInterface[] {
    this.totalPaginas = Math.ceil(totalItens / tamanhoDePagina);
    let qtdPaginasOptions: SelectInterface[] = [{ id: 1, name: '1' }];

    for (let i = 1; i < this.totalPaginas; i++) {
      qtdPaginasOptions.push({ id: i + 1, name: (i + 1).toString() });
    }

    return qtdPaginasOptions;
  }

  alterarPagina(pagina: number): void {
    if (pagina >= 1 && pagina <= this.totalPaginas) {
      this.paginaAtual = pagina;
      this.paginationService.setPaginaAtual(pagina);
    }
  }

  proxPagina(): void {
    this.alterarPagina(this.paginaAtual + 1);
  }

  antPagina(): void {
    this.alterarPagina(this.paginaAtual - 1);
  }

  primeiraPagina(): void {
    this.alterarPagina(1);
  }

  ultimaPagina(): void {
    this.alterarPagina(this.totalPaginas);
  }

  alterarItensPorPagina(valor: SelectInterface): void {
    if (valor) {
      this.paginationService.setItensPorPagina(valor.id);
      this.itensPorPagina = valor.id;
    }
  }
}
