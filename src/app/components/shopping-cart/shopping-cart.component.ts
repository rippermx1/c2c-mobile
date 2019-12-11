import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  items: any = [
    {
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'Sofá cama 1 plaza y media con tela nueva',
      price: 1990,
      shipping: true
    },
    {
      image: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
      name: 'item 1',
      price: 1990,
      shipping: false
    }
  ];
  constructor() { }

  ngOnInit() {}

  showItemDetail(item) {
    console.log(item);
  }
}
