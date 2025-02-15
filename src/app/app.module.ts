import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // ✅ Ensure this is imported
import { WelcomeComponent } from './features/welcome/welcome.component';
import { HomeComponent } from './features/home/home.component';
<<<<<<< HEAD
=======
import { CertificationComponent } from './features/certification/certification.component';
>>>>>>> second version
import {RouterModule} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardModule
} from '@angular/material/card';
import {MatError, MatFormField} from '@angular/material/form-field';
import {MatChipListbox, MatChipOption} from '@angular/material/chips';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import {MatToolbar} from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatInputModule } from '@angular/material/input';
import {MatAnchor, MatButton, MatButtonModule} from '@angular/material/button';
import {MatProgressBar} from '@angular/material/progress-bar';
import {NgOptimizedImage} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
<<<<<<< HEAD


=======
    CertificationComponent,
>>>>>>> second version
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatIcon,
    MatCard,
    MatCardContent,
    MatCardActions,
    MatCardHeader,
    MatFormField,
    MatChipListbox,
    MatChipOption,
    MatToolbar,
    NavbarComponent,
    FooterComponent,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAnchor,
    MatCardImage,
    MatButton,
    MatProgressBar,
    NgOptimizedImage,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
// ✅ Make sure this is included
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatError,
    // Other material modules...
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
