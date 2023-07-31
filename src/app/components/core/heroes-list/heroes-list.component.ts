import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/app.interfaces';
import { HeroService } from '../service/hero.service';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroService: HeroService) {}
  ngOnInit(): void {

    this.heroes = this.heroService.getHeroesList();

    // Call the saveToLocalStorage() function to save the data when the component is initialized
    this.saveToLocalStorage();


  }
   heroes: Hero[]=[];

  saveToLocalStorage(): void {
    const heroesJson: string = JSON.stringify(this.heroes);
    localStorage.setItem('heroes', heroesJson);
  }

  geLocalStorage(): void {
    localStorage.getItem
  }

  onAddToMyheroes(hero: Hero, index: number): void {
    this.heroes[index].addedToMyHeroes = true
    this.heroService.addHeroToMyHeroes(hero);
    this.saveToLocalStorage()
  }

}
