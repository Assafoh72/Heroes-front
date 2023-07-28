import { Component } from '@angular/core';
import { Hero } from '../../data/app.interfaces';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  disneyHeroes: Hero[] = [
    {
      name: 'Mickey Mouse',
      ability: 'defender',
      id: 'mickey-mouse',
      startDate: new Date(1928, 11, 18),
      suitColors: ['red', 'black', 'white'],
      startingPower: 80,
      currentPower: 80,
    },
    {
      name: 'Mulan',
      ability: 'attacker',
      id: 'mulan',
      startDate: new Date(1998, 6, 19),
      suitColors: ['red', 'yellow'],
      startingPower: 90,
      currentPower: 90,
    },
    {
      name: 'Simba',
      ability: 'defender',
      id: 'simba',
      startDate: new Date(1994, 6, 24),
      suitColors: ['yellow', 'orange'],
      startingPower: 85,
      currentPower: 85,
    },
    {
      name: 'Aladdin',
      ability: 'attacker',
      id: 'aladdin',
      startDate: new Date(1992, 11, 25),
      suitColors: ['purple', 'white'],
      startingPower: 88,
      currentPower: 88,
    },
    {
      name: 'Ariel',
      ability: 'attacker',
      id: 'ariel',
      startDate: new Date(1989, 11, 17),
      suitColors: ['green', 'blue'],
      startingPower: 85,
      currentPower: 85,
    },
    {
      name: 'Elsa',
      ability: 'attacker',
      id: 'elsa',
      startDate: new Date(2013, 11, 27),
      suitColors: ['blue', 'white'],
      startingPower: 95,
      currentPower: 95,
    },
    {
      name: 'Buzz Lightyear',
      ability: 'defender',
      id: 'buzz-lightyear',
      startDate: new Date(1995, 10, 22),
      suitColors: ['green', 'purple'],
      startingPower: 88,
      currentPower: 88,
    },
    {
      name: 'Pocahontas',
      ability: 'attacker',
      id: 'pocahontas',
      startDate: new Date(1995, 6, 23),
      suitColors: ['brown', 'green'],
      startingPower: 87,
      currentPower: 87,
    },
    {
      name: 'Woody',
      ability: 'defender',
      id: 'woody',
      startDate: new Date(1995, 10, 22),
      suitColors: ['yellow', 'brown'],
      startingPower: 82,
      currentPower: 82,
    },
    {
      name: 'Cinderella',
      ability: 'defender',
      id: 'cinderella',
      startDate: new Date(1950, 2, 4),
      suitColors: ['blue', 'silver'],
      startingPower: 80,
      currentPower: 80,
    },
  ];

}
