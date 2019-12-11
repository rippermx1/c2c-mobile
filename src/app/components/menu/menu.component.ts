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
        title: 'Registrate',
        url: '/register',
        icon: 'person'
      },
      {
        title: 'Iniciar Sesión',
        url: '/login',
        icon: 'key'
      },
      {
        title: 'Inicio',
        url: '/home',
        icon: 'home'
      },
      {
        title: 'Mis Compras',
        url: '/orders',
        icon: 'cart'
      },
      {
        title: 'Favoritos',
        url: '/favorites',
        icon: 'heart'
      },
      {
        title: 'Cerrar Sesion',
        url: '/logout',
        icon: 'close'
      }
    ];
  }
}
