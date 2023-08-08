import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../../core/service/user-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  private isUserLogedInSubscription!: Subscription
  private isMyHeroesComponentOpenSubscriotion!: Subscription

  constructor(private userInfoService: UserInfoService) {}
  public isUserLogedIn!: boolean
  public  isMyHeroesComponentOpen!: boolean
  ngOnInit(): void {
    this.isUserLogedInSubscription = this.userInfoService.isUserLogedIn$.subscribe (isUserLogedIn =>{
      this.isUserLogedIn = isUserLogedIn;
      this.userInfoService.getIsUserLogedIn();
    })
    this.isMyHeroesComponentOpenSubscriotion = this.userInfoService.isMyHeroesComponentOpen$.subscribe(isMyHeroesComponentOpen =>{
      this.isMyHeroesComponentOpen = isMyHeroesComponentOpen;
      this.userInfoService.getIsMyHeroesComponentOpen()
    })
  }

  ngOnDestroy(): void {
    this.isUserLogedInSubscription.unsubscribe();
    this.isMyHeroesComponentOpenSubscriotion.unsubscribe();
  }
}
