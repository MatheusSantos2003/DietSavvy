import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'nutrition-app-register',
  standalone: true,
  providers: [CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  constructor(public authService:AuthService) {

  }

async loginWithGoogle() {
  await this.authService.SignInGoogle();
}

}
