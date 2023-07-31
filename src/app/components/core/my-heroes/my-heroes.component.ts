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
  if(this.canBeTrain(index)){
    this.myHeroes[index].currentPower =  this.myHeroes[index].currentPower*(1+(Math.random()*0.1));
  this.saveToLocalStorage()
  }
  else{
    alert('cant be traind more then five time a day, try tomorrow');
  }

}
canBeTrain(index: number): boolean {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const lastTrainingDay = this.myHeroes[index].lastTrainingDay;
  const year = lastTrainingDay.getFullYear();
  const month = lastTrainingDay.getMonth() + 1;
  const day = lastTrainingDay.getDate();
  if(currentYear===year && currentMonth === month && currentDay === day){
    if(this.myHeroes[index].countTrainingLastDay<5){
      this.myHeroes[index].countTrainingLastDay++;
      return true
    } else{
      return false
    }
  }
  else{
    this.myHeroes[index].lastTrainingDay =  currentDate;
    this.myHeroes[index].countTrainingLastDay = 1;
    return true
  }

}



}
