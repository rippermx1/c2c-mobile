import {Component, OnInit} from '@angular/core';
import {INavbar} from '../../interfaces/navbar/INavbar';
import {IOffer} from '../../interfaces/offers/IOffer';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  /**
   * Navbar object
   */
  navbar: INavbar = {
    url: '/shopping',
    icon: 'cart',
    searchBar: true
  };

  /**
   * Offers items
   */
  offers: IOffer[] = [
    {
      id: 1,
      img: 'http://lorempixel.com/400/100/',
      url: '/offer'
    },
    {
      id: 2,
      img: 'http://lorempixel.com/400/100/',
      url: '/offer'
    },
    {
      id: 3,
      img: 'http://lorempixel.com/400/100/',
      url: '/offer'
    }
  ];
  constructor() {}
  ngOnInit(): void {

  }
  doRefresh(event) {
    console.log(event);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
