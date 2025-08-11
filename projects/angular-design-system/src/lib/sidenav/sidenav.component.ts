import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [NgIf, NgTemplateOutlet, NgClass],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  @Input() opened = false;
  @Input() tooltip = 'Fechar';
  @Output() openedChange = new EventEmitter<boolean>();
  @Output() onNavClose = new EventEmitter<Event>();

  close() {
    this.opened = false;
    this.openedChange.emit(this.opened);
  }

  onNavCloseEvent(event: Event): void {
    this.onNavClose.emit(event);
  }
}
