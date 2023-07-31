import { Component, OnInit } from '@angular/core';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  constructor(private footerService: FooterService) {}
  ngOnInit(): void {

  }

  onActivate() {
    this.footerService.activatedEmitter.emit(true)
  }

}
