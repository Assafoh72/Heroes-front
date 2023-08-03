import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeroesListComponent } from './components/pages/heroes-list/heroes-list.component';
import { MyHeroesComponent } from './components/core/my-heroes/my-heroes.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { HeroCardComponent } from './components/core/hero-card/hero-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HeaderComponent,
    FooterComponent,
    HeroesListComponent,
    MyHeroesComponent,
    PageNotFoundComponent,
    HeroCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
