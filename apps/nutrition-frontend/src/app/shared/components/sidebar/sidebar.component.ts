import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

export type SideBarItem  = {
  label: string;
  icon: string;
  link: string;
  active: boolean;
}

@Component({
  selector: 'nutrition-app-sidebar',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {

  constructor(private _router: Router) {}

  @Output() logOutEvent = new EventEmitter<any>();

  @Input() user = {
    uid: '',
    email: '',
    displayName: '',
    photoURL: '',
  };

  @Input() items: SideBarItem[] = [
    {
      label: 'Home',
      icon: 'fa-solid fa-house',
      link: 'home',
      active: false
    },
    {
      label: 'Alimentos',
      icon: 'fa-solid fa-egg',
      link: 'food',
      active: true,
    },
    {
      // TODO[may 3, 2024]: add a better icon since bootstrap doesn't have one for this
      // like a plate of food, a plate with a fork and knife, something like that
      label: 'Dieta',
      icon: 'fa-solid fa-utensils',
      link: 'diet',
      active: false
    }

  ];


  itemClick(item:SideBarItem) {
    this._router.navigate([item.link]);
  }

}
