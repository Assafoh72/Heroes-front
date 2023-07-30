import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})

export class UserInfoService {
  private userInfo: { email: string; password: string; name: string } | null = null;

  storeUserInfo(email: string, password: string, name: string): void {
    this.userInfo = { email, password, name };
  }

  getUserInfo(): { email: string; password: string; name: string } | null {
    return this.userInfo;
  }
}





