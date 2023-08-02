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

  @Input()myHeroes!: Hero[];
  @Input()myHero!: Hero;



  isDisplayNone: boolean = true

  onShowOrHideContent(): void{
    this.isDisplayNone = !this.isDisplayNone
  }

  // onAddToMyheroes(hero: Hero, index: number): void {
  //   this.heroes[index].addedToMyHeroes = true
  //   this.heroService.addHeroToMyHeroes(hero);
  //   this.saveToLocalStorage()
  // }
  saveToLocalStorage(): void {
    const heroesJson: string = JSON.stringify(this.heroes);
    localStorage.setItem('heroes', heroesJson);
  }

  geLocalStorage(): void {
    localStorage.getItem
  }


// trainMyHero(index: number): void {
//   if(this.canBeTrain(index)){
//     this.myHeroes[index].currentPower =  this.myHeroes[index].currentPower*(1+(Math.random()*0.1));
//   this.saveToLocalStorage()
//   }
//   else{
//     alert('cant be traind more then five time a day, try tomorrow');
//   }

// }
// canBeTrain(index: number): boolean {
//   const currentDate = new Date();
//   const currentYear = currentDate.getFullYear();
//   const currentMonth = currentDate.getMonth() + 1;
//   const currentDay = currentDate.getDate();
//   const lastTrainingDay = this.myHeroes[index].lastTrainingDay;
//   const year = lastTrainingDay.getFullYear();
//   const month = lastTrainingDay.getMonth() + 1;
//   const day = lastTrainingDay.getDate();
//   if(currentYear===year && currentMonth === month && currentDay === day){
//     if(this.myHeroes[index].countTrainingLastDay<5){
//       this.myHeroes[index].countTrainingLastDay++;
//       return true
//     } else{
//       return false
//     }
//   }
//   else{
//     this.myHeroes[index].lastTrainingDay =  currentDate;
//     this.myHeroes[index].countTrainingLastDay = 1;
//     return true
//   }

// }




}
