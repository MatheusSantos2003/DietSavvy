import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
      icon: 'bi-house',
      link: 'home',
      active: false
    },
    {
      label: 'Alimentos',
      icon: 'bi-egg-fried',
      link: 'influencers',
      active: true,
    },

  ];


  itemClick(item:SideBarItem) {
    this._router.navigate([item.link]);
  }

}
