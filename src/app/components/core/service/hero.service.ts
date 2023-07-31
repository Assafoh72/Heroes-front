import { EventEmitter, Injectable } from '@angular/core';
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

  private heroesList: Hero[] = [
    {
      name: 'Mickey Mouse',
      ability: 'defender',
      id: 'mickey-mouse',
      startDate: new Date(1928, 11, 18),
      suitColors: ['red', 'black', 'white'],
      startingPower: 80,
      currentPower: 80,
      addedToMyHeroes: false,
    },
    {
      name: 'Mulan',
      ability: 'attacker',
      id: 'mulan',
      startDate: new Date(1998, 6, 19),
      suitColors: ['red', 'yellow'],
      startingPower: 90,
      currentPower: 90,
      addedToMyHeroes: false,

    },
    {
      name: 'Simba',
      ability: 'defender',
      id: 'simba',
      startDate: new Date(1994, 6, 24),
      suitColors: ['yellow', 'orange'],
      startingPower: 85,
      currentPower: 85,
      addedToMyHeroes: false,

    },
    {
      name: 'Aladdin',
      ability: 'attacker',
      id: 'aladdin',
      startDate: new Date(1992, 11, 25),
      suitColors: ['purple', 'white'],
      startingPower: 88,
      currentPower: 88,
      addedToMyHeroes: false,

    },
    {
      name: 'Ariel',
      ability: 'attacker',
      id: 'ariel',
      startDate: new Date(1989, 11, 17),
      suitColors: ['green', 'blue'],
      startingPower: 85,
      currentPower: 85,
      addedToMyHeroes: false,

    },
    {
      name: 'Elsa',
      ability: 'attacker',
      id: 'elsa',
      startDate: new Date(2013, 11, 27),
      suitColors: ['blue', 'white'],
      startingPower: 95,
      currentPower: 95,
      addedToMyHeroes: false,

    },
    {
      name: 'Buzz Lightyear',
      ability: 'defender',
      id: 'buzz-lightyear',
      startDate: new Date(1995, 10, 22),
      suitColors: ['green', 'purple'],
      startingPower: 88,
      currentPower: 88,
      addedToMyHeroes: false,

    },
    {
      name: 'Pocahontas',
      ability: 'attacker',
      id: 'pocahontas',
      startDate: new Date(1995, 6, 23),
      suitColors: ['brown', 'green'],
      startingPower: 87,
      currentPower: 87,
      addedToMyHeroes: false,

    },
    {
      name: 'Woody',
      ability: 'defender',
      id: 'woody',
      startDate: new Date(1995, 10, 22),
      suitColors: ['yellow', 'brown'],
      startingPower: 82,
      currentPower: 82,
      addedToMyHeroes: false,

    },
    {
      name: 'Cinderella',
      ability: 'defender',
      id: 'cinderella',
      startDate: new Date(1950, 2, 4),
      suitColors: ['blue', 'silver'],
      startingPower: 80,
      currentPower: 80,
      addedToMyHeroes: false,

    },
  ];
  getHeroesList(): Hero[] {
    return this.heroesList
  }



}
