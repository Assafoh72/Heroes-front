import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../data/app.interfaces';
import { HeroService } from '../service/hero.service';


@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.css']
})
export class HeroCardComponent implements OnInit {
  constructor(private heroService: HeroService){}
  ngOnInit(): void {
    console.log(this.hero);

  }
  @Input()hero!: Hero;
  @Input()heroes!: Hero[];
  @Input()i!:number;


  isDisplayNone: boolean = true

  onShowOrHideContent(): void{
    this.isDisplayNone = !this.isDisplayNone
  }

  onAddToMyheroes(hero: Hero, index: number): void {
    this.heroes[index].addedToMyHeroes = true
    this.heroService.addHeroToMyHeroes(hero);
    this.saveToLocalStorage()
  }
  saveToLocalStorage(): void {
    const heroesJson: string = JSON.stringify(this.heroes);
    localStorage.setItem('heroes', heroesJson);
  }

  geLocalStorage(): void {
    localStorage.getItem
  }




}
