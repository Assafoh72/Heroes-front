import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from '../../core/service/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],


})
export class ModalComponent implements OnInit {

  private isModalToDisplaySubscription!: Subscription;
  constructor(private modalService: ModalService) {}
  public isModalToDisplay!: { isDisplayed: boolean; message: string };
  ngOnInit(): void {
    this.isModalToDisplaySubscription = this.modalService.isModalDisplayed$.subscribe (isModalDisplayed =>{
      this.isModalToDisplay = isModalDisplayed;
      this.modalService.getIsModalDisplayed();
    })
  }

  @Input()

  updateIsModalToDisplay( isDisplayed: boolean, message: string ): void {
    this.modalService.updateIsModalDisplayed(isDisplayed, message);
  }

  ngOnDestroy(): void {
    this.isModalToDisplaySubscription.unsubscribe();
  }
}
