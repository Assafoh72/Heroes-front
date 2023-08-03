import { Injectable } from '@angular/core';
import { Hero } from '../../data/app.interfaces';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs-compat';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private myHeroes: Hero[] = [];

  private myHeroesSubject = new BehaviorSubject<Hero[]>([]);
  myHeroes$: Observable<Hero[]> = this.myHeroesSubject.asObservable();

  updateMyHeroes(heroes: Hero[]) {
    this.myHeroesSubject.next(heroes);
  }

  getMyHeroes(): Hero[] {
    this.myHeroes.sort((b, a) => a.currentPower - b.currentPower)
    return this.myHeroes;
  }


  addHeroToMyHeroes(hero: Hero): void {

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

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
      lastTrainingDay: new Date (1999, 11, 18),
      countTrainingLastDay: 0,

    },
  ];
  getHeroesList(): Hero[] {
    this.heroesList.sort((b, a) => a.currentPower - b.currentPower)
    return this.heroesList
  }






}
