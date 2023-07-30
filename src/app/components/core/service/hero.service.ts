import { Injectable } from '@angular/core';
import { Hero } from '../../data/app.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private myHeroes: Hero[] = [];

  // Method to get myHeroes
  getMyHeroes(): Hero[] {
    return this.myHeroes;
  }

  // Method to add a hero to myHeroes
  addHeroToMyHeroes(hero: Hero): void {
    // const heroToAdd = this.getMyHeroes()

    this.myHeroes.push(hero);
  }
}
