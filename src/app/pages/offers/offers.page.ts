import { Component, OnInit } from '@angular/core';
import {INavbar} from '../../interfaces/navbar/INavbar';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  /**
   * Navbar object
   */
  navbar: INavbar = {
    url: '/home',
    icon: 'home',
    searchBar: false,
    text: 'Ofertas'
  };
  constructor() { }

  ngOnInit() {
  }

}
