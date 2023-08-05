import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],


})
export class ModalComponent implements OnInit {
  message: string = "this is a message"
  constructor() {}
  ngOnInit(): void {
  }

  @Input()
  isModalToDisplay: boolean = false;

  updateIsModalToDisplay(message: string, modalDisplay: boolean): void {
    this.message = message
    this.isModalToDisplay = modalDisplay
  }


}
