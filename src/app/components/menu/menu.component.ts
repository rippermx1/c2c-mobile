import { Component, OnInit } from '@angular/core';
import {IMenuItem} from '../../interfaces/menu/IMenuItem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuItems: IMenuItem[];

  constructor() { }

  ngOnInit() {
    this.sideMenuInit();
  }

  sideMenuInit() {
    this.menuItems = [
      {
        text: 'Registrate',
        url: '/register',
        icon: 'person'
      },
      {
        text: 'Iniciar Sesión',
        url: '/login',
        icon: 'key'
      },
      {
        text: 'Inicio',
        url: '/home',
        icon: 'home'
      },
      {
        text: 'Mis Compras',
        url: '/orders',
        icon: 'cart'
      },
      {
        text: 'Favoritos',
        url: '/favorites',
        icon: 'heart'
      },
      {
        text: 'Cerrar Sesion',
        url: '/logout',
        icon: 'close'
      }
    ];
  }
}
