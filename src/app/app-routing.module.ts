import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HeroesListComponent } from './components/core/heroes-list/heroes-list.component';

const routes: Routes = [
  {path: 'log-in', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'app-heroes-list', component: HeroesListComponent },
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  // {path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
