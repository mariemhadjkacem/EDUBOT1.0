import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },  // This is the default route (i.e., Welcome page)
  { path: 'home', component: HomeComponent },  // Route for the Home page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
