import { Component, OnInit } from '@angular/core';
import { Hero } from '../../data/app.interfaces';
import { HeroService } from '../../core/service/hero.service';
import { UserInfoService } from '../../core/service/user-info.service';
import { ModalService } from '../../core/service/modal.service';



@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private userInfoService: UserInfoService,
    private modalService: ModalService

    ) {}

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroesList();   ///  pegination גם ישמש אותי ל
    this.saveToLocalStorage();

    //pegination
    this.updatePage()
    //pegination

  }


  displayedItems: Hero[] = [];

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

    //modal
    this.modalService.updateIsModalDisplayed(true, 'Hero was added')



    this.saveToLocalStorage()

  }



 // pegination

  itemsPerPage: number = 3
  currentPage: number = 1
  totalPages: number = 3;

  updatePage() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedItems = this.heroes.slice(startIndex, endIndex);
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
