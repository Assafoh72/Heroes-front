import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/app.interfaces';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit {
  constructor() {}
   ngOnInit(): void {
    // Call the saveToLocalStorage() function to save the data when the component is initialized
    this.saveToLocalStorage();
   }

  myHeroes: Hero[] = [
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
  ];

  // Function to save data to local storage
  saveToLocalStorage(): void {
    const heroesJson = JSON.stringify(this.myHeroes);


  // Save the JSON string to local storage under the key 'disneyHeroes'

  localStorage.setItem('heroes', heroesJson);

}



}
