import { CommonModule } from '@angular/common';
import { FormControl,ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'nutrition-app-register',
  standalone: true,
  providers: [AuthService],
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {

  isPasswordVisible = false;
  email = new FormControl('');
  password = new FormControl('');

  constructor(public authService:AuthService) {

  }

  async loginWithGoogle() {
    await this.authService.SignInGoogle();
  }

  changePasswordVisible() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  async loginWithEmail() {

    if(!this.email.value || !this.password.value) return;
    // alert("values are: "+ this.email.value + " and "+ this.password.value);
    await this.authService.SignIn(this.email.value, this.password.value);

  }
}
