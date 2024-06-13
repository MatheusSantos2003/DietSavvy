import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../shared/components/layout/layout.component';
import { Router, RouterModule } from '@angular/router';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { AuthService } from '../../shared/services/auth.service';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'nutrition-app-home',
  standalone: true,
  imports: [
    CommonModule,
    LayoutComponent,
    RouterModule,
    SidebarComponent,
    MatDialogModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  user: any;

  constructor(
    private _authService: AuthService,
    private _router: Router,
    public dialog: MatDialog,
    private alertService: AlertService
    ) {}

  ngOnInit(): void {
    if(!this._authService.getCurrentUserProfile) return;
       this.user = this._authService.getCurrentUserProfile;
       this.alertService.openFirstUserAccessAlert();
  }

  async logOut() {
    console.log('logOut');
    await this._authService.SignOut();
    this._router.navigate(['/auth/login']);
  }

}
