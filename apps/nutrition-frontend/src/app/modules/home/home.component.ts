import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'nutrition-app-home',
  standalone: true,
  imports: [CommonModule,LayoutComponent,RouterModule,SidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(private _authService: AuthService, private _router: Router) {}

  ngOnInit(): void {
    if(!this._authService.getCurrentUserProfile) return;
       this.user = this._authService.getCurrentUserProfile;
  }

  async logOut() {
    console.log('logOut');
    await this._authService.SignOut();
    this._router.navigate(['/auth/login']);
  }

}
