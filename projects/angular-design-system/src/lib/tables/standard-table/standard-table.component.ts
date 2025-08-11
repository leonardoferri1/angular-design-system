import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  TemplateRef,
} from '@angular/core';
import { NgClass, NgIf, NgStyle, NgTemplateOutlet } from '@angular/common';
import { StandardTableService } from './standard-table.service';
import { combineLatest } from 'rxjs';
import { Column } from '../../interfaces/ITabela';
import { Ordenacao } from '../../interfaces/IOrdenacao.type';

@Component({
  selector: 'app-standard-table',
  imports: [NgClass, NgTemplateOutlet, NgIf, NgStyle],
  standalone: true,
  templateUrl: 'standard-table.component.html',
})
export class StandardTableComponent {
  standardTableService = inject(StandardTableService);

  @Input() showSelectionColumn: boolean = false;
  @Input() selectionMode: 'single' | 'multiple' = 'multiple';
  @Input() columns!: Column[];
  @Input() items: any[] | undefined = [];
  @Input() selectedIds: any[] = [];
  @Input() trackBy: string = 'id';
  @Input() customTemplate!: TemplateRef<any>;

  @Output() selectedItems = new EventEmitter<any[]>();

  isSortedBy: { orderBy: string; sortOrder: Ordenacao } = {
    orderBy: 'id',
    sortOrder: 'ASC',
  };

  constructor() {
    combineLatest([
      this.standardTableService.orderBy$,
      this.standardTableService.sortOrder$,
    ]).subscribe(([orderBy, sortOrder]) => {
      this.isSortedBy.orderBy = orderBy;
      this.isSortedBy.sortOrder = sortOrder;
    });
  }

  isSortable(
    setSortable: boolean | undefined,
    campoCustomizado: boolean | undefined
  ): boolean {
    return (
      setSortable === true ||
      (setSortable === undefined &&
        (campoCustomizado == false || campoCustomizado == undefined))
    );
  }

  isSelected(id: any): boolean {
    return <boolean>this.selectedIds?.includes(id);
  }

  get selectedCount(): number {
    return this.selectedIds.length;
  }

  private getSelectedItems(): any[] {
    return (
      this.items?.filter((item) =>
        this.selectedIds.includes(item[this.trackBy])
      ) ?? []
    );
  }

  isAllSelected() {
    if (this.items != undefined) {
      return this.items.every((item) => this.isSelected(item[this.trackBy]));
    }
    return false;
  }

  toggleSelectAll(): void {
    if (this.isAllSelected()) {
      this.selectedIds = [];
    } else {
      this.selectedIds = this.items?.map((item) => item[this.trackBy]) ?? [];
    }

    this.selectedItems.emit(this.getSelectedItems());
  }

  toggleSelection(id: any): void {
    const index = this.selectedIds.indexOf(id);

    if (index > -1) {
      this.selectedIds.splice(index, 1);
    } else {
      this.selectedIds.push(id);
    }

    this.selectedIds = [...this.selectedIds];
    this.selectedItems.emit(this.getSelectedItems());
  }

  sortColumn(field: string) {
    let sortOrder: Ordenacao = 'ASC';

    if (this.isSortedBy.orderBy === field) {
      sortOrder = this.isSortedBy.sortOrder === 'ASC' ? 'DESC' : 'ASC';
    }

    this.standardTableService.setOrderBy(field);
    this.standardTableService.setSortOrder(sortOrder);
  }
}
