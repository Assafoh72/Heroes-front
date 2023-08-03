import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/app.interfaces';
import { HeroService } from '../service/hero.service';
import { UserInfoService } from '../service/user-info.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(private heroService: HeroService, private userInfoService: UserInfoService) {}
  ngOnInit(): void {
    this.heroes = this.heroService.getHeroesList();
    this.saveToLocalStorage();
  }

   heroes: Hero[]=[];
   isDisplayNone: boolean = true
   userName = this.userInfoService.getUserInfo()?.name;

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
