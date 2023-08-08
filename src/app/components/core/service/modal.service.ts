import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isModalDisplayed: { isDisplayed: boolean; message: string } = { isDisplayed: false, message: '' };

  private isModalDisplayedSubject = new BehaviorSubject<{ isDisplayed: boolean; message: string }>({ isDisplayed: false, message: '' });
  isModalDisplayed$: Observable<{ isDisplayed: boolean; message: string }> = this.isModalDisplayedSubject.asObservable();

  updateIsModalDisplayed(isDisplayed: boolean, message: string) {
    this.isModalDisplayedSubject.next({ isDisplayed, message });
  }

  getIsModalDisplayed(): { isDisplayed: boolean; message: string } {
    return this.isModalDisplayed;
  }
}


