import { Component, OnInit } from '@angular/core';
import { smoothlyMenu } from '../../../app.helpers';
declare var jQuery: any;

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleNavigation(): void {
    jQuery('body').toggleClass('mini-navbar');
    smoothlyMenu();
  }
}
