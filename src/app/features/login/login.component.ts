import { Component } from '@angular/core';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {FooterComponent} from '../../shared/components/footer/footer.component';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    NavbarComponent,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatIcon,
    MatCardActions,
    FooterComponent,
    ReactiveFormsModule,
    MatInput,
    MatIconButton,
    MatButton,
    RouterLink,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ],

})
export class LoginComponent {
  loginForm: FormGroup;
  hidePassword = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('Login data:', this.loginForm.value);
      // Example: Call your authentication service
      // this.authService.login(this.loginForm.value).subscribe(...)
      this.router.navigate(['/home']);
    }
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
