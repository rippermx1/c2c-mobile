import {Component, OnInit} from '@angular/core';
import {INavbar} from '../../interfaces/navbar/INavbar';
import {IOffer} from '../../interfaces/offers/IOffer';
import {OfferService} from '../../services/offers/offer.service';

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
  offers: IOffer[] = [];

  constructor(private offerService: OfferService) {}

  ngOnInit(): void {
    this.offers = this.offerService.getOffers();
  }
  doRefresh(event) {
    console.log(event);

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
}
