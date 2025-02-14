import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import { passwordMatchValidator } from '../../utils/validators';
import {NavbarComponent} from '../../shared/components/navbar/navbar.component';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatIcon, MatIconModule} from '@angular/material/icon';
import {MatInput, MatInputModule} from '@angular/material/input';
import {MatButton, MatButtonModule, MatIconButton} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatCheckbox, MatCheckboxModule} from '@angular/material/checkbox';
import {FooterComponent} from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  imports: [
    NavbarComponent,
    MatCard,
    MatCardHeader,
    MatCardContent,
    ReactiveFormsModule,
    MatFormField,
    MatIcon,
    MatInput,
    MatIconButton,
    NgIf,
    MatCheckbox,
    MatButton,
    MatCardActions,
    RouterLink,
    FooterComponent,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
  ],
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  hidePassword = true;
  hideConfirmPassword = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    }, { validators: passwordMatchValidator });
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log('Signup data:', this.signupForm.value);
      // Handle signup logic here
      this.router.navigate(['/dashboard']);
    }
  }
}
