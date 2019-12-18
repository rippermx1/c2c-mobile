import { Component, OnInit } from '@angular/core';
import {INavbar} from '../../interfaces/navbar/INavbar';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.page.html',
  styleUrls: ['./shopping.page.scss'],
})
export class ShoppingPage implements OnInit {
  /**
   * Navbar object for shopping page
   */
  navbar: INavbar = {
    url: '/home',
    icon: 'home',
    searchBar: true
  };

  items: any = [
    {
      id: 1,
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Sofá cama 1 plaza y media con tela nueva',
      price: 1990,
      free_shipping: true
    },
    {
      id: 2,
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'item 1',
      price: 1990,
      free_shipping: false
    },
    {
      id: 3,
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Mesa centro de marmol',
      price: 29990,
      free_shipping: true
    },
    {
      id: 4,
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'item 1',
      price: 1990,
      free_shipping: false
    },
    {
      id: 5,
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'item 1',
      price: 7990,
      free_shipping: true
    },
    {
      id: 6,
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'item 1',
      price: 19990,
      free_shipping: false
    },
    {
      id: 7,
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'item 1',
      price: 4990,
      free_shipping: true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
