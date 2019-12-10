import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuPages: any;

  constructor() { }

  ngOnInit() {
    this.sideMenuInit();
  }

  sideMenuInit() {
    this.menuPages = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home'
      }
    ];
  }
}
