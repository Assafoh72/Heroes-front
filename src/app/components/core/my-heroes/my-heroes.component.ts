import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/app.interfaces';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
   ngOnInit(): void {
    // Retrieve the data from the HeroService
    this.myHeroes = this.heroService.getMyHeroes();

    // Call the saveToLocalStorage() function to save the data when the component is initialized
    this.saveToLocalStorage();
    console.log('Hello')
   }

  myHeroes: Hero[] = [

  ];

  // Function to save data to local storage
  saveToLocalStorage(): void {
  const myHeroesJson: string = JSON.stringify(this.myHeroes);
  // Save the JSON string to local storage under the key 'disneyHeroes'
  localStorage.setItem('myHeroes', myHeroesJson);
}

geLocalStorage(): void {
  localStorage.getItem
}

trainMyHero(index: number): void {
  this.myHeroes[index].currentPower =  this.myHeroes[index].currentPower*(1+(Math.random()*0.1));
  this.saveToLocalStorage()

}





}
