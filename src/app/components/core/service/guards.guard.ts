import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserInfoService } from './user-info.service';
import { Router } from '@angular/router';
// import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {
  constructor (private userInfoService: UserInfoService, private router:Router){}
  // private isUserLogedInSubscription!: Subscription

  // this.isUserLogedInSubscription = this.userInfoService.isUserLogedIn$.subscribe (isUserLogedIn =>{
  //   this.isUserLogedIn = isUserLogedIn;
  //   this.userInfoService.getIsUserLogedIn();
  // })

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.userInfoService.getIsUserLogedIn());
      // return true
      if(this.userInfoService.getIsUserLogedInGuard()){
        return true
      }

      return this.router.createUrlTree(['/log-in']);
      
  }

}
