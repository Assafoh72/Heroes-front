import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { HeroesListComponent } from './components/pages/heroes-list/heroes-list.component';
import { MyHeroesComponent } from './components/pages/my-heroes/my-heroes.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { GuardsGuard} from './components/core/service/guards.guard';

const routes: Routes = [
  {path: 'log-in', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'app-heroes-list',
    component: HeroesListComponent,
    canActivate: [GuardsGuard]
  },
  {
  path: 'app-my-heroes',
  component: MyHeroesComponent,
  canActivate: [GuardsGuard]
  },
  {path: '', redirectTo: 'log-in', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
