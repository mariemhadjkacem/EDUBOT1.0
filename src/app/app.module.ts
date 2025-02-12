import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';  // ✅ Ensure this is imported
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import {MatIcon} from '@angular/material/icon';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent
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
// ✅ Make sure this is included
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
