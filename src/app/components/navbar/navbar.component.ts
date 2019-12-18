import {Component, Input, OnInit} from '@angular/core';
import {INavbar} from '../../interfaces/navbar/INavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  /**
   * Navbar object
   */
  @Input() navbar: INavbar;
  constructor() { }

  ngOnInit() {}

}
