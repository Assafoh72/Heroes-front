import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/app.interfaces';
import { HeroService } from '../../core/service/hero.service';
import { Subscription } from 'rxjs';
import { ModalService } from '../../core/service/modal.service';
import { max } from 'rxjs-compat/operator/max';


@Component({
  selector: 'app-my-heroes',
  templateUrl: './my-heroes.component.html',
  styleUrls: ['./my-heroes.component.css']
})
export class MyHeroesComponent implements OnInit {

   private myHeroesSubscription!: Subscription;


  constructor(
    private heroService: HeroService,
    private modalService: ModalService
    ) {}
   ngOnInit(): void {

    this.myHeroesSubscription = this.heroService.myHeroes$.subscribe(myHeroes => {
      this.myHeroes = myHeroes;
      this.sortMyHeroes();
      this.totalPages = Math.max(Math.ceil((myHeroes.length)/3), 1) ;
      this.updatePage()
      this.displayedItems = myHeroes.slice(this.startIndex, this.endIndex);
      this.heroService.getHeroesList();
    });
    this.myHeroes = this.heroService.getMyHeroes();
    this.saveToLocalStorage();
    this.updatePage()
   }

  myHeroes: Hero[] = [];
  displayedItems: Hero[] = [];

  saveToLocalStorage(): void {
  const myHeroesJson: string = JSON.stringify(this.myHeroes);
  localStorage.setItem('myHeroes', myHeroesJson);
}

geLocalStorage(): void {
  localStorage.getItem
}

trainMyHero(index: number): void {
  if(this.canBeTrain(index)){
    this.myHeroes[index].currentPower = Math.floor(this.myHeroes[index].currentPower*(1+(Math.random()*0.1)));
    this.heroService.updateMyHeroes(this.myHeroes)
    this.saveToLocalStorage()
  }
  else{
    this.modalService.updateIsModalDisplayed(true, 'cant be traind more then five time a day, try tomorrow')
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

getIndexById(id: string): number {
  return this.myHeroes.findIndex(hero => hero.id === id);
}

sortMyHeroes() {
  this.myHeroes.sort((b, a) => a.currentPower - b.currentPower)
}

ngOnDestroy(): void {
  this.myHeroesSubscription.unsubscribe();
}

 // pegination
 itemsPerPage: number = 3
 currentPage: number = 1
 totalPages: number = 1

  startIndex = (this.currentPage - 1) * this.itemsPerPage;
  endIndex = this.startIndex + this.itemsPerPage;



 updatePage() {
   this.startIndex = (this.currentPage - 1) * this.itemsPerPage;
   this.endIndex = this.startIndex + this.itemsPerPage;
   this.displayedItems = this.myHeroes.slice(this.startIndex, this.endIndex);
 }

 nextPage() {
   this.currentPage++;
   this.updatePage();
 }

 prevPage() {
   this.currentPage--;
   this.updatePage();
 }
 //pegination
}



