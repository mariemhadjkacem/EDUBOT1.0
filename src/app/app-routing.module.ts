import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome.component';
import { HomeComponent } from './features/home/home.component';
import { LoginComponent } from './features/login/login.component';
import { CertificationComponent } from './features/certification/certification.component';
import { SignupComponent } from './features/signup/signup.component';
import { FormationComponent } from './features/formation/formation.component';
import { FormationDetailComponent } from './features/formation-detail/formation-detail.component';
const routes: Routes = [
  { path: '', component: WelcomeComponent },  // This is the default route (i.e., Welcome page)
  { path: 'home', component: HomeComponent },  // Route for the Home page
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'certification', component: CertificationComponent },
  { path: 'formations', component: FormationComponent },
  { path: 'formation/:id', component: FormationDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
